import React, { useEffect, useState } from "react";

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const aboutData = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const respData = await fetchData.json();
      console.log(respData);
      setAbout(respData);
    };

    aboutData();
  }, []); // ✅ run only once

  return (
    <>
      <h1>About Page</h1>

      {about.map((ele) => {
        return <h3 key={ele.id}>{ele.title}</h3>;
      })}
    </>
  );
}

export default About;
