'use client'
import Postcreate from '../components/Postcreate'
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from'../../utils/fetcher'
import {ObjectId} from 'mongodb';
export const revalidate =60;

export default function Post() {

  interface IData {
    "_id": ObjectId; // MongoDB ObjectId를 문자열로 변환
    "title": string;
    "content": string;
}
    const {data,mutate} = useSWR<IData[]>('/api/search',fetcher)
  return (
    <div className="bg-gray-50 p-10">
        <Postcreate></Postcreate>
        {
            data?.map((a,index)=>{
             
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
