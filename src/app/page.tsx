"use client";
import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { fetchProducts } from "./services/client/product.client";

interface Product {
  _id: string;
  title: string;
  desc: string;
  price: number;
  img: string;
  inv: {
    haifa: string;
    tlv: string;
    eilat: string;
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((p) => (
        <Card
          key={p._id}
          image={p.img}
          title={p.title}
          description={p.desc}
          price={p.price}
        />
      ))}
    </div>
  );
}
