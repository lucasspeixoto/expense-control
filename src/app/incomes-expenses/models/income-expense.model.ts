export class IncomeExpense {
	constructor(
		public description: string,
		public amount: number,
    public category: string,
    public frequency: string,
    public date: string,
		public type: string,
	) {}
}
