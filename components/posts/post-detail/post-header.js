import Image from 'next/image';

import classes from './post-header.module.css';

const PostHeader_18 = (props) => {
  const { title, image } = props;
  console.log('image', image);
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader_18;
