import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../Database/firebase';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaQrcode,
  FaEdit,
  FaSave,
  FaTimes,
  FaHistory,
  FaCheckCircle
} from 'react-icons/fa';

export const Profile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    bio: ''
  });
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user?.uid) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserData(data);
            setEditForm({
              fullName: data.fullName || '',
              phoneNumber: data.phoneNumber || '',
              address: data.address || '',
              bio: data.bio || ''
            });

            // Fetch booking history with tickets
            const bookings = [
              {
                id: 1,
                service: 'Fish Supply',
                date: '2024-02-20',
                status: 'completed',
                amount: 2500,
                ticketId: 'TKT001',
                qrCode: 'data:image/png;base64,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',
                department: 'Supply Chain',
                timeSlot: '10:00 AM',
                description: 'Fresh fish supply delivery',
                location: 'Warehouse A'
              },
              {
                id: 2,
                service: 'Equipment Maintenance',
                date: '2024-02-15',
                status: 'pending',
                amount: 1500,
                ticketId: 'TKT002',
                qrCode: 'data:image/png;base64,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',
                department: 'Maintenance',
                timeSlot: '2:00 PM',
                description: 'Monthly equipment check and maintenance',
                location: 'Workshop B'
              }
            ];
            setBookingHistory(bookings);
          }
        }
      } catch (error) {
        toast.error('Failed to fetch user data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateDoc(doc(db, 'users', user.uid), editForm);
      setUserData(prev => ({ ...prev, ...editForm }));
      setIsEditing(false);
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile');
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-6"
          >
            <div className="h-24 w-24 rounded-full bg-white/10 flex items-center justify-center">
              <FaUser className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {userData?.fullName || user.displayName || 'User Profile'}
              </h1>
              <p className="text-blue-100 mt-1">{user.email}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Profile Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  {isEditing ? (
                    <>
                      <FaTimes className="h-4 w-4 mr-2" />
                      Cancel
                    </>
                  ) : (
                    <>
                      <FaEdit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </button>
          </div>
          
            <div className="space-y-6">
                {isEditing ? (
                  // Edit Form
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={editForm.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={editForm.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={editForm.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={editForm.bio}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={handleSubmit}
                        className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaSave className="h-4 w-4 mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </>
                ) : (
                  // Display Information
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <FaUser className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Full Name</p>
                        <p className="mt-1 text-gray-900">{userData?.fullName || 'Not set'}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaEnvelope className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <p className="mt-1 text-gray-900">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaPhone className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Phone Number</p>
                        <p className="mt-1 text-gray-900">{userData?.phoneNumber || 'Not set'}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="mt-1 text-gray-900">{userData?.address || 'Not set'}</p>
                      </div>
                    </div>
                    {userData?.bio && (
                      <div className="md:col-span-2 flex items-start space-x-3">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Bio</p>
                          <p className="mt-1 text-gray-900">{userData.bio}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Booking History */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Booking History</h2>
                <div className="flex items-center space-x-2">
                  <span className="flex items-center text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                    Completed
                  </span>
                  <span className="flex items-center text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                    Pending
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                {bookingHistory.map((booking) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                <div>
                          <h3 className="text-xl font-semibold text-gray-900">{booking.service}</h3>
                          <p className="text-gray-600 mt-1">{booking.description}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'completed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                </div>
                
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Ticket ID</p>
                          <p className="font-medium text-gray-900">{booking.ticketId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Department</p>
                          <p className="font-medium text-gray-900">{booking.department}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium text-gray-900">{booking.date}</p>
                        </div>
                <div>
                          <p className="text-sm text-gray-500">Time</p>
                          <p className="font-medium text-gray-900">{booking.timeSlot}</p>
                        </div>
                </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium text-gray-900">{booking.location}</p>
                        </div>
                <div>
                          <p className="text-sm text-gray-500">Amount</p>
                          <p className="font-medium text-gray-900">PKR {booking.amount}</p>
                        </div>
                        {booking.qrCode && (
                          <div className="flex justify-end md:col-span-1">
                            <img
                              src={booking.qrCode}
                              alt="Ticket QR Code"
                              className="h-16 w-16 object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end items-center pt-4 border-t border-gray-100">
                        {booking.status === 'pending' && (
                          <button
                            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                          >
                            <FaQrcode className="h-4 w-4 mr-2" />
                            Show QR Code
                          </button>
                        )}
                        <button
                          className="ml-4 flex items-center text-sm font-medium text-gray-600 hover:text-gray-700"
                        >
                          <FaHistory className="h-4 w-4 mr-2" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {bookingHistory.length === 0 && (
                  <div className="text-center py-12">
                    <FaHistory className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No Bookings Yet</h3>
                    <p className="mt-1 text-gray-500">Your booking history will appear here</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* QR Code */}
            {userData?.qrCode && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your QR Code</h3>
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img
                      src={userData.qrCode}
                      alt="QR Code"
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Use this QR code for quick verification at our locations
                  </p>
                </div>
              </motion.div>
            )}

            {/* Account Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="flex items-center text-blue-600">
                    <FaCheckCircle className="h-4 w-4 mr-1" />
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Member Since</span>
                  <span className="flex items-center text-gray-900">
                    <FaCalendarAlt className="h-4 w-4 mr-1" />
                    {new Date(userData?.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Verification</span>
                  <span
                    className={`flex items-center ${
                      userData?.isVerified ? 'text-blue-600' : 'text-yellow-600'
                    }`}
                  >
                    {userData?.isVerified ? (
                      <>
                        <FaCheckCircle className="h-4 w-4 mr-1" />
                        Verified
                      </>
                    ) : (
                      'Pending'
                    )}
                  </span>
                </div>
              </div>
            </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}; 