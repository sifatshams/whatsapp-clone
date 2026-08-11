import User from '../models/User.model.js';
import { generateOtp, getOtpExpiry } from '../utils/otp.utils.js';

// Step-1 Send Otp
export const sendOtpController = async (req, res) => {
  try {
    const { email, phoneNumber, phoneSuffix } = req.body;

    // validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required!',
      });
    }

    if (!phoneNumber || !phoneSuffix) {
      return res.status(400).json({
        success: false,
        message: 'Phone number and phone suffix are required!',
      });
    }

    const fullPhoneNumber = `${phoneSuffix}${phoneNumber}`;

    // Generate OTP
    const otp = generateOtp();
    const otpExpiry = getOtpExpiry();

    // find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        phoneNumber: fullPhoneNumber,
        emailOtp: otp,
        emailOtpExpiry: otpExpiry,
      });
    } else {
      user.phoneNumber = fullPhoneNumber;
      user.emailOtp = otp;
      user.emailOtpExpiry = otpExpiry;
    }

    await user.save();

    // Send OTP email
    // TODO: integrate email service (e.g. Nodemailer, SendGrid)
    // await sendOtpEmail(email, otp);

    // success response
    return res.status(200).json({
      success: true,
      message: 'OTP sent to your email!',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
