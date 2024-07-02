import { TClothe } from "@/types";
import { Link } from "react-router-dom";

type TClotheProps={
  clothe:TClothe
}

const ClotheCard = ({clothe}:TClotheProps) => {
    return (
        <>
            <div key={clothe._id} className="w-[90%] my-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={clothe.image} alt={clothe.title} className="w-full h-48 object-cover" />
            <div >
              <h2  className="p-6 ">
                <span className="text-2xl font-bold text-primary mb-2">{clothe.title}</span>
                <div className="badge badge-secondary ml-2">{clothe.category}</div>
              </h2>
              <div className="mx-4">
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
           <div>
           <button className="btn btn-primary font-bold text-center text-white my-4">View Details</button>
           </div>
            </Link>
          </div>
        </>
    );
};

export default ClotheCard;