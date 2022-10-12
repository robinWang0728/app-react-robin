import ProductCard from "components/UI/product-card/ProductCard";
import { LoadingContext } from "contexts/LoadingContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import ProductService from "services/ProductService";
import { spliceList } from "utils/utils";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProductList = () => {
  const { showLoading, hideLoading } = useContext(LoadingContext);

  
  const [originProductList, setOriginProductList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productListData, setProductListData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sorttype, setSorttype] = useState(["desc", "asc",]);
  const Sort = sorttype.map(x => x)
  const handleAddrTypeChange = (e) => console.log((sorttype[e.target.value]))
  const getProducts = async () => {
    try {
      showLoading();
      let response = await ProductService.getAllProduct();
      const list = response.data;
      const listData = spliceList(list);
      setOriginProductList(list);
      setProductListData(listData);
      setProductList(listData[0]);
      setSelectedIndex(0);
      hideLoading();
    } catch (error) {
      console.error(error);
    }
  };

  const updateFavor = (data) => {
    const param = { ...data, favor: !data.favor };
    ProductService.updateProduct(param.id, param)
      .then((response) => {
        setOriginProductList((state) =>
          state.map((product) =>
            product.id === param.id ? { ...param } : product
          )
        );
        console.log(productListData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const pageChange = (i) => {
    setSelectedIndex(i);
    setProductList(productListData[i]);
  };

  const firstRender = useRef(true);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const listData = spliceList(originProductList);
    console.log(listData)
    setProductListData(listData);
  }, [originProductList]);


  return (
    <>
      <section className="proudct__list">
      {
                < select
                onChange={e => handleAddrTypeChange(e)}
                className="browser-default custom-select flex-b-100" >
                {
                  Sort.map((address, key) => <option value={key}>{address}</option>)
                }
              </select >
          }
        {productList.map((product) => (
          <ProductCard item={product} updateFavor={updateFavor} />
        ))}
        <div className="pagination flex-b-100">
          <button className="pagination__btn">
            <MdKeyboardArrowLeft className="icon" />
          </button>
 
          {productListData.map((product, i) => (
            <button
              className={`pagination__btn ${
                selectedIndex === i ? "pagination__btn--active" : ""
              }`}
              onClick={() => pageChange(i)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
          <button className="pagination__btn" id="pagination__next-button ">
            <MdKeyboardArrowRight className="icon" />
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductList;
