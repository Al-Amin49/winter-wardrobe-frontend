import Subline from "../../components/Subline";
import Container from "../../components/Container";
import { useGetAllVolunteersQuery } from "../../redux/api/volunteerApi";
import Loading from "../../components/Loading";
import { Locate, PhoneIcon } from "lucide-react";

type TAbout={
    _id:string,
    image:string,
    name:string, 
    phone:string,
    location:string,
    availability?:string,
    approve:boolean
}
const AboutUsPage = () => {
  const { data, isLoading } = useGetAllVolunteersQuery("");
  console.log(data?.data);
  const aboutData = data?.data;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="pt-20">
        <h3 className=" text-2xl text-secondary text-center font-bold">
          Our Volunteer Members
        </h3>
        <Subline bgPrimary={true} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center py-10">
          {aboutData.map((about:TAbout) => (
            about.approve&& <div key={about._id} className="card card-compact w-[50%] md:w-[90%]  shadow-xl">
              <figure>
                <img
                  src={about.image}
                  alt="volunteers"
                  className="object-fit"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-secondary text-center">{about.name}</h2>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <p className="flex items-center font-bold "><Locate/> {about.location}</p>
                    <p className="flex items-center font-bold"><PhoneIcon/> {about.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUsPage;
