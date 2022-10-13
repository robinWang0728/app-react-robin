import React, { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
	const length = end - start + 1;
	console.log(length);
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
	const paginationRange = useMemo(() => {
		console.log(totalCount);
		console.log(pageSize);
		console.log(siblingCount);
		console.log(currentPage);
		const totalPageCount = Math.ceil(totalCount / pageSize); // 無條件進位

		// Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
		const totalPageNumbers = siblingCount + 5;

		/*
		If the number of pages is less than the page numbers we want to show in our
		paginationComponent, we return the range [1..totalPageCount]
		小於可以...的數量，就全算
		*/
		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1); // 當前 currentPage 的左邊一個數字是多少，左邊能到的最小就是1
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount); // 當前 currentPage 的右邊一個數字是多少，右邊能到的最大就是7

		/*
		We do not want to show dots if there is only one position left 
		after/before the left/right page count as that would lead to a change if our Pagination
		component size which we do not want
		*/
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPageCount];
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		if (shouldShowLeftDots && shouldShowRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};
