export default function Pagination({listItems}) {
  let pagination = <span>There are no products available.</span>
  if(!isEmpty(listItems)){
    pagination = <>
        <a href="/#">Previous</a>
        <a href="/#" title="">1</a>
        <a href="/#" title="">2</a>
        <a href="/#" title="">3</a>
        <a href="/#" title="">4</a>
        <a href="/#" title="">5</a>
        <a href="/#">Next</a>
        </>
  }
  return (
    <div className="pagination_section">
      {pagination}
    </div>
  );

  function isEmpty(arrayList) {
    return arrayList.length === 0;
  }
}