import { connectDB } from '../../utils/database'
import { ObjectId } from 'mongodb';
export default async function handler(req,res) {

    const client =  await connectDB;
    const db = client.db('forum')
           await db.collection('post').updateOne({_id:new ObjectId(req.body.id)},{$set:{title:req.body.title,content:req.body.content}})
       res.status(200).redirect('/post')
        }

