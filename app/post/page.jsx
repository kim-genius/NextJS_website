import { connectDB } from '../../utils/database'
import Postcreate from '../components/Postcreate'
import Link from 'next/link';
export default async function Post() {
    const client = await connectDB;
    const db = client.db('forum')
     let result = await db.collection('post').find().toArray()
        console.log(result)
  return (
    <div className="bg-gray-50 p-10">
        <Postcreate></Postcreate>
        {
            result.map((a,index)=>{
                return(
                    <div className="bg-white rounded-lg p-20 mb-5 shadow-md " key={index}>
                    <Link href={`/post/detail/${a._id}`}>
                    <h4 className="text-3xl font-extrabold m-0 text-black">{a.title}</h4>
                    <p className="text-lg text-gray-400 my-5 mx-0">{a.content}</p>
                    </Link>
                  </div>
                )
            })
        }
  </div>
  );
}
