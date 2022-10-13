import { useMemo } from 'react';

export const DEFAULT_SHOW_PAGINATION_PAGE_NUM = 3;

export const usePagination = ({ totalCount, pageLimitSize, position }) => {
	const paginationRange = useMemo(() => {
		if (totalCount < 0 || pageLimitSize < 1 || position < 0) return { totalPages: 0, renderPagination: [] };

		const totalPages = Math.ceil(totalCount / pageLimitSize);
		const currentPage = position >= totalCount ? totalPages : Math.floor(position / pageLimitSize) + 1;

		const showPageNum = DEFAULT_SHOW_PAGINATION_PAGE_NUM > totalPages ? totalPages : DEFAULT_SHOW_PAGINATION_PAGE_NUM;
		const centerIndex = Math.ceil(showPageNum / 2);
		const diff = showPageNum - centerIndex;
		const firstIndex = centerIndex >= currentPage ? 1 : currentPage + diff >= totalPages ? totalPages - showPageNum + 1 : currentPage - diff;

		const renderPagination = Array.from({ length: showPageNum }, (_, i) => i + firstIndex);

		return { totalPages, renderPagination };
	}, [totalCount, pageLimitSize, position]);

	return paginationRange;
};
