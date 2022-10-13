import useCustomForm from 'components/UI/custom-form/CustomForm';
import React, { useContext } from 'react';
import { FiMapPin } from 'react-icons/fi';
import { LoadingContext } from 'contexts/LoadingContext';
import ContactService from 'services/ContactService';
const Contact = () => {
	const { showLoading, hideLoading } = useContext(LoadingContext);

	const validate = (values) => {
		const errors = {};

		if (!values.contactName) {
			errors.contactName = 'contactName is required';
		} else if (values.contactName.length < 8) {
			errors.contactName = 'contactName must be 8 or more characters';
		}

		if (!values.email) {
			errors.email = 'Email address is required';
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = 'Email address is invalid';
		}

		return errors;
	};

	const sendData = async (data) => {
		console.log(data);
		try {
			showLoading();
			const response = await ContactService.createContact(data);
			hideLoading();
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	const { formInputs, errors, handleInputChange, handleFormSubmit } = useCustomForm(sendData, validate);

	return (
		<>
			<div className='contact'>
				<div className='contact__form'>
					<div className='contact__form-form'>
						<div className='contact__form-form-title'>
							<h3 className=''>Hello</h3>
						</div>
						<div className='contact__form-form-main'>
							<form onSubmit={handleFormSubmit}>
								<div className='contact__form-form-item m-t-24'>
									<div className='w-50'>
										<input className={`contact__form-form-control ${true && 'is-danger'}`} type='text' name='contactName' placeholder='Name' onChange={handleInputChange} value={formInputs.contactName} />
										{errors.contactName && <p className='text-danger'>{errors.contactName}</p>}
									</div>
									<div className='w-50'>
										<input className={`contact__form-form-control ${true && 'is-danger'}`} type='text' name='email' placeholder='email' onChange={handleInputChange} value={formInputs.email} />
										{errors.email && <p className='text-danger'>{errors.email}</p>}
									</div>
								</div>
								<div className='contact__form-form-item  m-t-24'>
									<div className='w-100'>
										{' '}
										<input className={`contact__form-form-control ${true && 'is-danger'}`} type='text' name='subject' placeholder='Subject' onChange={handleInputChange} value={formInputs.subject} />
									</div>
								</div>
								<div className='contact__form-form-item  m-t-24'>
									<div className='w-100'>
										<textarea className='contact__form-form-control contact__form-form-control--textarea' name='message' placeholder='Message' onChange={handleInputChange} value={formInputs.message}></textarea>
									</div>
								</div>
								<div className='contact__form-form-item  m-t-24'>
									<div className='w-100'>
										<button type='submit' className='contact__form-btn--submit'>
											send
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className='contact__form-info'>
						<div className='contact__form-info-wrap'>
							<h3 className='contact__form-text contact__form-text--title m-t-12'>Contact us</h3>
							<div className='contact__form-info-texts m-t-20'>
								<div className='contact__form-info-icon'>
									<FiMapPin className='icon' />
								</div>
								<div className='contact__form-info-text'>
									<span className='contact__form-text contact__form-text--info-text'>Address: jimluviu, 143</span>
								</div>
							</div>
							<div className='contact__form-info-texts m-t-20'>
								<div className='contact__form-info-icon'>
									<FiMapPin className='icon' />
								</div>
								<div className='contact__form-info-text'>
									<span className='contact__form-text contact__form-text--info-text'>Email: jimluviu@gmail.com</span>
								</div>
							</div>
							<div className='contact__form-info-texts m-t-20'>
								<div className='contact__form-info-icon'>
									<FiMapPin className='icon' />
								</div>
								<div className='contact__form-info-text'>
									<span className='contact__form-text contact__form-text--info-text'>Phone: 0912-123-123</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
