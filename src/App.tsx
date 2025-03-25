import "./App.css";
import CreditCardValidator from "./components/CreditCardValidator/CreditCardValidator";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
	return (
		<>
			<Navbar />
			<div>
				<Products />

				<Modal id='validation-credit-card' children={<CreditCardValidator />} />
			</div>
		</>
	);
}

export default App;
