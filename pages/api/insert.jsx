import { connectDB } from '../../utils/database'
import {getServerSession} from"next-auth";
import {authOptions} from '../api/auth/[...nextauth]'

export default async function handler(req,res) {
    const client =  await connectDB;
    const db = client.db('forum')
    let session = await getServerSession(req,res,authOptions)
    

    if(req.body.title != '' && req.body.content !=''){
        try{
           await db.collection('post').insertOne({title:req.body.title,content:req.body.content,writer:session.user.email})
        return res.status(200)
        }
        catch(error){
            req.send('db에러')

        }
    }
    res.status(500)

        
}
