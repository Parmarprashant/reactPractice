import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log("Fetched Data:", data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []); 




  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing</h1>

   
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>men's clothing</option>
        <option>women's clothing</option>
        <option>electronics</option>
        <option>jewelery</option>
      </select>

 
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort By Price</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>

      <hr />

    
      {sortedProducts.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <h4>{product.title}</h4>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
