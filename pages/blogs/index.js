import Card from "../components/card";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      data,
    },
  };
};

const Blogs = ({ data }) => {
  return (
    <>
      <Head>
          <title>Blogs</title>
      </Head>
      <div className="my-5">
        <h1>Blogs</h1>
        <div className="row">
          {data &&
            data.slice(0, 6).map((item, i) => {
              
              return (
                <div key={item} className="col-md-6">
                  <Card title={item.title.slice(0, 40) + (item.title.length > 40 ? "..." : "")} body={item.body} url={`/blogs/${item.id}`} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
