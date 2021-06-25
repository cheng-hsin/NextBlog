import ReactMarkdown from 'react-markdown';
import PostHeader_18 from './post-header';

import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-with-nextjs.png',
  excerpt:
    'NextJS is a React framework for production -- it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
  date: '2022-02-10',
  content: '# This is a first post',
};

const PostContent_18 = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  console.log('dummy post', DUMMY_POST.content);
  const content = DUMMY_POST.content;
  return (
    <article className={classes.content}>
      <PostHeader_18 title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown> # This is a first post </ReactMarkdown>
    </article>
  );
};

export default PostContent_18;
