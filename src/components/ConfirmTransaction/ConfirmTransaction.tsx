import { useState } from "react";
import { useProduct, useCardToken, useTermsConditions } from "../../stores/useTransaction";
import toast from "react-hot-toast";
import { createTransaction } from "../../services/transaction.service";
import { useNavigate } from "react-router";
import { IVA } from "../../consts/consts.tax";

const ConfirmTransaction = () => {
	const { amount, methodPayment, price, installments, name, userId, productId } = useProduct();
	const { tokenCard } = useCardToken();
	const { acceptedToken } = useTermsConditions();

	const [totalPay] = useState(amount * price);

	const ivaData = totalPay * IVA;

	const navigate = useNavigate();

	const onSubmitTransaction = () => {
		toast.promise(
			createTransaction({
				transaction: {
					amount: Number(amount),
					userId: userId,
					methodPayment: methodPayment,
					productId: productId,
					price: totalPay,
				},
				token_card: tokenCard,
				acceptance_token: acceptedToken,
				installments: Number(installments),
			}),
			{
				loading: "Creating transaction...",
				success: (res) => {
					navigate(`/transaction/${(res as { id: string }).id}`);
					return "Transaction created successfully";
				},
				error: "Failed to create transaction",
			}
		);
	};

	return (
		<div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-6 my-8'>
			<h1 className='text-2xl font-bold text-center text-gray-800 mb-6 border-b pb-3'>Confirm Transaction</h1>

			<div className='space-y-4'>
				<div className='flex justify-between'>
					<span className='text-gray-600'>Product:</span>
					<span className='font-medium'>{name}</span>
				</div>

				<div className='flex justify-between'>
					<span className='text-gray-600'>Price:</span>
					<span className='font-medium'>${price}</span>
				</div>

				<div className='flex justify-between'>
					<span className='text-gray-600'>Payment Method:</span>
					<span className='font-medium'>{methodPayment}</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-gray-600'>Amount:</span>
					<span className='font-medium'>{amount}</span>
				</div>

				{installments && (
					<div className='flex justify-between'>
						<span className='text-gray-600'>Installments:</span>
						<span className='font-medium'>{installments}</span>
					</div>
				)}
				<div className='flex justify-between pt-4 border-t font-bold'>
					<span>IVA:</span>
					<span>${ivaData.toFixed(0)}</span>
				</div>

				<div className='flex justify-between pt-4 border-t font-bold'>
					<span>Total Pay With IVA:</span>
					<span>${(totalPay + ivaData).toFixed(0)}</span>
				</div>
			</div>

			<button className='w-full btn btn-primary mt-6' onClick={onSubmitTransaction}>
				Confirm Payment
			</button>
		</div>
	);
};

export default ConfirmTransaction;
