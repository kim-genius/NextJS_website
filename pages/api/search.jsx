import { connectDB } from '../../utils/database'

export default  async function handler(req,res) {
    const client = await connectDB;
    const db = client.db('forum')
     let result = await db.collection('post').find().toArray()
     res.json(result)
        
}
