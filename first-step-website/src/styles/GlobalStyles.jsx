import { createGlobalStyle } from "styled-components";
import "@fontsource/bebas-neue"

const GlobalStyles = createGlobalStyle`
	*,::before,::after{
		margin:0;
		padding:0;
	}

	body{
		font-family: "Bebas Neue", cursive;
		overflow-x:hidden ;
	}

	h1,h2,h3,h4,h5,h6{
		margin:0;
		padding:0;
	}

	a,ul,li{
		color:inherit;
		text-decoration:none;
		list-style-type:none;
	}	
`;
export default GlobalStyles;
