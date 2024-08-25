import { TDonationType } from "@/types";
import { useGetAllDonationQuery } from "../../../redux/api/donateApi";
import Loading from "../../../components/Loading";

const AllDonation = () => {
  const { data: allDonations, isLoading } = useGetAllDonationQuery("");
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-4 lg:px-8">
      <h3 className="mb-4 text-xl lg:text-2xl text-center text-primary">All Donations</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-primary to-secondary text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">SNO</th>
              <th className="py-3 px-6 text-left">Donor</th>
              <th className="py-3 px-6 text-left">Clothe Name</th>
              <th className="py-3 px-6 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {allDonations?.data?.map((donation: TDonationType, index: number) => (
              <tr key={donation._id} className="border-b border-gray-200 hover:bg-gray-100 hover:shadow-lg transition-all">
                <td className="py-3 px-6 text-center">{index + 1}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <img src={donation.userId.profile} className="w-10 h-10 rounded-full" alt="" />
                    <h3>{donation.userId.username}</h3>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{donation.clotheId.title}</td>
                <td className="py-3 px-6 text-left">{donation.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDonation;
