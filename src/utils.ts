export interface ISessionParameters {
	url: URL;
	sessionId: string | null;
	transcribe: boolean;
	connect: string | null;
	useTranscriptionator: boolean;
	useDispatcher: boolean;
}

export function extractSessionParameters(url: string): ISessionParameters {
	const parsedUrl = new URL(url);
	const sessionId = parsedUrl.searchParams.get('sessionId');
	const transcribe = parsedUrl.pathname.endsWith('/transcribe');
	const connect = parsedUrl.searchParams.get('connect');
	const useTranscriptionator = parsedUrl.searchParams.get('useTranscriptionator');
	const useDispatcher = parsedUrl.searchParams.get('useDispatcher');

	return {
		url: parsedUrl,
		sessionId,
		transcribe,
		connect,
		useTranscriptionator: !!useTranscriptionator,
		useDispatcher: !!useDispatcher,
	};
}
