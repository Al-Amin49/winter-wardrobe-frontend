import Subline from "../../components/Subline";
import Container from "../../components/Container";
import { useGetAllClothesQuery } from "../../redux/api/ClotheApi";
import Loading from "../../components/Loading";
import ClotheCard from "../../components/ClotheCard";
import { TClothe } from "../../types";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
// import useScrollGrow from "../../components/Framermotion/useScrollGrow";

const ClothePost = () => {
  const { data, isLoading } = useGetAllClothesQuery("");
  // const {style, componentRef}= useScrollGrow()

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="pt-20">

        <div className="pb-8">
          <h3 className="text-center text-xl md:text-3xl text-primary font-bold ">
            Donate Your Winter Wear Today!
          </h3>
          <Subline bgPrimary={false} />
        </div>

        <Link to="/all-clothe" >
          <div className="text-right mb-4">
            <button className="btn btn-primary font-bold text-white">
              View All
            </button>
          </div>
        </Link>

        <motion.div 
          initial={ {x: 500, opacity: 0} }
          whileInView={{ x: 0, opacity: 1 }}
          transition= {
            {delay: 0.7,
            y:{ type: "spring", stiffness: 60,  },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.6,}
          }
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center pb-3 ">
          {data?.data.slice(0, 6).map((clothe: TClothe) => (
            <ClotheCard key={clothe._id} clothe={clothe}></ClotheCard>
          ))}
        </motion.div>
       
      </div>
    </Container>
  );
};

export default ClothePost;
