import { useRouter } from "next/router";
import Head from 'next/head'

const About = () => {
  const router = useRouter();
  console.log("method", router);
  return (
    <>
      <Head>
          <title>About Us</title>
      </Head>
      <div className='my-5'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque dignissimos molestias facere nihil! Exercitationem assumenda accusantium facilis ab doloremque consequuntur provident aspernatur? Quisquam tempore consequuntur incidunt, quidem eum magni!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic nesciunt minima qui? Corrupti ipsum magnam rem iste veniam totam doloribus, velit temporibus, distinctio atque officiis dolor eveniet porro maiores!</p>
      </div>
    </>
  )
}

export default About