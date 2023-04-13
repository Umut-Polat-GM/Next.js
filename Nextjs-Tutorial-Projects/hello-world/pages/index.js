import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handlerClick = () => {
    console.log("order success");
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Hello world</p>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>{" "}
      {/* Burada a tagı kullandıgımız zaman legacyBehavior Link tagına eklememizi istiyor */}
      <Link href="/product" legacyBehavior>
        <a>Product</a>
      </Link>
      <br />
      <button onClick={handlerClick}>Place Order</button>
    </div>
  );
}
