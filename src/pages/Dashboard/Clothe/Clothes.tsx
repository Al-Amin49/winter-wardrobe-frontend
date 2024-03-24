import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../components/Loading";
import {
  useDeleteClotheMutation,
  useGetAllClothesQuery,
} from "../../../redux/api/ClotheApi";
import UpdateClothe from "./UpdateClothe";
import { Link } from "react-router-dom";
import {TClothe} from '../../../types';

const Clothes = () => {
  const { data, isLoading } = useGetAllClothesQuery("");

  const [deleteClothe] = useDeleteClotheMutation();

  const handleDeleteClothe = (id:string) => {
    if (window.confirm("Are you sure to delete ")) {
      deleteClothe(id);
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-xl">Total clothes: {data?.data.length}</h2>
        <Link to="/dashboard/create-winter-clothe">
          {" "}
          <button className="btn btn-primary text-white font-bold">
            Add Clothe
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Size</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((clothe:TClothe, index:number) => (
              <tr key={clothe._id}>
                <th>{index + 1}</th>
                <td>{clothe.title}</td>
                <td>{clothe.category}</td>
                <td>
                  {clothe.size.map((size) => (
                    <div>
                      <span className="space-x-2  border rounded-md ">
                        {size}
                      </span>
                    </div>
                  ))}
                </td>
                <td>
                  <UpdateClothe clotheId={clothe._id} />
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteClothe(clothe._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clothes;
