
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Cards from "./Cards";
import { useAppSelector } from "../../../redux/hook";
import { useGetDonationsByCategoryQuery } from "../../../redux/api/donateApi";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminHome = () => {
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const user = userInfo?.data?.user;
  
  const { data: donationByCategory, isLoading, error } = useGetDonationsByCategoryQuery("");
  console.log('data', donationByCategory?.data)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading donation stats</p>;
  }

  const data = {
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
    <div className="flex  flex-col lg:flex-row justify-between items-center gap-10">
      <div style={{ width: "100%", height: 400 }}>
      <h3>Donation Stats</h3>
        <Pie data={data} options={options} />
      
      </div>
      <div>hello</div>
    </div>

  
    </>
  );
};

export default AdminHome;
