import { useParams } from "react-router";
const TransactionPage = () => {
	const { idTransaction } = useParams();
	return (
		<section>
			<h1>Transaction</h1>
			<p>Transaction id: {idTransaction}</p>
		</section>
	);
};
export default TransactionPage;
