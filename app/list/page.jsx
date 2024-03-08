import Cartitem from '../components/Cartitem'
import { connectDB } from '../../utils/database'

export default async function List() {
    let 상품 = [['carrot','100$'],['carcume','150$'],['bluebarry','100$'],['strawberry','40$']]
    const client = await connectDB;
    const db = client.db('forum')
     let result = await db.collection('post').find().toArray()
    console.log(result)
    
    return (
        <div className="text-center">
              <Cartitem 상품={상품}></Cartitem>     
      </div>
    );
  }
  
  