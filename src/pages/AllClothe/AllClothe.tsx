import { Shirt } from "lucide-react";
import { useState } from "react";
import { useGetAllClothesQuery } from "../../redux/api/ClotheApi";
import Container from "../../components/Container";
import Loading from "../../components/Loading";
import { TClothe } from "../../types";
import Subline from "../../components/Subline";
import ClotheCard from "../../components/ClotheCard";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchingFiltering/SearchInput";
import CategoryFilter from "../../components/SearchingFiltering/CategoryFilter";

const AllClothe = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

    // Search and filter state
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch data with pagination (passing page and limit as params)
  const { data, isLoading } = useGetAllClothesQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  // Define categories (modify based on your data)
  const categories = ["Jackets","Socks", "Sweater", "Boots", "Hats", "Coats", "Blankets", "Earmuffs", "Gloves", "Hoodies", "Scarves"]; 

  // Filter clothes based on search text and category
  const filteredClothes = data?.data?.clothes.filter((clothe: TClothe) => {
    const matchesSearch =
      clothe.title.toLowerCase().includes(searchText.toLowerCase()) ||
      clothe.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory ? clothe.category === selectedCategory : true;

    return matchesSearch && matchesCategory;
  }) || [];
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
           {/* Search and Filter Inputs */}
           <div className="flex flex-col lg:flex-row justify-center items-center  space-x-4 mt-4">
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center pb-3 ">
      {filteredClothes.length > 0 ? (
          filteredClothes.map((clothe: TClothe) => (
            <ClotheCard key={clothe._id} clothe={clothe} />
          ))
        ) : (
          <div className="text-center mx-auto mt-5">
          <div className="flex flex-col items-center justify-center">
            <p className="text-red-500 mb-20">No clothes found matching your search.</p>
          </div>
        </div>
  
        )}
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
