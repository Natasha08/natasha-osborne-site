import {NextResponse} from 'next/server';
import {getS3SignedUrl} from '@/lib/api/';

export async function GET() {
  try {
    const fileStream = await getS3SignedUrl(process.env.RESUME_FILE_NAME);

    return new NextResponse(fileStream, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="resume.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse('Failed to load resume', {status: 500});
  }
}
