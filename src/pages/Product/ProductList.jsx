import CustomSelect from 'components/Form/Select3/CustomSelect';
import ProductCard from 'components/UI/product-card/ProductCard';
import { LoadingContext } from 'contexts/LoadingContext';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import ProductService from 'services/ProductService';
import Pagination from './ProductListWithPagination/Pagination';

const ProductList = () => {
	const { showLoading, hideLoading } = useContext(LoadingContext);

	const [productList, setProductList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	console.log('ProductList render');
	const handleSortChange = (e) => {
		if (e.target.value === 'desc') {
			setProductList((state) => {
				const sortList = [...state].sort((a, b) => {
					const aText = a.productName || '';
					const bText = b.productName || '';
					return aText.localeCompare(bText, 'zh-Hant');
				});
				return sortList;
			});
			setCurrentPage(1);
		} else if (e.target.value === 'asc') {
			setProductList((state) => {
				const sortList = [...state].sort((a, b) => {
					const aText = a.productName || '';
					const bText = b.productName || '';
					return bText.localeCompare(aText, 'zh-Hant');
				});
				return sortList;
			});
			setCurrentPage(1);
		}
	};

	const getProducts = async () => {
		try {
			showLoading();
			const response = await ProductService.getAllProduct();
			const list = response.data;
			setProductList(list);
			hideLoading();
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getProducts();
		console.log('ProductList useEffect');
	}, []);

	const updateFavor = (data) => {
		const param = { ...data, favor: !data.favor };
		ProductService.updateProduct(param.id, param)
			.then((response) => {
				setProductList((state) => state.map((product) => (product.id === param.id ? { ...param } : product)));
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * 10;
		const lastPageIndex = firstPageIndex + 10;
		return productList.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, productList]);

	return (
		<>
			<section className='proudct__list'>
				<div className='flex-b-100'>
					<CustomSelect
						options={[
							{ value: '', label: 'Select a kind' },
							{ value: 'desc', label: 'desc' },
							{ value: 'asc', label: 'Asc' },
						]}
						value={''}
						name='sort'
						onChange={handleSortChange}
					/>
				</div>

				{currentTableData.map((product) => (
					<ProductCard item={product} key={product.id} updateFavor={updateFavor} />
				))}
				<div className='flex-b-100'>
					<Pagination className='pagination--product' currentPage={currentPage} totalCount={productList.length} pageLimitSize={10} onPageChange={(page) => setCurrentPage(page)} />
				</div>
			</section>
		</>
	);
};

export default ProductList;
