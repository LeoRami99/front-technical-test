import axios from "axios";
import { ENVS } from "../config/config.envs";
import { RootResponse } from "../interfaces/respons-terms.interface";

export const getInfoTermConditions = async (): Promise<RootResponse> => {
	const response = await axios.get(`${ENVS.API_ENV}/api-external/merchants`);
	return response.data as RootResponse;
};
