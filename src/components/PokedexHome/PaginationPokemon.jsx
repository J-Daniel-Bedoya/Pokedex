import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { pokemonArray } from '../../store/slices/pokemon.slice';
import { currentPage } from '../../store/slices/currentPage.slice';
import { numPageNone } from '../../store/slices/numPageNone.slice';
import '../../assets/css/PaginationPokemon.css'

const PaginationPokemon = ({postPerPage}) => {
  const totalPagePokemon = useSelector(state => state.pokemon)
  const [numPage, setNumPage] = useState(1)
  const [numPage2, setNumPage2] = useState(9)
  const numPageNoneSelect = useSelector(state => state.numPageNoneIt)
  const [numPageNone1, setNumPageNone1] = useState(false)
  const dispatch = useDispatch()
 
  const pageNumbers = []
  // const pageTotalNumbers = []
  const totalPage = Math.ceil(totalPagePokemon.length / postPerPage)
  const totalPage2 = Math.floor(totalPagePokemon.length / postPerPage)


  if (totalPage <= 9) {
    dispatch(numPageNone(false))
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    } 
  }else{
    dispatch(numPageNone(true))
    for (let i = numPage; i <= numPage2; i++) {
      pageNumbers.push(i);
    } 
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
    dispatch(currentPage(num))
    // setNumPageNone1(!numPageNone1)
    // pageNumbers.map(e => {
    //   if (e === num){

    //   }
    // })
  }
 

return (
  <div className='pagination'>
    {
      numPageNoneSelect &&
        <button 
          onClick={() => prev(numPage)} 
          disabled={numPage===1} 
          className={"pagination__btn btn-icon"}>
          <span className={"material-symbols-outlined"}>chevron_left</span>
        </button>
      
    }
    {
      pageNumbers.map(num => (
        <button 
          key={num}
          onClick={() => dispatchAction(num)}
          // className="selected"
        >{num}
        </button>
      ))
    }
    {
      numPageNoneSelect &&
        <button 
          onClick={() => next(numPage)} 
          disabled={totalPage2 <= numPage2} 
          className={"pagination__btn btn-icon"}>
          <span className={"material-symbols-outlined"}>chevron_right</span>
        </button>
    
    }
  </div>
  );
};

export default PaginationPokemon; 