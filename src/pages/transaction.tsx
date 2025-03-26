import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getTransactions } from "../services/transaction.service";
import { InternalTransaction } from "../interfaces/transaction.interface";

const TransactionPage = () => {
	const { idTransaction } = useParams();
	const [transaction, setTransaction] = useState<InternalTransaction>();
	const [loading, setLoading] = useState(true);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		setLoading(true);
		getTransactions(idTransaction as string)
			.then((res) => {
				setTransaction(res as InternalTransaction);
			})
			.finally(() => setLoading(false));
	}, [idTransaction, reload]);

	useEffect(() => {
		if (transaction?.status === "pending") {
			const timer = setTimeout(() => {
				setReload(!reload);
			}, 10000);

			return () => clearTimeout(timer);
		}
	}, [transaction, reload]);

	return (
		<div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-3xl mx-auto'>
				{/* Receipt Card */}
				<div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100'>
					{/* Header */}
					<div className='bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6'>
						<div className='flex justify-between items-center'>
							<h1 className='text-2xl font-bold text-white'>Payment Receipt</h1>
							<div className='text-white text-opacity-80 text-sm'>Ref: {idTransaction?.substring(0, 8)}</div>
						</div>
					</div>
					{loading ? (
						<div className='p-12 flex flex-col items-center justify-center'>
							<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4'></div>
							<p className='text-gray-500'>Loading transaction details...</p>
						</div>
					) : transaction ? (
						<div className='p-8'>
							<div className='flex justify-center mb-6'>
								<span
									className={`px-4 py-2 rounded-full text-sm font-medium ${
										transaction.status === "approved"
											? "bg-green-100 text-green-800 border border-green-200"
											: transaction.status === "DECLINED"
											? "bg-red-100 text-red-800 border border-red-200"
											: "bg-yellow-100 text-yellow-800 border border-yellow-200"
									}`}>
									{transaction.status === "approved" && "✓ "}
									{transaction.status === "DECLINED" && "✕ "}
									{transaction.status}
								</span>
							</div>

							<div className='border-b border-gray-200 pb-6 mb-6'>
								<h2 className='text-xs uppercase tracking-wider text-gray-500 mb-3'>Transaction Details</h2>
								<div className='flex justify-between items-center mb-3'>
									<span className='text-gray-600'>Transaction ID</span>
									<span className='font-medium text-gray-900'>{idTransaction}</span>
								</div>
								<div className='flex justify-between items-center mb-3'>
									<span className='text-gray-600'>Date & Time</span>
									<span className='font-medium text-gray-900'>{new Date(transaction.createdAt).toLocaleString()}</span>
								</div>
								<div className='flex justify-between items-center'>
									<span className='text-gray-600'>Payment Method</span>
									<span className='font-medium text-gray-900'>{transaction.methodPayment}</span>
								</div>
							</div>
							<div className='border-b border-gray-200 pb-6 mb-6'>
								<h2 className='text-xs uppercase tracking-wider text-gray-500 mb-3'>Product Information</h2>
								<div className='flex justify-between items-center mb-3'>
									<span className='text-gray-600'>Product ID</span>
									<span className='font-medium text-gray-900'>{transaction.productId}</span>
								</div>
							</div>
							<div>
								<h2 className='text-xs uppercase tracking-wider text-gray-500 mb-3'>Payment Summary</h2>
								<div className='flex justify-between items-center pt-3 border-t border-dashed border-gray-200'>
									<span className='text-gray-800 font-medium'>Total Amount</span>
									<span className='font-bold text-lg text-gray-900'>{transaction.amount}</span>
								</div>
								<div className='flex justify-between items-center mb-3'>
									<span className='text-gray-600'>Price</span>
									<span className='font-medium text-gray-900'>${transaction.price}</span>
								</div>
							</div>
						</div>
					) : (
						<div className='p-12 text-center'>
							<div className='text-red-500 text-lg mb-2'>Transaction Not Found</div>
							<p className='text-gray-500'>We couldn't find the transaction details you're looking for.</p>
						</div>
					)}
					{transaction && <div className='bg-gray-50 px-8 py-4 text-center text-sm text-gray-500'>Thank you for your purchase</div>}
				</div>
			</div>
		</div>
	);
};

export default TransactionPage;
