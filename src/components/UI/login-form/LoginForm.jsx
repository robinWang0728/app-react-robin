import { useState } from 'react';
import clsx from 'clsx';
import styles from './LoginForm.module.css';
import { useLoginFormValidator } from './hooks/useLoginFormValidator';

const LoginForm = (props) => {
	const [form, setForm] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

	const onUpdateField = (e) => {
		const field = e.target.name;
		const nextFormState = {
			...form,
			[field]: e.target.value,
		};
		setForm(nextFormState);
		if (errors[field].dirty)
			validateForm({
				form: nextFormState,
				errors,
				field,
			});
	};

	const onSubmitForm = (e) => {
		e.preventDefault();
		const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
		if (!isValid) return;
		alert(JSON.stringify(form, null, 2));
	};

	return (
		<form className={styles.form} onSubmit={onSubmitForm}>
			<div className={styles.formGroup}>
				<label className={styles.formLabel}>Email</label>
				<input className={clsx(styles.formField, errors.email.dirty && errors.email.error && styles.formFieldError)} type='text' aria-label='Email field' name='email' value={form.email} onChange={onUpdateField} onBlur={onBlurField} />
				{errors.email.dirty && errors.email.error ? <p className={styles.formFieldErrorMessage}>{errors.email.message}</p> : null}
			</div>
			<div className={styles.formGroup}>
				<label className={styles.formLabel}>Password</label>
				<input className={clsx(styles.formField, errors.password.dirty && errors.password.error && styles.formFieldError)} type='password' aria-label='Password field' name='password' value={form.password} onChange={onUpdateField} onBlur={onBlurField} />
				{errors.password.dirty && errors.password.error ? <p className={styles.formFieldErrorMessage}>{errors.password.message}</p> : null}
			</div>
			<div className={styles.formGroup}>
				<label className={styles.formLabel}>Confirm Password</label>
				<input className={clsx(styles.formField, errors.confirmPassword.dirty && errors.confirmPassword.error && styles.formFieldError)} type='password' aria-label='Confirm password field' name='confirmPassword' value={form.confirmPassword} onChange={onUpdateField} onBlur={onBlurField} />
				{errors.confirmPassword.dirty && errors.confirmPassword.error ? <p className={styles.formFieldErrorMessage}>{errors.confirmPassword.message}</p> : null}
			</div>
			<div className={styles.formActions}>
				<button className={styles.formSubmitBtn} type='submit'>
					Login
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
