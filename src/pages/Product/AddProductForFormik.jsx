import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ProductService from 'services/ProductService';

const AddProductForFormik = () => {
	const validationSchema = Yup.object().shape({
		productName: Yup.string().required('Product Name is required'),
		price: Yup.string().required('Price is required'),
		enable: Yup.string().nullable(true).required('Enable is required'),
		kind: Yup.string().required('kind is required!'),
	});

	const formik = useFormik({
		initialValues: {
			productName: '',
			price: '',
			enable: '1',
			kind: '',
			other: [],
			favorite: false,
		},
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: (data) => {
			console.log(data);
			console.log(JSON.stringify(data, null, 2));
			// ProductService.createProduct(data)
			//   .then((response) => {
			//     console.log(response.data);
			//   })
			//   .catch((e) => {
			//     console.log(e);
			//   });
		},
	});

	return (
		<div className='product__form'>
			<div className='product__form-other'></div>
			<div className='product__form-form'>
				<form onSubmit={formik.handleSubmit}>
					<div className='product__form-item'>
						<input name='productName' placeholder='Product Name' type='text' onChange={formik.handleChange} value={formik.values.productName} className={`product__form-control ${formik.errors.productName ? 'is-invalid' : ''}`} />
						<div className='product__form-text--error'>{formik.errors.productName ? formik.errors.productName : null}</div>
					</div>

					<div className='product__form-item'>
						<input name='price' placeholder='price' type='text' onChange={formik.handleChange} value={formik.values.price} className={`product__form-control ${formik.errors.price ? 'is-invalid' : ''}`} />
						<div className='product__form-text--error'>{formik.errors.price ? formik.errors.price : null}</div>
					</div>

					<div className='product__form-item flex-row'>
						<label htmlFor='radio-1' className='product__form-radio '>
							<input id='radio-1' name='enable' type='radio' value='1' checked={formik.values.enable === '1'} onChange={formik.handleChange} />
							<span className='product__form-radio-mark'></span>
							enable
						</label>
						<label htmlFor='radio-2' className='product__form-radio m-l-8'>
							<input id='radio-2' name='enable' type='radio' value='0' checked={formik.values.enable === '0'} onChange={formik.handleChange} />
							<span className='product__form-radio-mark'></span>
							disable
						</label>
						<div className='product__form-text--error'>{formik.errors.enable ? formik.errors.enable : null}</div>
					</div>

					<div className='product__form-item  flex-row'>
						<label htmlFor='other1' className='product__form-checkbox'>
							<input id='other1' name='other' type='checkbox' value='other1' checked={formik.values.other.includes('other1')} onChange={formik.handleChange} />
							<span className='product__form-checkbox-mark'></span>
							Other1
						</label>

						<label htmlFor='other2' className='product__form-checkbox m-l-8'>
							<input id='other2' name='other' type='checkbox' value='other2' checked={formik.values.other.includes('other2')} onChange={formik.handleChange} />
							<span className='product__form-checkbox-mark'></span>
							Other2
						</label>

						<label htmlFor='other3' className='product__form-checkbox  m-l-8'>
							<input id='other3' name='other' type='checkbox' value='other3' checked={formik.values.other.includes('other3')} onChange={formik.handleChange} />
							<span className='product__form-checkbox-mark'></span>
							Other3
						</label>
					</div>

					<div className='product__form-item  flex-row'>
						<label htmlFor='favorite' className='product__form-switch'>
							<input type='checkbox' id='favorite' name='favorite' checked={formik.values.favorite} onChange={formik.handleChange} />
							<span className='product__form-toggle'></span>
							<span className='product__form-text'>Favorite</span>
						</label>
					</div>

					<div className='product__form-item'>
						<select name='kind' value={formik.values.kind} onChange={formik.handleChange} onBlur={formik.handleBlur}>
							<option value=''>Select a kind</option>
							<option value='red'>red</option>
							<option value='blue'>blue</option>
							<option value='green' label='green'>
								green
							</option>
						</select>
						<div className='product__form-text--error'>{formik.errors.kind ? formik.errors.kind : null}</div>
					</div>

					<div className='product__form-item'>
						<button className='product__form-btn'>submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProductForFormik;
