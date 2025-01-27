import QRCode from 'qrcode';

export const generateBookingQRCode = (userId, serviceId, timestamp) => {

  const shortUserId = userId.slice(0, 4);
  const shortServiceId = serviceId.slice(0, 4);
  const shortTimestamp = timestamp.toString().slice(-4);

  return `${shortUserId}-${shortServiceId}-${shortTimestamp}`;
};

export const generateQRCode = async (data) => {
  try {
    const qrDataUrl = await QRCode.toDataURL(JSON.stringify(data), {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 500,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    });
    return qrDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
}; 