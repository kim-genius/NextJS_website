import { connectDB } from '../../utils/database'

export default async function handler(req,res) {
    const client =  await connectDB;
    const db = client.db('forum')

    if(req.body.title != '' && req.body.content !=''){
        try{
           await db.collection('post').insertOne({title:req.body.title,content:req.body.content})
        return res.status(200)
        }
        catch(error){
            req.send('db에러')

        }
    }
    res.status(500)

        
}
