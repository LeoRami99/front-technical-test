import { useForm, SubmitHandler } from "react-hook-form";
import { CreditCard } from "../../interfaces/credit-card.interface";

const CreditCardValidator = () => {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<CreditCard>();

	const onSubmit: SubmitHandler<CreditCard> = (data) => {
		console.log(data);
	};

	const formatCreditCardNumber = (value: string) => {
		const digits = value.replace(/\D/g, "");
		const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
		return formatted.slice(0, 19);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2'>Card Number</label>
					<input
						type='text'
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='1234 5678 9012 3456'
						{...register("number", {
							required: true,
							onChange: (e) => {
								e.target.value = formatCreditCardNumber(e.target.value);
							},
						})}
						maxLength={19}
					/>
					{errors.number && <span className='text-red-500 text-xs italic'>This field is required</span>}
				</div>

				<div className='flex gap-4 mb-4'>
					<div className='w-1/3'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>CVC</label>
						<input
							type='text'
							className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='123'
							maxLength={4}
							{...register("cvc", { required: true })}
						/>
						{errors.cvc && <span className='text-red-500 text-xs italic'>Required</span>}
					</div>

					<div className='w-1/3'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>Exp Month</label>
						<input
							type='text'
							className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='MM'
							maxLength={2}
							{...register("exp_month", { required: true })}
						/>
						{errors.exp_month && <span className='text-red-500 text-xs italic'>Required</span>}
					</div>

					<div className='w-1/3'>
						<label className='block text-gray-700 text-sm font-bold mb-2'>Exp Year</label>
						<input
							type='text'
							className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='YY'
							maxLength={2}
							{...register("exp_year", { required: true })}
						/>
						{errors.exp_year && <span className='text-red-500 text-xs italic'>Required</span>}
					</div>
				</div>

				<div className='mb-6'>
					<label className='block text-gray-700 text-sm font-bold mb-2'>Card Holder</label>
					<input
						type='text'
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='Full Name on Card'
						{...register("card_holder", { required: true })}
					/>
					{errors.card_holder && <span className='text-red-500 text-xs italic'>This field is required</span>}
				</div>

				<button
					type='submit'
					className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
					Validate Card
				</button>
			</form>
		</div>
	);
};
export default CreditCardValidator;
