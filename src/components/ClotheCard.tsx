import { TClothe } from "@/types";
import { Link } from "react-router-dom";

type TClotheProps = {
  clothe: TClothe;
};

const ClotheCard = ({ clothe }: TClotheProps) => {
  return (
    <div className="w-full max-w-sm  my-4 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 mx-4 lg:mx-0 ">
      {/* Image Section with hover effect */}
      <img
        src={clothe.image}
        alt={clothe.title}
        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary mb-2 flex items-center">
          {clothe.title}
          <div className="badge badge-secondary ml-2">{clothe.category}</div>
        </h2>
        <div className="mt-4">
          <span className="text-secondary font-bold">Available Sizes:</span>
          <div className="flex flex-wrap mt-2">
            {clothe.size.map((size) => (
              <div key={size} className="bg-primary text-white p-2 rounded-lg m-1">
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to={`/all-clothe/${clothe._id}`} className="text-center">
        <button className="btn btn-primary font-bold text-center text-white my-4 w-full">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ClotheCard;
