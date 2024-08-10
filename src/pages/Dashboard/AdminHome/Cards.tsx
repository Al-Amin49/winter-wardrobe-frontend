import { useGetAllVolunteersQuery } from "../../../redux/api/volunteerApi";
import { useGetAllUsersQuery } from "../../../redux/api/UserApi";
import { FaUserFriends } from "react-icons/fa";
import { Handshake } from "lucide-react";

const Cards = () => {
    const {data:users}= useGetAllUsersQuery("");
    const {data:volunteers}= useGetAllVolunteersQuery("")
    return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            
        </div>  
        </>
    );
};

export default Cards;