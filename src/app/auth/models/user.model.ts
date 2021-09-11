/* export interface User {
	name?: string;
	userId: string;
	email: string;
} */

export class User {
	static fromDataBase({ name, userId, email }) {
		return new User(name, userId, email);
	}

	constructor(
		public name: string,
		public userId: string,
		public email: string,
	) {}
}
