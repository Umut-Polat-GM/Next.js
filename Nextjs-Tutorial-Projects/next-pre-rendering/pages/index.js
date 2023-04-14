import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next Js pre-rendering</h1>
      <Link href="/users">users</Link>
      <Link href="/posts">posts</Link>
    </>
  );
}

export default Home;
