/* export interface User {
	name?: string;
	userId: string;
	email: string;
} */

export class User {
	static fromDataBase({ name, userId, email }) {
		return new User(userId, name, email);
	}

	constructor(
		public name: string,
		public userId: string,
		public email: string,
	) {}
}
