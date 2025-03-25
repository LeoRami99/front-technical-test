import { useState } from "react";
import { useProduct, useSteps } from "../../stores/useTransaction";
import { useForm } from "react-hook-form";

const CreateTransaction = () => {
	const [loading, setLoading] = useState(false);
	interface FormValues {
		amount: number;
	}
	const { setAmount } = useProduct();
	const { setStep } = useSteps();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		setLoading(true);
		if (data.amount) {
			setAmount(data.amount);
			setStep(2);
			setLoading(false);
		}
	};

	return (
		<div className='max-w-md mx-auto p-6 '>
			<h1 className='text-2xl font-bold text-gray-800 mb-6'>Create Transaction</h1>
			<form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
				<div className='space-y-2'>
					<label htmlFor='amount' className='block text-sm font-medium text-gray-700'>
						Amount
					</label>
					<input type='number' id='amount' required {...register("amount")} className='w-full input' disabled={loading} />
					{errors.amount && <span className='text-red-500'>This field is required</span>}
				</div>
				<button type='submit' className='w-full btn btn-primary' disabled={loading}>
					Next
				</button>
			</form>
		</div>
	);
};
export default CreateTransaction;
