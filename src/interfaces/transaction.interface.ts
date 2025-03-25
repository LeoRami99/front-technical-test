export interface SendTransaction {
	transaction: {
		amount: number;
		userId: string;
		methodPayment: string;
		productId: string;
		price: number;
	};
	token_card: string;
	acceptance_token: string;
	installments: number;
}
