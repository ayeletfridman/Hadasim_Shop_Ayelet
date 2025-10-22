"use client";
import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";

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
    fetch("/api/products")
      .then(async (res) => {
        const text = await res.text();
        try {
          const data = text ? JSON.parse(text) : [];
          setProducts(data);
        } catch (err) {
          console.error("Failed to parse JSON:", text, err);
          setProducts([]);
        }
      })
      .catch((err) => console.error("Error loading products:", err));
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
