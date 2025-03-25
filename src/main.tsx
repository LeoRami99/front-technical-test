import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import TransactionPage from "./pages/transaction.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Toaster />
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/transaction/:idTransaction' element={<TransactionPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
