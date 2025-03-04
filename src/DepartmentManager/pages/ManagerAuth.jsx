import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { departmentManagerAuth } from '../../services/departmentManagerAuth';
import { validatePassword, getPasswordStrengthColor } from '../../services/passwordValidator';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ManagerAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    departmentId: ''
  });

  useEffect(() => {
    loadDepartments();
    checkExistingAuth();
  }, []);

  useEffect(() => {
    if (formData.password) {
      setPasswordValidation(validatePassword(formData.password));
    }
  }, [formData.password]);

  const checkExistingAuth = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/department-manager/dashboard');
    }
  };

  const loadDepartments = async () => {
    try {
      const deps = await departmentManagerAuth.getAvailableDepartments();
      setDepartments(deps);
    } catch (error) {
      toast.error('Failed to load departments');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isForgotPassword) {
        await departmentManagerAuth.sendPasswordReset(formData.email);
        toast.success('Password reset email sent. Please check your inbox.');
        setIsForgotPassword(false);
        return;
      }

      if (!isLogin) {
        // Validate password for registration
        const validation = validatePassword(formData.password);
        if (!validation.isValid) {
          toast.error(validation.errors[0]);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match');
          return;
        }
      }

      if (isLogin) {
        const result = await departmentManagerAuth.loginManager(
          formData.email,
          formData.password
        );
        localStorage.setItem('user', JSON.stringify(result));
        toast.success('Login successful');
        navigate('/department-manager/dashboard');
      } else {
        const result = await departmentManagerAuth.registerManager(
          formData.email,
          formData.password,
          formData.fullName,
          formData.departmentId
        );
        toast.success('Registration successful. Please wait for admin verification.');
        setIsLogin(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setIsLogin(true);
  };

  const renderPasswordStrength = () => {
    if (!formData.password || isLogin) return null;

    return (
      <div className="mt-2">
        <div className="flex items-center space-x-2 mb-1">
          <div className={`h-2 flex-1 rounded ${getPasswordStrengthColor(passwordValidation?.strength)}`}></div>
          <span className="text-sm text-gray-600 capitalize">{passwordValidation?.strength || 'weak'}</span>
        </div>
        {passwordValidation?.errors.map((error, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600 mt-1">
            {error.includes('must') ? <FaTimesCircle className="text-red-500 mr-2" /> : <FaCheckCircle className="text-green-500 mr-2" />}
            {error}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isForgotPassword 
            ? 'Reset Password'
            : `Department Manager ${isLogin ? 'Login' : 'Registration'}`}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {!isForgotPassword && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required={!isForgotPassword}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                </button>
              </div>
              {renderPasswordStrength()}
            </div>
          )}

          {!isLogin && !isForgotPassword && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  name="departmentId"
                  value={formData.departmentId}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isForgotPassword 
              ? 'Send Reset Link'
              : isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-4 text-center space-y-2">
          {isLogin && !isForgotPassword && (
            <button
              onClick={toggleForgotPassword}
              className="text-sm text-blue-600 hover:text-blue-800 block w-full"
            >
              Forgot Password?
            </button>
          )}
          
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setIsForgotPassword(false);
              setFormData({
                ...formData,
                password: '',
                confirmPassword: ''
              });
            }}
            className="text-sm text-blue-600 hover:text-blue-800 block w-full"
          >
            {isLogin ? 'Need to register?' : 'Already have an account?'}
          </button>

          {isForgotPassword && (
            <button
              onClick={toggleForgotPassword}
              className="text-sm text-blue-600 hover:text-blue-800 block w-full"
            >
              Back to Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerAuth; 