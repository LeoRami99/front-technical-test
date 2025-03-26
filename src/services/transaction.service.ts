import axios from "axios";
import { ENVS } from "../config/config.envs";
import { SendTransaction } from "../interfaces/transaction.interface";

export const getTransactions = async (id: string) => {
	const response = await axios.get(`${ENVS.API_ENV}/transactions/${id}`);
	return response.data;
};

export const createTransaction = async (transaction: SendTransaction) => {
	const response = await axios.post(`${ENVS.API_ENV}/transactions`, transaction);
	return response.data;
};
