import { useEffect, useState, useMemo } from "react";
import { getInfoTermConditions } from "../../services/termConditions.service";
import { useSteps, useTermsConditions } from "../../stores/useTransaction";
import { RootResponse } from "../../interfaces/respons-terms.interface";
import { useForm } from "react-hook-form";
const FormTermConditions = () => {
	interface FormValues {
		personalData: string;
		terms: string;
	}
	const { handleSubmit, register } = useForm<FormValues>();
	const { step, setStep } = useSteps();
	const { setAccepted } = useTermsConditions();
	const [data, setData] = useState<RootResponse>();
	const [loading, setLoading] = useState(false);

	const isStepTwo = useMemo(() => step === 2, [step]);

	useEffect(() => {
		getInfoTermConditions()
			.then((res: RootResponse) => {
				setData(res);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [isStepTwo]);

	const onSubmit = (data: FormValues) => {
		setLoading(true);
		if (data.personalData && data.terms) {
			setAccepted(data.terms);
			setStep(3);
			setLoading(false);
		}
	};

	return (
		<form className='max-w-4xl mx-auto' onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-8 p-4'>
				<h2 className='text-xl font-semibold text-gray-700 mb-3'>Terminos y condiciones para uso de datos personales</h2>
				<a
					href={data?.data?.presigned_personal_data_auth.permalink}
					className='text-blue-600 hover:text-blue-800 underline block mb-3'
					target='_blank'
					rel='noreferrer'>
					Ver términos
				</a>
				<label className='flex items-center space-x-2 cursor-pointer'>
					<input
						type='checkbox'
						required
						disabled={loading}
						{...register("personalData")}
						value={data?.data?.presigned_personal_data_auth.acceptance_token}
						className='h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
					/>
					<span className='text-gray-700'>Acepto los términos y condiciones para uso de datos personales</span>
				</label>
			</div>
			<div className='p-4'>
				<h2 className='text-xl font-semibold text-gray-700 mb-3'>Terminos y condiciones</h2>
				<a
					href={data?.data?.presigned_acceptance.permalink}
					className='text-blue-600 hover:text-blue-800 underline block mb-3'
					target='_blank'
					rel='noreferrer'>
					Ver términos
				</a>

				<label className='flex items-center space-x-2 cursor-pointer'>
					<input
						type='checkbox'
						required
						disabled={loading}
						{...register("terms")}
						value={data?.data?.presigned_acceptance.acceptance_token}
						className='h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
					/>
					<span className='text-gray-700'>Acepto los términos y condiciones generales</span>
				</label>
			</div>
			<button type='submit' className='btn btn-primary w-full mt-4'>
				Continuar
			</button>
		</form>
	);
};
export default FormTermConditions;
