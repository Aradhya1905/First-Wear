import styled from 'styled-components';
import HomeContainer from '../components/HomeContainer';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<Section>
			<Navbar />
			<HomeContainer />
		</Section>
	);
};

export default Home;

const Section = styled.section`
	min-height: 100vh;
	width: 100vw;
`;
