import { connectDB } from '../../utils/database'
import {getServerSession} from"next-auth";
import {authOptions} from '../api/auth/[...nextauth]'

export default async function handler(req,res) {
    const client =  await connectDB;
    const db = client.db('forum')
    let session = await getServerSession(req,res,authOptions)
    
    db.collection('comment').insertOne({content:req.body.comment,parent:req.body.postId,writer:session.user.email})
    res.status(200)
}
