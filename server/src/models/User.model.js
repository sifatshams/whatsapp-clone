import mongoose from 'mongoose';

// create user schema
const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    phoneSuffix: {
      type: String,
      unique: false,
    },

    username: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters.'],
      maxlength: [50, 'Name must not exceed 50 characters.'],
    },

    email: {
      type: String,
      required: [true, 'Email is required.'],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Please enter a valid email.',
      ],
    },

    emailOtp: {
      type: String,
    },

    emailOtpExpiry: {
      type: Date,
    },

    profilePicture: {
      type: String,
    },

    about: {
      type: String,
    },

    lastSeen: {
      type: Date,
    },

    isOnline: {
      type: Boolean,
      default: false,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    agreed: {
      type: String,
      default: false,
    },
  },
  { timestamps: true, versionKey: false },
);

const User = mongoose.model('User', userSchema);

export default User;
