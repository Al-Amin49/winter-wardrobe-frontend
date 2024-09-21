import { Shirt } from "lucide-react";
import { useState } from "react";
import { useGetAllClothesQuery } from "../../redux/api/ClotheApi";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { TClothe } from "../../types";
import Subline from "../../components/Subline";
import ClotheCard from "../../components/ClotheCard";

const AllClothe = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // You can change this value based on how many items you want to show per page

  // Fetch data with pagination (passing page and limit as params)
  const { data, isLoading } = useGetAllClothesQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  // Handler for page change (Next and Previous)
  const handleNextPage = () => {
    if (data?.data?.hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 pb-5">
        {/* Previous Button */}
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
        >
          Previous
        </button>

        {/* Display current page and total pages */}
        <span className="text-xl font-semibold">
          Page {currentPage} of {data?.data?.totalPages || 1}
        </span>

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          disabled={!data?.data?.hasNextPage} // Disable if there's no next page
          className={`px-4 py-2 bg-gray-200 rounded ${!data?.data?.hasNextPage ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default AllClothe;
