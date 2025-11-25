export interface ISessionParameters {
	url: URL;
	sessionId: string | null;
	transcribe: boolean;
	connect: string | null;
	useTranscriptionator: boolean;
	useDispatcher: boolean;
	sendBack?: boolean;
}

export function extractSessionParameters(url: string): ISessionParameters {
	const parsedUrl = new URL(url);
	const sessionId = parsedUrl.searchParams.get('sessionId');
	const transcribe = parsedUrl.pathname.endsWith('/transcribe');
	const connect = parsedUrl.searchParams.get('connect');
	const useTranscriptionator = parsedUrl.searchParams.get('useTranscriptionator');
	const useDispatcher = parsedUrl.searchParams.get('useDispatcher');
	const sendBack = parsedUrl.searchParams.get('sendBack');

	return {
		url: parsedUrl,
		sessionId,
		transcribe,
		connect,
		useTranscriptionator: !!useTranscriptionator,
		useDispatcher: !!useDispatcher,
		sendBack: !!sendBack,
	};
}
