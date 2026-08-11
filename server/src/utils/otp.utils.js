// generate otp
export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// otp expiry
export const getOtpExpiry = () => {
  return new Date(Date.now() + 5 * 60 * 1000);
};
