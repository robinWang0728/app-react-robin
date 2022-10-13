import ProductCard from 'components/UI/product-card/ProductCard';
import { LoadingContext } from 'contexts/LoadingContext';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import ProductService from 'services/ProductService';
import Pagination from './ProductListWithPagination/Pagination';

const ProductList = () => {
	const { showLoading, hideLoading } = useContext(LoadingContext);

	const [, setUpdated] = useState(false);

	const [productList, setProductList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const [sorttype, setSorttype] = useState(['desc', 'asc']);
	const Sort = sorttype.map((x) => x);
	const handleAddrTypeChange = (e) => console.log(sorttype[e.target.value]);

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
		console.log('render');
	});

	useEffect(() => {
		getProducts();
	}, []);

	const updateFavor = async (data) => {
		const { id: productId, favor } = data;
		await ProductService.updateProduct(productId, data);
		setProductList((state) => {
			const index = state.findIndex((p) => p.id === productId);
			state[index] = { ...data, favor: !favor };
			return state;
		});
		setUpdated((state) => !state);
	};

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * 10;
		const lastPageIndex = firstPageIndex + 10;
		return productList.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, productList]);

	return (
		<>
			<section className='proudct__list'>
				{
					<select onChange={(e) => handleAddrTypeChange(e)} className='browser-default custom-select flex-b-100'>
						{Sort.map((address, key) => (
							<option value={key} key={address}>
								{address}
							</option>
						))}
					</select>
				}
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
