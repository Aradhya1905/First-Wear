import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCancel } from '../store/cart/cartSlice';
import { ethers } from 'ethers';
import FirstWear from '../FirstWear.json';

const FirstWearAddress = '0x93B55Db5c7666A92C10a64D4291E87df21BcDB41';
const Modal = () => {
	const { modal } = useSelector(store => store.cart);
	const dispatch = useDispatch();
	const [wallet, setWallet] = useState('');
	const [size, setSize] = useState('');
	const [address, setAddress] = useState('');
	const [paymentUnderProcess, setPaymentUnderProcess] = useState('');
	const [txnHash, setTxnHash] = useState('');

	const { ethereum } = window;

	const checkWalletConnected = async () => {
		if (!ethereum) {
			alert('please Connect to Metamask');
		} else {
			console.log('metamask exists');
		}
		const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		if (accounts.length !== 0) {
			setWallet(accounts[0]);
		} else {
			console.log('No accounts found');
		}
	};

	const contract = () => {
		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(FirstWearAddress, FirstWear.abi, signer);
		return Contract;
	};

	const payment = async () => {
		checkWalletConnected();
		try {
			if (ethereum) {
				const Contract = contract();
				if (ethereum && Contract) {
					const currentChainID = await ethereum.request({ method: 'eth_chainId' });
					console.log(currentChainID.toString());
					const PolygonTestNetID = '0x13881';
					if (currentChainID === PolygonTestNetID) {
						if (address !== '') {
							if (size >= 7 && size <= 10) {
								let nftTxn = await Contract.pay({
									value: ethers.utils.parseEther((0.2).toString()),
								});
								setPaymentUnderProcess('Payment under process....');
								await nftTxn.wait();
								setPaymentUnderProcess(
									'Payment Done...Have a look at the transaction below'
								);
								setTxnHash(`https://mumbai.polygonscan.com/tx/${nftTxn.hash}`);
							} else {
								alert('Only available sizes 7-10,please enter size between 7-10');
							}
						} else {
							alert('please input some value in the address field');
						}
					} else {
						alert('Please Connect To Polygon Testnet');
					}
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{modal ? (
				<ModalContainer>
					<Connect>
						{wallet === '' ? (
							<button onClick={checkWalletConnected}>Connect</button>
						) : (
							<button onClick={checkWalletConnected}>Connected</button>
						)}
						<p>Connect to Metamask</p>
					</Connect>
					<AddressContainer>
						<p>Address : </p>
						<input
							type='text'
							placeholder='please enter dummy address'
							value={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</AddressContainer>
					<SizeContainer>
						<p>size : </p>
						<input
							type='number'
							placeholder='please enter sizes between 7-10'
							value={size}
							onChange={e => setSize(e.target.value)}
						/>
					</SizeContainer>
					<PayAndCancelContainer>
						<button onClick={payment}>Pay</button>
						<button className='redButton' onClick={() => dispatch(setCancel())}>
							cancel
						</button>
					</PayAndCancelContainer>
					<PaymentUnderProcess>
						<p>{paymentUnderProcess}</p>
						{txnHash === '' ? null : (
							<p>
								Transaction hash@ :{' '}
								<a target='_blank' href={txnHash}>
									{' '}
									Polygon Scan
								</a>
							</p>
						)}
					</PaymentUnderProcess>
				</ModalContainer>
			) : null}
		</>
	);
};

export default Modal;

const ModalContainer = styled.div`
	width: 80vw;
	height: 80vh;
	position: absolute;
	top: 10%;
	left: 5%;
	border: 1px solid white;
	background-color: white;
	border-radius: 14px;
	padding: 0 3%;
	@media screen and (max-width: 900px) {
		top: 35%;
		height: 80vh;
	}
	@media screen and (max-width: 430px) {
		top: 35%;
		height: 90vh;
	}
`;
const Connect = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-left: 50%;
	margin-top: 5%;
	button {
		color: black;
		background-color: #3cd070;
		width: 100px;
		height: 50px;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s ease-in;
		&:hover {
			scale: 0.95;
		}
	}
	@media screen and (max-width: 1400px){
		margin-left: 40%;
	}
	@media screen and (max-width: 430px) {
		margin-left: 3.5%;
	}
`;
const AddressContainer = styled.div`
	margin-top: 2%;
	margin-left: 20%;
	display: flex;

	p {
		font-size: 1.5em;
	}
	input {
		width: 50%;
		height: 100px;
		margin-left: 10px;
		border-radius: 10px;
	}
	@media screen and (max-width: 430px) {
		margin-left: 3.5%;
		p{
			font-size: 1em;
		}
		input {
			width: 58%;
			height: 80px;
			font-size: 0.5em;
			padding:0.2em;
		}
	}
`;
const SizeContainer = styled.div`
	margin-top: 2%;
	margin-left: 23%;
	display: flex;

	p {
		font-size: 1.5em;
	}
	input {
		width: 50%;
		height: 50px;
		margin-left: 10px;
		border-radius: 10px;
	}
	@media screen and (max-width: 900px) {
		input {
			width: 60%;
		}
	}
	@media screen and (max-width: 430px) {
		margin-left: 9.5%;
		p{
			font-size: 1em;
		}
		input {
			width: 65%;
			height: 40px;
			font-size: 0.5em;
			padding:0.2em;
		}
	}
`;
const PayAndCancelContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 7%;
	gap: 5%;

	button {
		color: black;
		background-color: #3cd070;
		width: 100px;
		height: 50px;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s ease-in;
		&:hover {
			scale: 0.95;
		}
	}
	.redButton {
		background-color: hotpink;
	}
`;

const PaymentUnderProcess = styled.div`
	margin-top: 2.8%;
	margin-left: 25%;

	p {
		font-size: 1.2em;
		font-family: sans-serif;
		margin-top: 1.5%;
		a {
			border-bottom: 2px solid black;
		}
	}
	@media screen and (max-width: 430px) {
		margin-left: 5%;
		margin-top: 6.5%;
		p {
			font-size: 0.9em;
		}
	}
`;
