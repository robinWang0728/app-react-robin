import React from 'react';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore } from 'react-icons/md';
import { BsTrophy } from 'react-icons/bs';
import { AiOutlinePieChart, AiFillCalendar } from 'react-icons/ai';

import { BiTrendingUp } from 'react-icons/bi';
import { BsCreditCard, BsQuestionCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
	return (
		<div className='sideBar'>
			<div className='sideBar__logo'>
				<span className='sideBar__text sideBar__text--logo'>ILUVIU</span>
			</div>

			<div className='sideBar__menu'>
				<h3 className='sideBar__menu-title'>MENU</h3>
				<ul className='sideBar__menu-list'>
					<li className='sideBar__menu-listItem'>
						<NavLink to={'/home'} className={({ isActive }) => (isActive ? 'sideBar__menu-link sideBar__menu-link--active' : 'sideBar__menu-link')}>
							<IoMdSpeedometer className='icon' />
							<span className='smallText'>Home</span>
						</NavLink>
					</li>
					<li className='sideBar__menu-listItem'>
						<NavLink to={'/product'} className={({ isActive }) => (isActive ? 'sideBar__menu-link sideBar__menu-link--active' : 'sideBar__menu-link')}>
							<BsTrophy className='icon' />
							<span className='smallText'>Product</span>
						</NavLink>
					</li>
					<li className='sideBar__menu-listItem'>
						<NavLink to={'/orders'} className={({ isActive }) => (isActive ? 'sideBar__menu-link sideBar__menu-link--active' : 'sideBar__menu-link')}>
							<MdDeliveryDining className='icon' />
							<span className='smallText'>Orders</span>
						</NavLink>
					</li>

					<li className='sideBar__menu-listItem'>
						<NavLink to={'/other'} className={({ isActive }) => (isActive ? 'sideBar__menu-link sideBar__menu-link--active' : 'sideBar__menu-link')}>
							<MdOutlineExplore className='icon' />
							<span className='smallText'>Other</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className='sideBar__menu'>
				<h3 className='sideBar__menu-title'>Settings</h3>
				<ul className='sideBar__menu-list'>
					<li className='sideBar__menu-listItem'>
						<div className='sideBar__menu-link'>
							<AiOutlinePieChart className='icon' />
							<span className='smallText'>Charts</span>
						</div>
					</li>

					<li className='sideBar__menu-listItem'>
						<div className='sideBar__menu-link'>
							<BiTrendingUp className='icon' />
							<span className='smallText'>Trends</span>
						</div>
					</li>

					<li className='sideBar__menu-listItem'>
						<NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'sideBar__menu-link sideBar__menu-link--active' : 'sideBar__menu-link')}>
							<AiFillCalendar className='icon' />
							<span className='smallText'>Contact</span>
						</NavLink>
					</li>

					<li className='sideBar__menu-listItem'>
						<div className='sideBar__menu-link'>
							<BsCreditCard className='icon' />
							<span className='smallText'>Billing</span>
						</div>
					</li>
				</ul>
			</div>

			<div className='sideBar__card'>
				<BsQuestionCircle className='icon' />
				<div className='sideBar__card-content'>
					<div className='sideBar__card-circle sideBar__card-circle--left'></div>
					<p className='sideBar__card-title'>Help Center</p>
					<p className='sideBar__card-text'>{/* Having trouble in ILUVIU, please contact us from for more questions. */}</p>
					<button className='sideBar__card-btn'>Go to help center</button>
					<div className='sideBar__card-circle sideBar__card-circle--right'></div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
