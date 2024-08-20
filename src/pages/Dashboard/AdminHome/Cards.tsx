import { useGetAllVolunteersQuery } from "../../../redux/api/volunteerApi";
import { useGetAllUsersQuery } from "../../../redux/api/UserApi";
import { FaDonate, FaStreetView, FaUserFriends } from "react-icons/fa";
import { Handshake } from "lucide-react";
import { useGetWhoMostDonateQuery } from "../../../redux/api/donateApi";
import { TDonate } from "@/pages/Leaderboard/Leaderboard";
import { useGetAllTestimonialQuery } from "../../../redux/api/testimonialApi";

const Cards = () => {
    const {data:users}= useGetAllUsersQuery("");
    const {data:volunteers}= useGetAllVolunteersQuery("");
    const { data:donate } = useGetWhoMostDonateQuery("");
    const {data:reviews}= useGetAllTestimonialQuery("")
     // Calculate the total sum of donations
  const totalDonationsSum = donate?.data.reduce((sum: number, donate: TDonate) => sum + donate.totalDonations, 0);
    return (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 place-items-center">

          <div id="users" className="bg-secondary text-white px-10 py-4 w-48 rounded-md flex items-center justify-center space-x-4">
                <div>
                <h1 className="text-2xl">{totalDonationsSum}</h1>
                <h3>Donate</h3>
                </div>
                <FaDonate className="text-4xl"/>
                
            </div>
            <div id="users" className="bg-secondary text-white px-10 py-4 w-48 rounded-md flex items-center justify-center space-x-4">
                <div>
                <h1 className="text-2xl">{users?.data?.length}</h1>
                <h3>Users</h3>
                </div>
                <FaUserFriends className="text-4xl"/>
                
            </div>
            <div id="users" className="bg-primary text-white px-10 py-4 w-48 rounded-md flex items-center justify-center space-x-4">
                <div>
                <h1 className="text-2xl">{volunteers?.data?.length}</h1>
                <h3>Volunteers</h3>
                </div>
                <Handshake className="text-4xl"/>
                
            </div>
            
            <div id="users" className="bg-primary text-white px-10 py-4 w-48 rounded-md flex items-center justify-center space-x-4">
                <div>
                <h1 className="text-2xl">{reviews?.data.length}</h1>
                <h3>Reviews</h3>
                </div>
                <FaStreetView className="text-4xl"/>
                
            </div>
            
        </div>  
        </>
    );
};

export default Cards;