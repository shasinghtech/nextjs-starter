import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        blogid: item.id.toString(),
      },
    };
  });
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.blogid;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      data,
    },
  };
};

const blogid = ({ data }) => {
  return (
    <>
      <Head>
        <title>{"Blog: " + data.title}</title>
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1681647627150-f5cb38f3a626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />        
        <meta property="og:site_name" content="Coder Blog" />
        <meta property="og:url" content="https://coderblog.dev/" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.body} />
        <meta property="og:type" content="" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1681647627150-f5cb38f3a626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        />
      </Head>
      <div className="my-5">
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </>
  );
};

export default blogid;
