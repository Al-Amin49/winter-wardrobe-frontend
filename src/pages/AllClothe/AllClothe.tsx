import { Shirt } from "lucide-react";
import { useState } from "react";
import { useGetAllClothesQuery } from "../../redux/api/ClotheApi";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { TClothe } from "../../types";
import Subline from "../../components/Subline";
import ClotheCard from "../../components/ClotheCard";
import Pagination from "../../components/Pagination";

const AllClothe = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch data with pagination (passing page and limit as params)
  const { data, isLoading } = useGetAllClothesQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  // Loading state
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="pt-20 pb-10">
        <h2 className="text-2xl flex justify-center items-center text-center font-bold text-primary">
          All Winter Clothes <span> <Shirt /></span>
        </h2>
        <Subline bgPrimary={false} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center pb-3 ">
        {data?.data?.clothes?.map((clothe: TClothe) => (
          <ClotheCard key={clothe._id} clothe={clothe}></ClotheCard>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={data?.data?.totalPages}
        onPageChange={setCurrentPage} 
      />
    </Container>
  );
};

export default AllClothe;
