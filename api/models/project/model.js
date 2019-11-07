import mongoose from 'mongoose';
import ProjectSchema from './schema.js';


export default  mongoose.model("Project", ProjectSchema);
