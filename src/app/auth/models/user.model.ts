export class User {
	static fromDataBase({ name, userId, email, photoUrl }) {
		return new User(name, userId, email, photoUrl);
	}

	constructor(
		public name: string,
		public userId: string,
		public email: string,
    public photoUrl: string,
	) {}
}
