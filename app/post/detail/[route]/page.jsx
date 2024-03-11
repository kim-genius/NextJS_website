import { connectDB } from '../../../../utils/database'
import { ObjectId } from 'mongodb';
export default async function Detail(props) {

    const client = await connectDB;
    const db = client.db('forum')
     let result = await db.collection('post').findOne({_id: new ObjectId(props.params.route)})
  return (
    <div className="bg-white p-10 flex flex-col">
      <h1 className="text-3xl text-black">{result.title}</h1>
      <p className="text-lg text-black">{result.content}</p>
  </div>
  );
}
