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

export interface InternalTransaction {
	id: string;
	referenceInternalTransaction: string;
	amount: number;
	status: string;
	idExternalTransaction: string;
	userId: string;
	methodPayment: string;
	productId: string;
	price: number;
	createdAt: string;
	updatedAt: string;
}
