export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('app:error', (error) => {
		console.error('Global Error Caught:', error);

		// Extract status code and message from error object, with defaults
		const statusCode = error?.statusCode || 500;
		const message = error?.message || 'An unexpected error occurred.';

		// Redirect to custom error page with error details in query
		// @ts-ignore
		nuxtApp.$router.push({
			path: '/error',
			query: {
				statusCode: statusCode.toString(),
				message
			}
		});
	});
});