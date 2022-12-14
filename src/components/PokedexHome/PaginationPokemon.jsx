import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentPage } from "../../store/slices/currentPage.slice";
import { numPageNone } from "../../store/slices/numPageNone.slice";
import { useEffect } from "react";

const PaginationPokemon = ({ postPerPage }) => {
  const totalPagePokemon = useSelector((state) => state.pokemon);
  const [numPage, setNumPage] = useState(1);
  const [numPage2, setNumPage2] = useState(9);
  const numPageNoneSelect = useSelector((state) => state.numPageNoneIt);
  const [number, setNumber] = useState(1);

  const dispatch = useDispatch();

  const totalPage = Math.ceil(totalPagePokemon.length / postPerPage);
  const totalPage2 = Math.floor(totalPagePokemon.length / postPerPage);

  const [pageNumbers, setPageNumbers] = useState([]);
  const arr = [];
  for (let i = numPage; i <= numPage2; i++) {
    arr.push(i);
  }

  useEffect(() => {
    let arr = [];
    if (totalPage <= 9) {
      dispatch(numPageNone(false));
      for (let i = 1; i <= totalPage; i++) {
        arr.push(i);
      }
    } else {
      dispatch(numPageNone(true));
      for (let i = numPage; i <= numPage2; i++) {
        arr.push(i);
      }
    }
    setPageNumbers(arr);
  }, [totalPage]);

  const prev = (npage) => {
    setNumPage(numPage - 5);
    setNumPage2(numPage2 - 5);
    dispatch(currentPage(npage));
    setNumber(number - 5);
    if (numPage <= 5) {
      setNumPage(1);
      setNumPage2(9);
      setNumber(1);
      dispatch(currentPage(1));
    }
  };
  const next = (npage) => {
    setNumPage(numPage + 5);
    setNumPage2(numPage2 + 5);
    if (numPage === 1) {
      dispatch(currentPage(10));
      setNumber(10);
    } else {
      setNumber(number + 5);
      dispatch(currentPage(npage));
    }
  };

  const dispatchAction = (num) => {
    dispatch(currentPage(num));
    setNumber(num);
    if (totalPage <= 9) {
      console.log(num);
      dispatch(currentPage(1));
      setNumber(1);
      setNumPage(1);
      setNumPage2(totalPage);
    } else {
      if (num >= 5) {
        setNumPage(num - 4);
        setNumPage2(num + 4);
      } else {
        setNumPage(1);
        setNumPage2(9);
      }
    }
  };

  return (
    <div className="pagination">
      {numPageNoneSelect && (
        <button
          onClick={() => prev(numPage)}
          disabled={numPage === 1}
          className={"pagination__btn btn-icon"}
        >
          <span className={"material-symbols-outlined"}>chevron_left</span>
        </button>
      )}

      {arr === []
        ? pageNumbers.map((num) => (
            <button
              className={num === number && "selected"}
              key={num}
              onClick={() => dispatchAction(num)}
            >
              {num}
            </button>
          ))
        : arr.map((num) => (
            <button
              className={num === number && "selected"}
              key={num}
              onClick={() => dispatchAction(num)}
            >
              {num}
            </button>
          ))}

      {numPageNoneSelect && (
        <button
          onClick={() => next(numPage)}
          disabled={totalPage2 <= numPage2}
          className={"pagination__btn btn-icon"}
        >
          <span className={"material-symbols-outlined"}>chevron_right</span>
        </button>
      )}
    </div>
  );
};

export default PaginationPokemon;
