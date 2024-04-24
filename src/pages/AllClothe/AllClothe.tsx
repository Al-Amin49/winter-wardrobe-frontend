
import { Shirt } from "lucide-react";
import { useGetAllClothesQuery } from "../../redux/api/ClotheApi";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { TClothe } from "../../types";
import Subline from "../../components/Subline";
import ClotheCard from "../../components/ClotheCard";

const AllClothe = () => {
  const { data, isLoading } = useGetAllClothesQuery("");


 
  if (isLoading) {
    return <Loading/>;
  }

  return (
    <Container>
      <div className="pt-20 pb-10">
      <h2 className="text-2xl flex justify-center items-center text-center font-bold text-primary">All Winter Clothe  <span> <Shirt /></span></h2>
      <Subline bgPrimary={false}/>
     
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center pb-3 ">
        {data?.data.map((clothe :TClothe) => (
     <ClotheCard key={clothe._id} clothe={clothe}></ClotheCard>     

        ))}
      </div>
    </Container>
  );
};

/**
 <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-primary mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-2">{article.author}</p>
              <p className="text-gray-600">{format(new Date(article.date), "MMM dd, yyyy")}</p>
            </div>
          </div>
 */
export default AllClothe;
