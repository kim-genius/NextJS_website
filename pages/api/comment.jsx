import { connectDB } from '../../utils/database'
import {getServerSession} from"next-auth";
import {authOptions} from '../api/auth/[...nextauth]'

export default async function handler(req,res) {
    const client =  await connectDB;
    const db = client.db('forum')
    console.log(req.body)
    let session = await getServerSession(req,res,authOptions)
    let result = await db.collection('comment').insertOne({content:req.body.comment,parent:req.body.postId,writer:session.user.email})
    if(result){
    res.status(200).send('success') }
}
