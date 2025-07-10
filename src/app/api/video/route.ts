// ✅ src/app/api/video/route.ts

import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const fileName = req.nextUrl.searchParams.get('file');

  if (!fileName) {
    return new Response('Missing file parameter', { status: 400 });
  }

  const safeFileName = path.basename(fileName); // prevents path attacks
  const filePath = path.join(process.cwd(), 'public', 'videos', safeFileName);

  try {
    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': fileBuffer.length.toString(),
        'Content-Disposition': 'inline',
      },
    });
  } catch (error) {
    console.error('File error:', error);
    return new Response('File not found', { status: 404 });
  }
}
