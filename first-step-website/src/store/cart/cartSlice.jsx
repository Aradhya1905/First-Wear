import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	cartItemAmt: 0,
	modal: false,
	cancel: false,
	
};




const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: state => {
			if(state.cartItemAmt >=1){
				alert('Already added to cart')
				
			}else{
				state.cartItemAmt += 1;
				alert('Added to cart');
			}
			
		},
		setModal: state => {
			state.modal = true;
		},
		setCancel: state => {
			state.modal = false;
		},
	
	},

	
});

export const { addToCart, setModal, setCancel } = cartSlice.actions;

console.log(cartSlice);
export default cartSlice.reducer;
