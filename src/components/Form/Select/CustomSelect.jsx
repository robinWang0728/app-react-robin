import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from './useOutSideClick';
import './custom-select.css';

const CustomSelect = ({ options, value, error = false, name, props }) => {
	const [isOpen, setOpen] = useState(false);
	const [selected, setSelected] = useState(value);
	const selectRef = useRef(null);

	useOutsideClick(selectRef, () => {
		setOpen(false);
	});

	useEffect(() => {
		const element = document.getElementById(name);
		element.value = selected;
		const customEvent = new Event('change', { bubbles: true, cancelable: false });
		element.dispatchEvent(customEvent);
	}, [selected]);
	return (
		<>
			<select {...props.register(name)} id={name} name={name} className='customSelect__el'>
				{options.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>

			<div
				ref={selectRef}
				onClick={() => {
					setOpen((prev) => !prev);
				}}
				className='customSelect'
			>
				<div className={`customSelect__select ${isOpen && 'open'}`}>
					<div className='customSelect__trigger'>
						<span>{options.find((item) => item.value === selected)?.label || 'Select'}</span>
						<div className='customSelect__arrow'></div>
					</div>
					<div className='customSelect__options'>
						{options.map((item) => (
							<div
								key={item.value}
								onClick={() => {
									setSelected(item.value);
								}}
								className='customSelect__option-container'
							>
								<span className={`customSelect__option ${selected === item.value && 'selected'} `} data-value={item.value}>
									{item.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default CustomSelect;
