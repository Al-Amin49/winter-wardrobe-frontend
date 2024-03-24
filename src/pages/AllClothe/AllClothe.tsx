
import { Shirt } from "lucide-react";
import { useGetAllClothesQuery } from "../../redux/api/ClotheApi";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { TClothe } from "../../types";

const AllClothe = () => {
  const { data, isLoading } = useGetAllClothesQuery("");


 
  if (isLoading) {
    return <Loading/>;
  }

  return (
    <Container>
      <div className="pt-20 pb-10">
      <h2 className="text-2xl flex justify-center items-center text-center font-bold text-primary">All Winter Clothe  <span> <Shirt /></span></h2>
     
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center pb-3 ">
        {data?.data.map((clothe :TClothe) => (
          <div key={clothe._id} className="card h-auto border rounded-xl shadow-lg">
            <figure>
              <img src={clothe.image}  className='w-[50%]' alt="Clothe" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-primary font-bold text-2xl">{clothe.title}</span>
                <div className="badge badge-secondary">{clothe.category}</div>
              </h2>
              <div className="">
                <span className=" flex justify-between items-center text-secondary font-bold">Available Sizes: 
                {
                  clothe.size.map((size)=><li key={size} className="list-none bg-primary p-2 rounded-lg text-white ">{size}</li>)
                }
                </span>
               
              </div>
            </div>
            <Link 
            to={`/all-clothe/${clothe._id}`}
            className="text-center"
            >
            <button className="btn btn-primary font-bold text-center text-white mb-4">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllClothe;
