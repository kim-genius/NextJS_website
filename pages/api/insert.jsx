import { connectDB } from '../../utils/database'

export default  async function handler(req,res) {
    const client =  await connectDB;
    const db = client.db('forum')
        db.collection('post').insertOne({title:req.body.title,content:req.body.content})
       res.json('success')
        
}
