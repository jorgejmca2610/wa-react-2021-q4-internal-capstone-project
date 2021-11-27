import React from 'react';

export default function Sidebar(params) {
  const {data} = params;
  const { results } = data;

  return (
    <div className="sidebar">
        <ul>
          { results.map((category) => {
            const selectedCategory = params.categoryList.some((item) => category.slugs.includes(item));
            return (
              <li key={category.id} className={selectedCategory ? "activeCategory" : ""} onClick={handleCategoriesSelected} slug={category.slugs.join("_")}>
                  {category.data.name}
              </li>
            )
          })}
        </ul>
    </div>
  )

  // TBH: I found this solution in a youtube tutorial :( shame on me
  function handleCategoriesSelected(e) {
    const tCat = e.target.attributes.slug.value.split("_");
    
    if (e.target.classList.contains("activeCategory")) {
      const filteredCategories = params.categoryList.filter((category) => {
        return !tCat.includes(category);
      });
      params.setCategories(filteredCategories);
    } else {
      params.setCategories([...tCat, ...params.categoryList, ]);
    }
  }
}