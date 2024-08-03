import {getS3SignedUrl} from '@/lib/api';

export default async function Resume() {
  const resumeUrl = await getS3SignedUrl(process.env.RESUME_FILE_NAME);

  return (
    <main className="h-full">
      {resumeUrl ? (
        <iframe
          title="Natasha Osborne's Resume"
          alt="Natasha Osborne's Resume"
          className="h-full w-full pt-20"
          src={resumeUrl}
        />
      ) : (
        <p>Loading image...</p>
      )}
    </main>
  );
}
