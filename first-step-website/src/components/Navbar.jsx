import styled from 'styled-components';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
	//Sticky Navbar
	const { cartItemAmt } = useSelector(store => store.cart);

	return (
		<NavContainer>
			<NavLogo>
				<a a href='/'>
					First Wear
				</a>
			</NavLogo>
			<NavItems>
				<ul>
					<a
						className='contract'
						target='_blank'
						href='https://mumbai.polygonscan.com/address/0x93B55Db5c7666A92C10a64D4291E87df21BcDB41'
					>
						contract
					</a>
					<a href='#'>
						<div>
							<LocalMallIcon />
							<span>{cartItemAmt}</span>
						</div>
					</a>
				</ul>
			</NavItems>
		</NavContainer>
	);
};

export default Navbar;

const NavContainer = styled.div`
	width: 70%;
	height: 4rem;
	padding: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	top: 2rem;
	left: 14%;
	color: white;
	z-index: 10;

	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.15));
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: 50px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.05);

	.scrolled {
		position: fixed;
		top: 0;
		left: 0;
		background-color: lightblue;
	}
	@media screen and (max-width: 430px) {
		left: 5%;
		right: 50%;
	}
`;
const NavLogo = styled.div`
	transition: all 0.2s ease-in-out;
	a {
		font-size: ${p => p.theme.fontlg};
		letter-spacing: 0.02em;
	}
	&:hover {
		transform: scale(0.95);
	}
`;
const NavItems = styled.div`
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;

		a {
			font-size: ${p => p.theme.fontlg};
			letter-spacing: 0.02em;
			div {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.2rem;

				.MuiSvgIcon-root {
					font-size: 1.5em;
				}
				span {
					margin-top: 0.1em;
				}
			}
		}
		button {
			padding: 0.4em 1rem;
			width: 5em;
			font-size: ${p => p.theme.fontmd};
			font-family: 'Bebas Neue', cursive;
			border-radius: 50px;
			border: none;
			cursor: pointer;
			transition: all 0.2s ease;
			&:hover {
				transform: scale(0.95);
			}
		}
	}
	@media screen and (max-width: 430px) {
		.contract {
			display: none;
		}
	}
`;
