import React from "react";
import './pagination.scss';

export function Pagination({ tasksPerPage, totalTasks, paginate, handlePrevClick, handleNextClick, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (<div className="pagination">
        <button
        disabled={currentPage <= 1}
        onClick={handlePrevClick}
        >
            Prev
        </button>
        {pageNumbers.map(number => (
            <p onClick={() => paginate(number)} key={number} className="page-item">
                {number}
            </p>
        ))}
        <button
        disabled={currentPage >= totalTasks/12}
        onClick={handleNextClick}
        >
            Next
        </button>
    </div>)
}