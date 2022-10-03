import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const AddProduct = () => {
  // const validationSchema = Yup.object().shape({
  //   productName: Yup.string().required("Product Name is required"),
  //   price: Yup.string().required("Price is required"),
  // });

  // const formOptions = { resolver: yupResolver(validationSchema) };
  // const { register, handleSubmit, setError, formState } = useForm(formOptions);
  // const { errors } = formState;

  // function onSubmit({ productName, price }) {}

  return (
    // <div className="productForm">

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div className="form-group">
    //       <label>Product Name</label>
    //       <input
    //         name="productName"
    //         type="text"
    //         {...register("productName")}
    //         className={`form-control ${errors.username ? "is-invalid" : ""}`}
    //       />
    //       <div className="invalid-feedback">{errors.productName?.message}</div>
    //     </div>
    //     <div className="form-group">
    //       <label>Price: </label>
    //       <input
    //         name="price"
    //         type="text"
    //         {...register("price")}
    //         className={`form-control ${errors.password ? "is-invalid" : ""}`}
    //       />
    //       <div className="invalid-feedback">{errors.price?.message}</div>
    //     </div>
    //     <button disabled={formState.isSubmitting} className="btn btn-primary">
    //       {formState.isSubmitting && (
    //         <span className="spinner-border spinner-border-sm mr-1"></span>
    //       )}
    //       送出
    //     </button>
    //   </form>
    // </div>
    <>
      <div className="product__form">
        <div className="product__form-box"></div>
        <div className="product__form-form">
          <div className="product__form-item">
            <input name="Username" placeholder="Username" type="text" />
          </div>
          <div className="product__form-item">
            <input name="Username2" placeholder="Username2" type="text" />
          </div>
          <div className="product__form-item">
            <div className="product__form-btn">submit</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
