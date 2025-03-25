import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
	return (
		<>
			<Navbar />
			<div>
				<Products />
			</div>
		</>
	);
}

export default App;
