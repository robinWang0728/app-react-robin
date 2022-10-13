import React, { useRef, useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs';
import { RiUser3Line } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const links = [
	{
		label: 'Features',
		link: '/features',
	},
	{
		label: 'Shop',
		link: '/shop',
	},
	{
		label: 'Support',
		link: '/support',
	},
];

export const Header = () => {
	const headerRef = useRef(null);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add('header__shrink');
			} else {
				headerRef.current.classList.remove('header__shrink');
			}
		});

		return () => window.removeEventListener('scroll', null);
	}, []);

	return (
		<header className='header' ref={headerRef}>
			<div className='header__container'>
				<div className='header__logo'>
					<Link to='/'>
						<span className='header__title'>ILUVIU</span>
					</Link>
				</div>
				<nav className='header__menus'>
					{links.map((item, index) => (
						<NavLink to={item.link} key={index} className={({ isActive }) => (isActive ? 'header__menu header__menu--active' : 'header__menu')}>
							{item.label}
						</NavLink>
					))}
				</nav>

				<div className='header__rights'>
					<div className='header__right rheader__right-user'>
						<RiUser3Line className='userIcon heIcon' />
					</div>
					<div className='header__right header__right-heart'>
						<AiOutlineHeart className='userIcon heIcon' />
					</div>
					<div className='header__right header__right-heart'>
						<AiOutlineShoppingCart className='userIcon heIcon' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
