import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../components/Loading";
import { useGetAllUsersQuery } from "../../../redux/api/UserApi";


type TUsers={
    _id:string,
    username:string,
    email:string,
    role:string,
}
const AllUsers = () => {
  const { data, isLoading } = useGetAllUsersQuery("");

//   const [deleteClothe] = useDeleteClotheMutation();

//   const handleDeleteClothe = (id:string) => {
//     if (window.confirm("Are you sure to delete ")) {
//       deleteClothe(id);
//     }
//   };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-xl">Total Users: {data?.data.length}</h2>
    
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((user:TUsers, index:number) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.role}
                </td>
                
                <td>
                <button
                    // onClick={() => handleDeleteClothe(user._id)}
                    className="btn btn-primary btn-sm"
                  >Make Admin</button>
                  <button
                    // onClick={() => handleDeleteClothe(user._id)}
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

export default AllUsers;
