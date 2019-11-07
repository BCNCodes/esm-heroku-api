import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({  
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    message_body: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  });

  export default chatSchema;

  