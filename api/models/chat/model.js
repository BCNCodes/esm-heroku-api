import mongoose from 'mongoose';
import ChatSchema from './schema.js';

export default mongoose.model("Chats", ChatSchema);
//export const  Project = mongoose.model("Project", ProjectSchema);
