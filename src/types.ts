export interface ResponseCurrency {
	results: Currencies;
}
export interface ICurrency {
	alpha3: string;
	currencyId: string;
	currencyName: string;
	currencySymbol: string;
	id: string;
	name: string;
}
export interface Currencies {
  [key: string]: ICurrency
}
export interface RootObject {
	results: RootObjectResults;
}
export interface RootObjectResultsALL {
	currencyName: string;
	currencySymbol: string;
	id: string;
}