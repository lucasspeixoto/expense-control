import { firebaseKeys } from '../../.env';

export const environment = {
	production: false,
	firebase: {
		apiKey: firebaseKeys.API_KEY,
		authDomain: firebaseKeys.AUTH_DOMAIN,
		projectId: firebaseKeys.PROJECT_ID,
		storageBucket: firebaseKeys.STORAGE_BUCKET,
		messagingSenderId: firebaseKeys.MESSAGING_SENDER_ID,
		appId: firebaseKeys.APP_ID,
	},
};
