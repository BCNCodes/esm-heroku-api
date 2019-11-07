//import mongoose from 'mongoose';
import Student from './model.js';
import mongo from '../../mongo/MongoManager.js';

class studentDAO {

    constructor(){
        mongo.connect();
    }


create(data){

    const student = new Student(data);
    return student.save()
}

list(){
    return Student.find()
    .populate('projects')
    .lean();
}

checkUser(data){
    
    return Student.findOne(data)
     .populate('projects')
    .exec(); 
}
listOne(id){
    
    return Student.findById(id)
    .populate('projects')
    .exec();
}
update(id,data){
    return Student.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
}
remove(id){
    
    return Student.findByIdAndRemove(id,{useFindAndModify:false}).exec();
}



}

export default new studentDAO();