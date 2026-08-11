import mongoose from 'mongoose';

// create message schema
const messageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conversation',
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
    },
    imageOrVideoUrl: {
      type: String,
    },
    contentType: {
      type: String,
      enum: ['image', 'video', 'text'],
    },
    reactions: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        emoji: String,
      },
    ],
    messageStatus: {
      type: String,
      default: 'send',
    },
  },
  { timestamps: true, versionKey: false },
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
