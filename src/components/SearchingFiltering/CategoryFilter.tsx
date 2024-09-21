import React from 'react';

type CategoryFilterProps ={
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[]; // Pass categories as props
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory, categories }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="border border-secondary rounded-md px-2 py-1 text-primary w-48 lg:w-auto lg:mt-0 mt-4"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
