import { connectDB } from '../../utils/database'
import { ObjectId } from 'mongodb';

export default  async function handler(req,res) {
    const client = await connectDB;
    const db = client.db('forum')
    await db.collection('post').deleteOne({"_id":new ObjectId(req.body.id)})  
     res.send(200)
    
        
}
