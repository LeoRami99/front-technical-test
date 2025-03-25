export interface PresignedDocument {
	acceptance_token: string;
	permalink: string;
	type: string;
}

export interface PaymentProcessor {
	name: string;
}

export interface PaymentMethod {
	name: string;
	payment_processors: PaymentProcessor[];
}

export interface Data {
	id: number;
	name: string;
	email: string;
	contact_name: string;
	phone_number: string;
	active: boolean;
	logo_url: string | null;
	legal_name: string;
	legal_id_type: string;
	legal_id: string;
	public_key: string;
	accepted_currencies: string[];
	fraud_javascript_key: string | null;
	fraud_groups: any[];
	accepted_payment_methods: string[];
	payment_methods: PaymentMethod[];
	presigned_acceptance: PresignedDocument;
	presigned_personal_data_auth: PresignedDocument;
}

export interface RootResponse {
	data: Data;
	meta: any;
}
