import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../components/Loading";
import { useGetAllUsersQuery } from "../../../redux/api/UserApi";

type TUsers = {
  _id: string;
  username: string;
  email: string;
  role: string;
};

const AllUsers = () => {
  const { data, isLoading } = useGetAllUsersQuery("");
  // console.log('data', data?.data?.users)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl lg:text-2xl font-semibold text-primary">Total Users: {data?.data.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">SNO</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data?.data?.map((user: TUsers, index: number) => (
              <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="text-center">{index + 1}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <span className="font-medium">{user.username}</span>
                </td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">
                  <span className={`px-2 py-1 rounded-full text-xs ${user.role === 'admin' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="btn btn-primary btn-sm mr-2">Make Admin</button>
                  <button className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-red-600" />
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
