
"use client"
import CardNews from "./components/CardNews";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeIcons from "./components/MarqueeIcons";
import MyServices from "./components/MyServices";

import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: { rendered: string };
  featured_media: { source_url: string };
  categories: number[]; // Pode ser um ID de categoria
}



export default function Home() {


  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://aprovinciadopara.com.br/wp-json/wp/v2/posts?_embed") // Ajuste a URL da API
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  if (loading) return <p>Carregando...</p>;




  return (
  <>
    <div >

  
<Header/>
<Hero/>
</div>
<MyServices/>
<MarqueeIcons/>


<div className="container py-5">

<h5>Hello, I'm</h5>
                <h1 className='fw-bold display-3'>Lorem Ipsum <span className='text-red'>Dolor</span></h1>
                <h3>Lorem Ipsum Dolor</h3>
<div className="row">



{posts.map((post) => (
        <div className="col-md-4" key={post.id}>
          <CardNews
            url={`https://seusite.com/post/${post.id}`}
            category="Notícia" // Se quiser buscar a categoria, precisará fazer outra requisição
            title={post.title.rendered}
            urlImage={post.featured_media?.source_url || "https://picsum.photos/800/600"}
          />
        </div>
      ))}


{/* <div className="col-lg-4">
  <CardNews url="#" category="teste" title="Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor" urlImage="https://picsum.photos/800/600?random=1"/>
</div> */}



</div>
</div>
</>

  );
}
