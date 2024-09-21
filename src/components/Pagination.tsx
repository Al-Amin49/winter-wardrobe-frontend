
type PaginationProps ={
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }:PaginationProps) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 pb-5">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-gray-200 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
      >
        Previous
      </button>

      <span className="text-xl font-semibold">
        Page {currentPage} of {totalPages || 1}
      </span>

      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        className={`px-4 py-2 bg-gray-200 rounded ${currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
