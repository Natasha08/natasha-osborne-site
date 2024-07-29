import {notFound} from 'next/navigation';
import {getPostBySlug} from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

export default async function Post({params}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      <div className="container">
        <article className="mb-32">
          <header>{post.title}</header>
          <p>{post.coverImage}</p>
          <p>{post.date}</p>
          <p>{post.author}</p>
          <div className="max-w-2xl mx-auto">
            <div
              className="markdown"
              dangerouslySetInnerHTML={{__html: content}}
            ></div>
          </div>
        </article>
      </div>
    </main>
  );
}
