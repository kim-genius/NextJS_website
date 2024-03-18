import { redirect } from 'next/dist/server/api-utils';
import { connectDB } from '../../utils/database'

export default async function handler(req,res) {
    const client =  await connectDB;
    const db = client.db('forum')
    if(req.body.email != '' && req.body.password !=''){
        db.collection('user').insertOne({email:req.body.email,password:req.body.password})
        res.status(200).redirect('/')
       
    }

        
}
