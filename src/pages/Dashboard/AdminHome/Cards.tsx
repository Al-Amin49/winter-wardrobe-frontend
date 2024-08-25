import { useGetAllVolunteersQuery } from "../../../redux/api/volunteerApi";
import { useGetAllUsersQuery } from "../../../redux/api/UserApi";
import { FaDonate, FaUserFriends } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { useGetWhoMostDonateQuery } from "../../../redux/api/donateApi";
import { TDonate } from "@/pages/Leaderboard/Leaderboard";
import { useGetAllTestimonialQuery } from "../../../redux/api/testimonialApi";
import { HandHelping } from "lucide-react";

type TCards = {
    id: string;
    count: number;
    title: string;
    icon: React.ReactNode;
    bgColor: string;
  };
const Cards = () => {
  const { data: users } = useGetAllUsersQuery("");
  const { data: volunteers } = useGetAllVolunteersQuery("");
  const { data: donate } = useGetWhoMostDonateQuery("");
  const { data: reviews } = useGetAllTestimonialQuery("");

  // Calculate the total sum of donations
  const totalDonationsSum = donate?.data.reduce((sum: number, donate: TDonate) => sum + donate.totalDonations, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center w-full max-w-screen-xl mx-auto p-4">
      <Card
        id="donate"
        title="Donations"
        count={totalDonationsSum}
        icon={<FaDonate className="text-5xl text-yellow-500" />}
        bgColor="bg-gradient-to-r from-yellow-400 to-yellow-500"
      />
      <Card
        id="users"
        title="Users"
        count={users?.data?.length}
        icon={<FaUserFriends className="text-5xl text-blue-500" />}
        bgColor="bg-gradient-to-r from-blue-400 to-blue-500"
      />
      <Card
        id="volunteers"
        title="Volunteers"
        count={volunteers?.data?.length}
        icon={<HandHelping className="text-5xl text-green-500" />}
        bgColor="bg-gradient-to-r from-green-400 to-green-500"
      />
      <Card
        id="reviews"
        title="Reviews"
        count={reviews?.data?.length}
        icon={<MdOutlineReviews className="text-5xl text-red-500" />}
        bgColor="bg-gradient-to-r from-red-400 to-red-500"
      />
    </div>
  );
};

const Card = ({ id, title, count, icon, bgColor }:TCards) => (
  <div
    id={id}
    className={`flex flex-col items-center justify-center ${bgColor} text-white p-6 w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105`}
  >
    <div className="flex items-center space-x-4">
      <div>
        <h1 className="text-4xl font-bold">{count ?? 0}</h1>
        <h3 className="text-xl">{title}</h3>
      </div>
      {icon}
    </div>
  </div>
);

export default Cards;
