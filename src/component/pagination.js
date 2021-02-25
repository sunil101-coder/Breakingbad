import React from 'react'
const Pagination = ({ postperpage, totalpost, paginate}) => {
  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
    pagenumber.push(i);

  }


  return (

    <nav aria-label="Page navigation example" className="page">
      <ul className="pagination pagination-lg justify-content-center">
        {pagenumber.map(number => (
          <li className="page-item " key={number} >
            <a onClick={() => paginate(number)} href="!#" className='page-link'>{number}</a>
          </li>

        ))}
      </ul>
    </nav>

  );

}
export default Pagination
