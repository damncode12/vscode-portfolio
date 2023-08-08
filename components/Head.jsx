import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ayushi Dwivedi is an avid full stack web developer building websites and applications you'd love to use."
      />
      <meta
        name="keywords"
        content="ayushi dwivedi, ayushi, web developer portfolio, ayushi web developer, ayushi developer, mern stack, ayushi dwivedi portfolio, ayushi vscode-portfolio"
      />
      <meta property="og:title" content="Ayushi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://avatars.githubusercontent.com/u/97382798?v=4" />
      <meta property="og:url" content="https://www.github.com/damncode12" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Ayushi Dwivedi',
};
