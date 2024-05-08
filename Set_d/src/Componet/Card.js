
export const Card = ({data}) => {
  return (
    <>
           {data.map((list)=>{
               return <>
                <div className="container">
                <div className="card mb-3 col-sm-6 ">
                <div className="row ">
                    <div className="col-md-4 px-4 ">
                    <img src='' className="img-fluid  mt-2" style={{ height: '70px'  , borderRadius : '50%' }} />
                    </div>
                    <div className="col-md-6">
                    <div className="card-body">
                    <h5 className="card-title">{list.title}</h5>
            
                    </div>
                    </div>
                </div>
                </div>

                </div>
                </>
           })}
           </>
  );
}