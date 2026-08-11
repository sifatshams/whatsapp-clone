import mongoose from 'mongoose';

// create conversation schema
const conversationSchema = new mongoose.Schema(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },

    unreadCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false },
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;
