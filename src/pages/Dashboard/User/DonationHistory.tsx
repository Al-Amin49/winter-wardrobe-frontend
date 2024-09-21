import { useAppSelector } from "../../../redux/hook";
import { useGetDonationHistoryQuery } from "../../../redux/api/donateApi";

const DonationHistory = () => {
    // Get user information from the Redux store
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userInfo:any = useAppSelector((state) => state.auth.userInfo);
    const user = userInfo?.data?.user;

    // Fetch donation history using the user email
    const { data } = useGetDonationHistoryQuery(user?.email);

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-lg font-bold mb-4">Donation History</h3>

            {/* Check if data is present */}
            {data?.data?.length ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Title</th>
                                <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Quantity</th>
                                <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">User Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.map((donation) => (
                                <tr key={donation._id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b text-sm">{donation.clotheId.title}</td>
                                    <td className="py-2 px-4 border-b text-sm">{donation.quantity}</td>
                                    <td className="py-2 px-4 border-b flex items-center gap-2">
                                        <img
                                            src={donation.userId.profile}
                                            alt={donation.userId.username}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="text-sm">{donation.userId.username}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-600">No donation history available.</p>
            )}
        </div>
    );
};

export default DonationHistory;
