import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentPage } from '../../store/slices/currentPage.slice';
import '../../assets/css/PaginationPokemon.css'

const PaginationPokemon = ({postPerPage, totalPagePokemon}) => {
  // const currentPages = useSelector(state => state.currentPage)
  const [numPage, setNumPage] = useState(1)
  const [numPage2, setNumPage2] = useState(9)
  const [colorActive, setColorActive] = useState(false)
  const dispatch = useDispatch()

  const pageNumbers = []
  const totalPage = Math.ceil(totalPagePokemon.length / postPerPage)
  for (let i = numPage; i <= numPage2; i++) {
    pageNumbers.push(i);
  } 
  // const arrayTotalPage = []
  // for (let i = 1; i <= Math.ceil(totalPagePokemon / postPerPage); i++) {
  //   arrayTotalPage.push(i);
  // } 
  const prev = (npage) => {
    setNumPage(numPage-5)
    setNumPage2(numPage2-5)
    dispatch(currentPage(npage-1))
  } 
  const next = (npage) => {
    setNumPage(numPage+5)
    setNumPage2(numPage2 +5)
    if (numPage === 1) {
      dispatch(currentPage(10))
    }else{
      dispatch(currentPage(npage))
    }
  } 
  const dispatchAction = (num) => {
    // setColorActive(true)
    
    dispatch(currentPage(num))
    // return (
    //   <button 
    //     key={num}
    //     onClick={() => dispatchAction(num)}
    //     className='selected'
    //   >{num}
    //   </button>
    // )
  }
 

return (
  <div className='pagination'>
    <button onClick={() => prev(numPage)} disabled={numPage===1} className="pagination__btn btn-icon selected">
      <span className="material-symbols-outlined">chevron_left</span>
    </button>
      {
        pageNumbers.map(num => (
          <button 
            key={num}
            onClick={() => dispatchAction(num)}
            className={'selected'}
          >{num}
          </button>
        ))
      }
    <button onClick={() => next(numPage)} disabled={totalPage <= numPage2} className="pagination__btn btn-icon selected">
      <span className="material-symbols-outlined">chevron_right</span>
    </button>
  </div>
  );
};

export default PaginationPokemon; 