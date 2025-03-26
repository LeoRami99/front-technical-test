import { create } from "zustand";

interface CardTokenState {
	tokenCard: string;
	setTokenCard: (token: string) => void;
}

export const useCardToken = create<CardTokenState>((set) => ({
	tokenCard: "",
	setTokenCard: (token: string) => set({ tokenCard: token }),
}));

interface TermsConditionsState {
	acceptedToken: string;
	setAccepted: (token: string) => void;
}

export const useTermsConditions = create<TermsConditionsState>((set) => ({
	acceptedToken: "",
	setAccepted: (token: string) => set({ acceptedToken: token }),
}));

interface StepsState {
	step: number;
	setStep: (step: number) => void;
}

export const useSteps = create<StepsState>((set) => ({
	step: 1,
	setStep: (step: number) => set({ step }),
}));

interface ProductState {
	name: string;
	amount: number;
	userId: string;
	methodPayment: string;
	productId: string;
	price: number;
	installments: number;
	setName: (name: string) => void;
	setAmount: (amount: number) => void;
	setUserId: (userId: string) => void;
	setMethodPayment: (method: string) => void;
	setProductId: (productId: string) => void;
	setPrice: (price: number) => void;
	setInstallments: (installments: number) => void;
}

export const useProduct = create<ProductState>((set) => ({
	name: "",
	amount: 1,
	userId: "f788b0a5-650e-458c-bef9-f6ce9bd75e1b",
	methodPayment: "CARD",
	productId: "",
	price: 0,
	installments: 1,
	setName: (name: string) => set({ name }),
	setAmount: (amount: number) => set({ amount }),
	setUserId: (userId: string) => set({ userId }),
	setMethodPayment: (method: string) => set({ methodPayment: method }),
	setProductId: (productId: string) => set({ productId }),
	setPrice: (price: number) => set({ price }),
	setInstallments: (installments: number) => set({ installments }),
}));
