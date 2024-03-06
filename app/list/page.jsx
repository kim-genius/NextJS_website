
export default function List() {
    let 상품 = [['carrot','100$'],['carcume','150$'],['bluebarry','100$'],['strawberry','40$']]
    return (
        <div className="text-center">
                    <h2>Products</h2>
            {        
                상품.map((i)=>{
                    return(
                <div className="m-20 mt-10 m-auto w-80 bg-white text-black p-10 rounded-md">
                    <h4>{i[0]} {i[1]}</h4>
                  </div>
                           )})
            }
      </div>
    );
  }
  