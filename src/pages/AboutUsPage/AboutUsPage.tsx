import Subline from "../../components/Subline";
import Container from "../../components/Container";
import { useGetAllVolunteersQuery } from "../../redux/api/volunteerApi";
import Loading from "../../components/Loading";
import { Locate, PhoneIcon } from "lucide-react";
import {motion} from 'framer-motion';


type TAbout = {
  _id: string;
  image: string;
  name: string;
  phone: string;
  location: string;
  availability?: string;
  approve: boolean;
};




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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center py-10">
      <motion.div 
      whileHover={{ scale: 1.1, rotate:15, transition: { type:"keyframes", duration: 1, } }}
      >
      
        <img
          src="https://tinyurl.com/2r43ukvn" 
          alt="" 
          className="w-[80%] mx-auto rounded-xl"
         
        />
      </motion.div>

      <motion.div 
       initial={{ x:400, }}
       whileInView={{x:0, transition:{ease:"backInOut", duration:1.5  }}}
        >
        <h3 className="text-2xl text-secondary font-bold">Who we are</h3>
        
        <motion.p className="my-6 font-bold">
          <motion.span className="text-2xl md:text-4xl" >W</motion.span>
          <span className="text-xl">inter Wardrobe, where warmth meets compassion. We are a dedicated team committed to ensuring that no one faces the biting cold without the comfort of proper clothing. Our mission is simple yet profound: to provide warmth and dignity to those in need during the winter months.</span>
        </motion.p>
      </motion.div>
    </div>
        <h3 className=" text-2xl text-secondary text-center font-bold">
          Our Volunteer Members
        </h3>
        <Subline bgPrimary={true} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center py-10">
          {aboutData?.map(
            (about: TAbout) =>
              about.approve && (
                <div
                  key={about._id}
                  className="card card-compact w-[50%] md:w-[90%]  shadow-xl"
                >
                  <motion.figure
                  whileHover={{scale:1.05, transition:{duration:0.7}}}
                  >
                    <img
                      src={about.image}
                      alt="volunteers"
                      className="object-fit"
                    />
                  </motion.figure>
                  <div className="card-body">
                    <h2 className="card-title text-secondary text-center">
                      {about.name}
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <p className="flex items-center font-bold ">
                        <Locate /> {about.location}
                      </p>
                      <p className="flex items-center font-bold">
                        <PhoneIcon /> {about.phone}
                      </p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </Container>
  );
};

export default AboutUsPage;
