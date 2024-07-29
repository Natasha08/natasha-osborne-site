import {getAllPosts} from '@/lib/api';
import Link from 'next/link';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className="container">
        <header>{heroPost.title}</header>
        <p>{heroPost.coverImage}</p>
        <p>{heroPost.date}</p>
        <p>{heroPost.author}</p>
        <Link href={`/posts/${heroPost.slug}`} className="hover:underline">
          {heroPost.title}
        </Link>
        {heroPost.excerpt}
      </div>
      <div className="container">
        {morePosts.length
          ? morePosts.map((post) => {
              {
                post.title;
              }
              {
                post.coverImage;
              }
              {
                post.date;
              }
              {
                post.author;
              }
              {
                post.slug;
              }
              {
                post.excerpt;
              }
            })
          : null}
      </div>
    </main>
  );
}
