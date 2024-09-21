import React from 'react';

type SearchInputProps ={
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or description"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="  px-4 py-1 w-1/2 border border-primary focus:ring-1  rounded-md"
    />
  );
};

export default SearchInput;
