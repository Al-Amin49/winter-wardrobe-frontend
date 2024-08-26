import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../components/Loading";
import {
  // useDeleteClotheMutation,
  useGetAllClothesQuery,
} from "../../../redux/api/ClotheApi";
import UpdateClothe from "./UpdateClothe";
import { Link } from "react-router-dom";
import { TClothe } from "../../../types";
import { toast } from "react-toastify";

const Clothes = () => {
  const { data, isLoading } = useGetAllClothesQuery("");

  // const [deleteClothe] = useDeleteClotheMutation();

  // const handleDeleteClothe = (id: string) => {
  //   if (window.confirm("Are you sure to delete ")) {
  //     deleteClothe(id);
  //   }
  // };

  const handleDeleteClothe=()=>{
      toast.error('Only Superadmin can delete this')
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold">
          Total clothes: {data?.data.length}
        </h2>
        <Link to="/dashboard/create-winter-clothe">
          <button className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark font-bold">
            Add Clothe
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-primary to-secondary text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">SNO</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Size</th>
              <th className="py-3 px-6 text-center">Edit</th>
              <th className="py-3 px-6 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.data.map((clothe: TClothe, index: number) => (
              <tr
                key={clothe._id}
                className="border-b border-gray-200 hover:bg-gray-100 hover:shadow-lg"
              >
                <td className="py-3 px-6 text-center">{index + 1}</td>
                <td className="py-3 px-6 text-left">{clothe.title}</td>
                <td className="py-3 px-6 text-left">{clothe.category}</td>
                <td className="py-3 px-6 text-left">
                  <div className="flex flex-wrap gap-1">
                    {clothe.size.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-gray-200 rounded-md text-xs"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <UpdateClothe clotheId={clothe._id} />
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={handleDeleteClothe}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrashAlt />
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
