import styled from 'styled-components';
import shoeImg from '../assets/Shoes (1).png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cart/cartSlice';
import { setModal } from '../store/cart/cartSlice';
import Modal from '../components/Modal';

// import shoeImg2 from "../assets/pexels-hamza-nouasria-12628401.jpg";
// import brandGif from "../assets/brands.gif";

const About = () => {
	const { cartItemAmt } = useSelector(store => store.cart);
	const dispatch = useDispatch();
	return (
		<Section>
			<ContainerLeft>
				<img src={shoeImg} alt='shoe Image' />
			</ContainerLeft>
			<ContainerRight>
				<Right>
					<p>Air Max</p>
					<div className='cart'>
						<ShoppingCartIcon />
						<span>{cartItemAmt}</span>
					</div>
					<span className='product-detail'>NIKE AIR MAX 90</span>
					<p className='product-description'>
						Nothing as fly, nothing as comfortable, nothing as proven-the Nike Air Max
						90 stays true to its roots with the iconic Waffle sole, stitched overlays
						and classic TPU accents
					</p>

					<p className='price'>
						Price : <span style={{ borderBottom: '2px solid black' }}>0.2 ETH</span>
					</p>
					<ButtonContainer>
						<button onClick={() => dispatch(setModal())}>Buy now</button>
						<button onClick={() => dispatch(addToCart())}>Add to cart</button>
					</ButtonContainer>
				</Right>
			</ContainerRight>
			<Modal />
		</Section>
	);
};

export default About;

const Section = styled.div`
	min-height: 100vh;
	width: 100vw;
	display: flex;
	position: relative;
	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
	@media screen and (max-width: 430px) {
		flex-direction: column;
	}
`;
const ContainerLeft = styled.div`
	flex: 0.5;
	width: 40%;
	height: 100vh;
	background-color: black;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
	}
	@media screen and (max-width: 430px) {
		width: 100%;
	}
`;
const ContainerRight = styled.div`
	flex: 0.5;
	width: 60%;
	height: 100vh;
	background-color: #3cd070;

	p {
		font-size: ${p => p.theme.fontBig};
		color: grey;
	}
	.product-detail {
		font-size: ${p => p.theme.fontxxl};
		line-height: 2.5em;
	}
	.product-description {
		font-size: ${p => p.theme.fontxl};
		width: 70%;
		color: black;
	}
	.sizes {
		font-size: ${p => p.theme.fontxl};
		color: black;
		margin-top: 1.5em;
		display: flex;
		align-items: center;
		gap: 0.5em;
		input {
			border: 1px solid black;
			height: 1em;
			background-color: transparent;
			padding: 1em;
			font-size: ${p => p.theme.xxxl};
			&:focus {
				border: none;
			}
		}
	}
	.price {
		color: black;
		font-size: ${p => p.theme.fontxl};
		margin-top: 0.5em;
	}
	@media screen and (max-width: 1400px) {
		p {
			font-size: ${p => p.theme.fontxxxl};
			margin-top: 0.5em;
		}
		.product-detail {
			font-size: ${p => p.theme.fontxl};
		}
		.product-description {
			font-size: ${p => p.theme.fontlg};
		}
		.price {
			font-size: ${p => p.theme.fontlg};
		}
	}
	@media screen and (max-width: 900px) {
		width: 100%;
		p {
			font-size: ${p => p.theme.fontxxl};
			margin-top: 0.5em;
		}
		.product-description {
			width: 95%;
			font-size: ${p => p.theme.fontlg};
		}
	}
	@media screen and (max-width: 430px) {
		width: 100%;
		p {
			font-size: 50px;
			margin-top: 0.1em;
		}
	}
	@media screen and (max-width: 430px) {
		.product-detail {
			font-size: ${p => p.theme.fontlg};
		}
		.product-description {
			width: 95%;
			font-size: ${p => p.theme.fontmd};
		}
	}
`;
const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 3em;
	margin-top: 5%;
	button {
		font-size: ${p => p.theme.fontlg};
		width: 18%;
		font-family: 'Bebas Neue', cursive;
		padding: 0.5em;
		cursor: pointer;
		border-radius: 5px;
		transition: all 0.2s ease;
		&:hover {
			transform: scale(0.96);
		}
	}
	@media screen and (max-width: 1400px) {
		button {
			font-size: ${p => p.theme.fontmd};
			width: 28%;
		}
	}
	@media screen and (max-width: 900px) {
		button {
			font-size: ${p => p.theme.fontmd};
			width: 30%;
		}
	}
`;

const Right = styled.div`
	margin-left: 10em;
	.cart {
		display: flex;
		align-items: center;
		gap: 0.1em;
		.MuiSvgIcon-root {
			font-size: ${p => p.theme.fontxl};
		}
		span {
			font-size: ${p => p.theme.fontlg};
		}
	}
	@media screen and (max-width: 1400px) {
		margin-left: 6em;
	}
	@media screen and (max-width: 900px) {
		margin-left: 6em;
		padding-bottom: 2em;
	}
	@media screen and (max-width: 430px) {
		margin-left: 1em;
		padding-bottom: 2em;
	}
`;
