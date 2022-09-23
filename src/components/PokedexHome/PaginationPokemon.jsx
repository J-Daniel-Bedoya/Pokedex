import React from 'react';

const PaginationPokemon = ({postPerPage, totalPagePokemon, pagination}) => {

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPagePokemon / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationFuction = () => {
    return (
      <ul>
        {
          pageNumbers.map(num => (
          // console.log(num),
            <li key={num}>
              <a onClick={() => pagination(num)}>
                {num}
              </a>
            </li>
          ))
        } 
      </ul>
    )
  }

  return (
    <div>
      {paginationFuction()}
    </div>
  );
};

export default PaginationPokemon; 