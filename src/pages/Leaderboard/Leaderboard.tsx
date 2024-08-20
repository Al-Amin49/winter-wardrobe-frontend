import Subline from "../../components/Subline";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { useGetWhoMostDonateQuery } from "../../redux/api/donateApi";

export type TDonate={
    _id:string,
    username:string,
    profile:string,
    totalDonations:number
}
const Leaderboard = () => {
  const { data, isLoading } = useGetWhoMostDonateQuery("");

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
     <div className="pt-20">
       <div className="py-4">
       <h3 className=" text-secondary text-center  text-2xl font-bold">Leaderboard (Who Donates Most)</h3>
       <Subline bgPrimary={true}/>
       </div>
     <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Rank</th>
              <th>Profile</th>
              <th>username</th>
              <th>Total Donation(quantity)</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((donate:TDonate, index: number) => (
              <tr key={donate._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={donate.profile} className="h-12" alt="" />
                </td>
                <td>{donate.username}</td>
                <td>
                  {donate.totalDonations}
                </td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>
    </Container>
  );
};

export default Leaderboard;
