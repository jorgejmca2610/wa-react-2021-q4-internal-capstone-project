import React from 'react';

export default function Sidebar(params) {
  const {data} = params;
  const { results } = data;

  return (
    <div className="sidebar">
        <ul>
          { results.map((category) => {
            const selectedCategory = params.categoryList.some((item) => category.slugs.includes(item));
            const className = selectedCategory ? "activeCategory" : "";
            return (
              <li key={category.id} className={className} onClick={eventHandler} slug={category.slugs.join("_")}>
                  {category.data.name}
              </li>
            )
          })}
        </ul>
    </div>
  )

  function eventHandler(e) {
    e.preventDefault();
    const tCat = e.target.attributes.slug.value.split("_");
    
    if (e.target.classList.contains("activeCategory")) {
      const filteredCategories = params.categoryList.filter((category) => {
        return !tCat.includes(category);
      });
      params.setCategories(filteredCategories);
    } else {
      params.setCategories([...params.categoryList, ...tCat]);
    }
  }
}