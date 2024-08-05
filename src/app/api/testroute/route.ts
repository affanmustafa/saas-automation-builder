import { NextRequest } from 'next/server';

export async function GET(res: NextRequest) {
	return new Response('Hello, world!');
}
