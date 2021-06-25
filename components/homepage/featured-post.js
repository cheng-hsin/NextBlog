import classes from './featured-post.module.css';
// import PostsGrid from '../posts/posts-grid';
const FeaturedPost_18 = (props) => {
  console.log('featured-post', props.posts);
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      {/* <PostsGrid posts={props.posts} /> */}
    </section>
  );
};

export default FeaturedPost_18;
