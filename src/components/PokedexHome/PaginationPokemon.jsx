import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentPage } from '../../store/slices/currentPage.slice';
import '../../assets/css/PaginationPokemon.css'

const PaginationPokemon = ({postPerPage, totalPagePokemon, pagination}) => {
  // const currentPages = useSelector(state => state.currentPage)
  const dispatch = useDispatch()

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPagePokemon / postPerPage); i++) {
    pageNumbers.push(i);
  } 
 
return (
  <div className='pagination'>
    <ul id='pagitnation__ul'>
      <button onClick={() => pagination(currentPage-1)} disabled={currentPage==1}>Prev</button>
        {
          pageNumbers.map(num => (
            <li key={num} className="pagination__li">
              <div onClick={() => pagination(num)} className="pagination__a">
                {/* {num} */}
              </div>
            </li>
          ))
        } 
        <button onClick={() => pagination(currentPage+1)} disabled={ currentPage===totalPagePokemon}>Next</button>
      </ul>
    </div>
  );
};

export default PaginationPokemon; 