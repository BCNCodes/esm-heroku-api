import Project from './model.js';
import mongo from '../../mongo/MongoManager.js';

class projectDAO {

    constructor(){
        mongo.connect();
    }


create(data){
   
    const project = new Project();
    Object.assign(project, data);

    return project.save();
}

list(){
    return Project.find().exec();
}

listOne(id){
    
    return Project.findById(id).exec();
}
update(id,data){
    return Project.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
}
remove(id){
    
    return Project.findByIdAndRemove(id,{useFindAndModify:false}).exec();
}



}

export default new projectDAO();