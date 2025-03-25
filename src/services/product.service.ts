import axios from "axios";
import { ENVS } from "../config/config.envs";
export const getProducts = async (page = 1, limit = 10, search = "") => {
	const response = await axios.get(`${ENVS.API_ENV}/products`, {
		params: {
			page,
			limit,
			search,
		},
	});
	return response.data;
};

// export const buyProduct = async (productId: number) => {};
