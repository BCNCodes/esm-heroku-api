import mongoose from 'mongoose';
import StudentSchema from './schema.js';

export default mongoose.model("Students", StudentSchema);
//export const  Project = mongoose.model("Project", ProjectSchema);
