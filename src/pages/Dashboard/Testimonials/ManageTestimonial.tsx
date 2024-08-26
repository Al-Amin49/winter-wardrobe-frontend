import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../components/Loading";
import { useGetAllTestimonialQuery } from "../../../redux/api/testimonialApi";
import { TTestimonial } from "@/types";
import { toast } from "react-toastify";


const ManageTestimonial = () => {
    const { data, isLoading } = useGetAllTestimonialQuery("");
 
    if (isLoading) {
      return <Loading />;
    }
    const handleDelete=()=>{
        toast.error('Only Superadmin can delete this')
      }
    return (
        <div>
            <div className="p-4">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl lg:text-2xl font-semibold text-primary">Total Review: {data?.data.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">SNO</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Message</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.data?.map((review:TTestimonial, index: number) => (
              <tr key={review._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="text-center">{index + 1}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center space-x-2">
                    <img src={review.profile} className="w-10 h-10 rounded-full" alt="" />
                    <h3>{review.username}</h3>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{review.location}</td>
                <td className="py-3 px-6 text-left">{review.message}</td>
            
                <td className="py-3 px-6 text-center">
                  <button onClick={handleDelete}
                   className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default ManageTestimonial;