import React from 'react';
import classes from "./Pagination.module.css"

const Pagination = ({ itemPerPage, totalItem, changePageHandler }) => {
    const totalPages = Math.ceil(totalItem / itemPerPage)
    const pageNumbers = []
    for (let i = 1; i < totalPages + 1; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className={classes['pagination-wrapper']}>
            <ul className={classes['pagination']}>
                {pageNumbers.map((ele,index) => <li key={index}>
                    <button value={ele} onClick={changePageHandler}>{ele}</button>
                </li>)}
            </ul>
        </nav>
    );
}

export default Pagination;
