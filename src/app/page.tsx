import Card from "./components/Card/Card";

export default function Home() {
  const products = [
    {
      title: "נעליים",
      imageUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description: "נעליים נוחות וקלות לעבודה וליום יום",
      price: 199.9,
    },
    {
      title: "חולצה",
      imageUrl:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description: "עשויה 100% כותנה איכותית ונושמת",
      price: 89.9,
    },
    {
      title: "כובע",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      description: "הגנה מושלמת מקרני השמש בים ובטיולים",
      price: 49.9,
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      }}
    >
      {products.map((p, i) => (
        <Card
          key={i}
          image={p.imageUrl}
          title={p.title}
          description={p.description}
          price={p.price}
        />
      ))}
    </div>
  );
}
