import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'ayushi.tech',
    href: 'https://ayushi.tech',
  },
  {
    social: 'email',
    link: 'damncode12@gmail.com',
    href: 'mailto:damncode12@gmail.com',
  },
  {
    social: 'github',
    link: 'damncode12',
    href: 'https://github.com/damncode12',
  },
  {
    social: 'linkedin',
    link: 'Ayushi Dwivedi',
    href: 'https://www.linkedin.com/in/ayushidwivedi1208',
  },
  {
    social: 'twitter',
    link: 'Ayushi',
    href: 'https://www.twitter.com/ayushiom1203',
  },
  {
    social: 'instagram',
    link: 'damncode12',
    href: 'https://www.instagram.com/damncode12',
  },
  {
    social: 'telegram',
    link: 'damncode12',
    href: 'https://t.me/damncode12',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
