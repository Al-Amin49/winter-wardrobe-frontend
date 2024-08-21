/* eslint-disable @typescript-eslint/no-explicit-any */

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Cards from "./Cards";
import { useAppSelector } from "../../../redux/hook";
import { useGetDonationsByCategoryQuery, useGetRecentDonationQuery } from "../../../redux/api/donateApi";
import Loading from "../../../components/Loading";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminHome = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userInfo:any = useAppSelector((state) => state.auth.userInfo);
  const user = userInfo?.data?.user;
  
  const { data: donationByCategory, isLoading, error } = useGetDonationsByCategoryQuery("");
  const {data:recentDonations}= useGetRecentDonationQuery("")


  if (isLoading) {
    return <Loading/>;
  }

  if (error) {
    return <p>Error loading donation stats</p>;
  }

  const data = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    labels: donationByCategory?.data?.map((item: any) => item._id),
    datasets: [
      {
        label: "Donations by Category",
        data: donationByCategory?.data?.map((item: any) => item.totalDonations),
        backgroundColor: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const dataset = tooltipItem.dataset;
            const total = dataset.data.reduce((sum: number, val: number) => sum + val, 0);
            const currentValue = dataset.data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}% (${currentValue})`;
          },
        },
      },
    },
  };

  return (
    <>
      <h3 className="text-xl lg:text-2xl font-medium my-4">
        Welcome Back, <span className="font-bold text-primary">{user.username}</span>
      </h3>
      <Cards />
    <div className="flex  flex-col lg:flex-row justify-between items-center gap-10 mt-4">
      <div style={{ width: "80%", height: 350 }}>
      <h3 className=" text-xl lg:text-2xl  text-primary mr-4">Donation Stats</h3>
        <Pie data={data} options={options} />
      
      </div>
      <div>
          <h3 className="my-4 text-xl lg:text-2xl text-primary">Recent Donations</h3>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-secondary text-gray-200 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Donor</th>
                <th className="py-3 px-6 text-left">Clothe Name</th>
                <th className="py-3 px-6 text-left">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {recentDonations?.data?.map((donation: any) => (
                <tr key={donation._id} className="border-b border-gray-200 hover:bg-gray-100 hover:shadow-lg hover:scale-105">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                    <img src={donation.userId.profile}  className="w-10"alt="" />
                    <h3>  {donation.userId.username}</h3>
                    </div></td>
                  <td className="py-3 px-6 text-left">{donation.clotheId.title}</td>
                  <td className="py-3 px-6 text-left">{donation.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>

  
    </>
  );
};

export default AdminHome;
