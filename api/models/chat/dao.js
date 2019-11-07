//import mongoose from 'mongoose';
import Chat from './model.js';
import mongo from '../../mongo/MongoManager.js';

class chatDAO {

    constructor(){
        mongo.connect();
    }


create(data){

    const chat = new Chat(data);
    return chat.save()
}

/* list(){
    return Chat.find()
    .populate('projects')
    .lean();
}

listOne(id){
    
    return Chat.findById(id)
    .populate('projects')
    .exec();
}
update(id,data){
    return Chat.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
}
remove(id){
    
    return Chat.findByIdAndRemove(id,{useFindAndModify:false}).exec();
}
 */


}

export default new chatDAO();