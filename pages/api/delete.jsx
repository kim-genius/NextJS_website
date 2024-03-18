import { connectDB } from '../../utils/database'
import { ObjectId } from 'mongodb';
import {getServerSession} from"next-auth";
import {authOptions} from '../api/auth/[...nextauth]'

export default  async function handler(req,res) {
    const client = await connectDB;
    let session = await getServerSession(req,res,authOptions)
    const db = client.db('forum')
    if(req.body.writer == session.user.email){
    await db.collection('post').deleteOne({"_id":new ObjectId(req.body.id)})  
     res.send(200)
    } res.send(500)
    
        
}
