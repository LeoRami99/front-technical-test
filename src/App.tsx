import "./App.css";
import ConfirmTransaction from "./components/ConfirmTransaction/ConfirmTransaction";
import CreateTransaction from "./components/CreateTransaction/CreateTransaction";
import CreditCardValidator from "./components/CreditCardValidator/CreditCardValidator";
import FormTermConditions from "./components/FormTermConditions/FormTermConditions";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { useSteps } from "./stores/useTransaction";

function App() {
	const { step } = useSteps();

	return (
		<>
			<Navbar />
			<div>
				<Products />

				<Modal id='start-transaction'>
					{step === 1 && <CreateTransaction />}
					{step === 2 && <FormTermConditions />}
					{step === 3 && <CreditCardValidator />}
					{step === 4 && <ConfirmTransaction />}
				</Modal>
			</div>
		</>
	);
}

export default App;
