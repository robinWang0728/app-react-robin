import ProductCard from "components/UI/product-card/ProductCard";
import { LoadingContext } from "contexts/LoadingContext";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import ProductService from "services/ProductService";
import { spliceList } from "utils/utils";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "./Pagination";

const ProductList = () => {
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 10;
    const lastPageIndex = firstPageIndex + 10;
    return productList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, productList]);

  const [sorttype, setSorttype] = useState(["desc", "asc"]);
  const Sort = sorttype.map((x) => x);
  const handleAddrTypeChange = (e) => console.log(sorttype[e.target.value]);
  const getProducts = async () => {
    try {
      showLoading();
      let response = await ProductService.getAllProduct();
      const list = response.data;
      setProductList(list);
      hideLoading();
    } catch (error) {
      console.error(error);
    }
  };

  const updateFavor = (data) => {};

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="proudct__list">
        {
          <select
            onChange={(e) => handleAddrTypeChange(e)}
            className="browser-default custom-select flex-b-100"
          >
            {Sort.map((address, key) => (
              <option value={key}>{address}</option>
            ))}
          </select>
        }
        {currentTableData.map((product) => (
          <ProductCard item={product} updateFavor={updateFavor} />
        ))}
        <div className="flex-b-100">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={productList.length}
            pageSize={10}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </>
  );
};

export default ProductList;
