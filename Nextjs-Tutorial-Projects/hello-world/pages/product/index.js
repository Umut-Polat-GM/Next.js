import Link from "next/link";
import React from "react";

export default function Product({productId = 100}) {
  return (
    <div>
      <h1>Details about Product Page</h1>
      <Link href="/"> {/* Burada ki  '/' route elementine represent ediyor*/}
       <h3>Home</h3>
      </Link>
      <Link href="/product/1">
       <p>Product 1</p>
      </Link>
      <Link href="/product/2">
       <p>Product 2</p>
      </Link>
      <Link href="/product/3" replace> {/*'replace' tıklayıp geri döndütünde route page gidiyor*/}
       <p>Product 3</p>
      </Link>
      <Link href={`/product/${productId}`}>
       <p>Product {productId}</p>
      </Link>
    </div>
  );
}
