function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = ["All", "Personal", "Work", "Other"];

  return (
    <div>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          style={{
            fontWeight: selectedCategory === cat ? "bold" : "normal",
            marginRight: "5px"
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
