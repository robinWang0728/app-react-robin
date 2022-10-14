import React, { useEffect } from 'react';
import { usePagination } from './usePagination';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
const Pagination = (props) => {
	console.log('Pagination render');
	useEffect(() => {
		console.log('Pagination useEffect');
	}, []);
	const { onPageChange, currentPage, totalCount, pageLimitSize, className } = props;
	const { totalPages, renderPagination } = usePagination({
		totalCount,
		pageLimitSize,
		position: (currentPage - 1) * pageLimitSize,
	});
	if (currentPage === 0 || renderPagination.length < 2) {
		return null;
	}

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	return (
		<div className={`pagination ${className}`}>
			{currentPage > 1 && (
				<button className={'pagination__btn'} onClick={onPrevious}>
					<MdKeyboardArrowLeft className='icon' />
				</button>
			)}
			{renderPagination.map((pageNumber) => {
				return (
					<button key={pageNumber} className={`pagination__btn ${pageNumber === currentPage ? 'pagination__btn--active' : ''}`} onClick={() => onPageChange(pageNumber)}>
						{pageNumber}
					</button>
				);
			})}
			{currentPage < totalPages && (
				<button className={'pagination__btn'} onClick={onNext}>
					<MdKeyboardArrowRight className='icon' />
				</button>
			)}
		</div>
	);
};

export default Pagination;
