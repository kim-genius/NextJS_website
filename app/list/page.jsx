import Cartitem from '../components/Cartitem'
import { connectDB } from '../../utils/database'

export const dynamic = 'force-dynamic'

export default async function List() {
    let 상품 = [['carrot','100$'],['carcume','150$'],['bluebarry','100$'],['strawberry','40$']]

    
    
    return (
        <div className="text-center flex justify-center">
              <Cartitem 상품={상품}></Cartitem>     
      </div>
    );
  }
  
  