import { connectDB } from '../../../../utils/database'
import { ObjectId } from 'mongodb';
import Link from 'next/link';
import Delete from '../../../components/Delete'
import Comment from '../../../components/comment';
import Imgupload from '../../../components/Imgupload'
import { notFound } from "next/navigation";

export default async function Detail(props) {
    
    const client = await connectDB;
    const db = client.db('forum')
     let result = await db.collection('post').findOne({_id: new ObjectId(props.params.route)})
    
     if(result === null){return notFound()}
     else{

  return (
      
    <div className="bg-white p-10 flex flex-col">
   
      <h1 className="text-3xl text-black">{result.title}</h1>
      <p className="text-lg text-black">{result.content}</p>
      <div className="mt-20">
        <Link className ='text-black mt-10' href={`/edit/${result._id}`}>수정</Link>
        <Delete id={props.params.route} writer={result.writer}></Delete>
       
      </div>
      <Imgupload></Imgupload>
      <Comment postId={result._id.toString()}></Comment>
      
  </div>
  );
}
}