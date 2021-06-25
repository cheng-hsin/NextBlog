import Image from 'next/image';
import classes from './hero.module.css';
const Hero_18 = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/anpanman.png'
          alt='An image showing wrong'
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I'm Anpanman</h1>
      <p>I blog about web development.</p>
    </section>
  );
};

export default Hero_18;
