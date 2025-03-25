import axios from "axios";

import { ENVS } from "../config/config.envs";

export const getTokenCard = async (number: string, cvc: string, exp_month: string, exp_year: string, card_holder: string) => {
	const response = await axios.post(`${ENVS.API_ENV}/api-external/token-card`, {
		number,
		cvc,
		exp_month,
		exp_year,
		card_holder,
	});
	return response.data;
};
