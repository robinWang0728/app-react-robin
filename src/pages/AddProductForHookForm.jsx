import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ProductService from "services/ProductService";

const AddProductForHookForm = () => {
  const validationSchema = Yup.object().shape({
    productName: Yup.string().required("Product Name is required"),
    price: Yup.string().required("Price is required"),
    enable: Yup.string().nullable(true).required("Enable is required"),
    kind: Yup.string().required("Ｋind is required!"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(formState);
    console.log(data);
    console.log(JSON.stringify(data, null, 2));
    // ProductService.createProduct(data)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  return (
    <div className="product__form">
      <div className="product__form-other"></div>
      <div className="product__form-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="product__form-item">
            <input
              name="productName"
              placeholder="Product Name"
              type="text"
              {...register("productName")}
              className={`product__form-control ${
                errors.productName ? "is-invalid" : ""
              }`}
            />
            <div className="product__form-text--error">
              {errors.productName?.message}
            </div>
          </div>
          <div className="product__form-item">
            <input
              name="price"
              placeholder="price"
              type="text"
              {...register("price")}
              className={`product__form-control ${
                errors.price ? "is-invalid" : ""
              }`}
            />
            <div className="product__form-text--error">
              {errors.price?.message}
            </div>
          </div>

          <div className="product__form-item flex-row">
            <label htmlFor="radio-1" className="product__form-radio ">
              <input
                id="radio-1"
                name="enable"
                type="radio"
                value="1"
                {...register("enable")}
              />
              <span className="product__form-radio-mark"></span>
              Enable
            </label>
            <label htmlFor="radio-2" className="product__form-radio m-l-8">
              <input
                id="radio-2"
                name="enable"
                type="radio"
                value="0"
                {...register("enable")}
              />
              <span className="product__form-radio-mark"></span>
              Disable
            </label>
            <div className="product__form-text--error">
              {errors.enable?.message}
            </div>
          </div>

          <div className="product__form-item  flex-row">
            <label htmlFor="other1" className="product__form-checkbox">
              <input
                id="other1"
                name="other"
                type="checkbox"
                value="other1"
                {...register("other")}
              />
              <span className="product__form-checkbox-mark"></span>
              Other1
            </label>

            <label htmlFor="other2" className="product__form-checkbox m-l-8">
              <input
                id="other2"
                name="other"
                type="checkbox"
                value="other2"
                {...register("other")}
              />
              <span className="product__form-checkbox-mark"></span>
              Other2
            </label>

            <label htmlFor="other3" className="product__form-checkbox  m-l-8">
              <input
                id="other3"
                name="other"
                type="checkbox"
                value="other3"
                {...register("other")}
              />
              <span className="product__form-checkbox-mark"></span>
              Other3
            </label>
          </div>

          <div className="product__form-item  flex-row">
            <label htmlFor="favorite" className="product__form-switch">
              <input type="checkbox" id="favorite" name="favorite"  {...register("favorite", {})}/>
              <span className="product__form-toggle"></span>
              <span className="product__form-text">Favorite</span>
            </label>
          </div>

          <div className="product__form-item">
            <select name="kind" {...register("kind")}>
              <option value="">Select a kind</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
            </select>
            <div className="product__form-text--error">
              {errors.kind?.message}
            </div>
          </div>

          <div className="product__form-item">
            <button
              disabled={formState.isSubmitting}
              className="product__form-btn"
            >
              {formState.isSubmitting}
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForHookForm;
