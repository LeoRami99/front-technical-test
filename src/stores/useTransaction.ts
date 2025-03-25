import { create } from "zustand";

interface CardTokenState {
	tokenCard: string | null;
	setTokenCard: (token: string) => void;
}

export const useCardToken = create<CardTokenState>((set) => ({
	tokenCard: null,
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
