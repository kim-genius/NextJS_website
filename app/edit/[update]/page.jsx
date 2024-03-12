import { connectDB } from '../../../utils/database'
import { ObjectId } from 'mongodb';


export default async function edit(props) {

    const client = await connectDB;
    const db = client.db('forum')
     let result = await db.collection('post').findOne({_id: new ObjectId(props.params.update)})
  return (
    <div>
        <h2>수정페이지</h2>
    <form className="bg-white p-10 flex flex-col" action="/api/update" method="post">
    <input className='hidden' name="id" defaultValue={props.params.update}></input>
      <input className="text-3xl text-black" name="title" defaultValue={result.title}></input>
      <input className="text-lg text-black" name="content" defaultValue={result.content}></input>
      <button className='text-black' type="submit">수정하기</button>
    </form>
    </div>
  
  );
}
