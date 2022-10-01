import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import shoe from '../assets/peri-stojnic-r3rbIwZ9DJc-unsplash.jpg';

const HomeContainer = () => {
	return (
		<Section>
			<ImgContainer>
				<img src={shoe} alt='shoe' />
			</ImgContainer>
			<DetailContainer>
				<p>
					<span>F</span>
					<span>I</span>
					<span>R</span>
					<span>S</span>
					<span>T</span>
					<span>&nbsp;&nbsp;</span>
					<span>W</span>
					<span>E</span>
					<span>A</span>
					<span>R</span>
				</p>
			</DetailContainer>
			<BrandContainer>
				<Marquee
					className='marquee'
					speed='120'
					pauseOnHover='true'
					gradientWidth='0'
					// style={{
					// 	color: 'white',
					// 	fontStyle: 'italic',
					// 	background: 'transparent',
					// 	fontSize: '10em',
					// 	width: '100vw',
					// 	'-webkit-text-stroke': '1px grey',
					// 	color: 'transparent',
					// }}
				>
					Crafted by - best in the division&nbsp;&nbsp;
				</Marquee>
			</BrandContainer>
		</Section>
	);
};

export default HomeContainer;

const Section = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: grey;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ImgContainer = styled.div`
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.7;
	}
`;

const DetailContainer = styled.div`
	position: absolute;
	top: 20%;
	backdrop-filter: blur(2px);
	span {
		font-size: ${p => p.theme.fontlgBig};
		color: yellow;
		text-align: center;
		transition: all 0.2s ease-in-out;
		&:hover {
			-webkit-text-stroke: 2px #ecffdc;
			color: transparent;
		}
	}

	@media screen and (max-width: 1400px) {
		span {
			font-size: 13em;
		}
	}
	@media screen and (max-width: 900px) {
		span {
			font-size: 9em;
		}
	}
	@media screen and (max-width: 430px) {
		span {
			font-size: 4.5em;
		}
	}
`;

const BrandContainer = styled.div`
	position: absolute;
	top: 60%;
	z-index: 0;
	.marquee {
		transition: all 0.2s ease-in-out;
		color: white;
		font-style: italic;
		font-size: 4em;
		-webkit-text-stroke: 1px #a9a9a9;
		color: transparent;
		&:hover {
			-webkit-text-stroke: 2px #fffacd;
		}
		@media screen and (max-width: 1400px) {
			font-size: 3.5em;
		}
		@media screen and (max-width: 900px) {
			font-size: 3.2em;
		}
		@media screen and (max-width: 430px) {
			font-size: 3em;
		}
	}
`;
