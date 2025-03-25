import "./App.css";
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
					{step === 1 && <h1>Step 1</h1>}
					{step === 2 && <FormTermConditions />}
					{step === 3 && <CreditCardValidator />}
				</Modal>
			</div>
		</>
	);
}

export default App;
