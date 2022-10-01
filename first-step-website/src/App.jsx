//Framer motion imports
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';

//CSS imports
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Theme';
import { useRef } from 'react';

//Component imports
import Home from './sections/Home';
import About from './sections/About';

//Redux Imports
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
	const scrollRef = useRef(null);
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={light}>
				<LocomotiveScrollProvider
					options={{
						smooth: true,
						// ... all available Locomotive Scroll instance options
						smartphone: {
							smooth: true,
						},
						tablet: {
							smooth: true,
						},
					}}
					watch={[]}
					containerRef={scrollRef}
				>
					<AnimatePresence>
						<Provider store={store}>
							<main
								className='App'
								data-scroll-container
								ref={scrollRef}
								style={{ overflowX: 'hidden' }}
							>
								<Home />
								<About />
							</main>
						</Provider>
					</AnimatePresence>
				</LocomotiveScrollProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
