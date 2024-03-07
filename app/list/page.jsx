
import Cartitem from '../components/Cartitem'
export default function List() {
    let 상품 = [['carrot','100$'],['carcume','150$'],['bluebarry','100$'],['strawberry','40$']]
    return (
        <div className="text-center">
              <Cartitem 상품={상품}></Cartitem>     
      </div>
    );
  }
  
  