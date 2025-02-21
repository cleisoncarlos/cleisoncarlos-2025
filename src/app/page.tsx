
"use client"
import CardNews from "./components/CardNews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeIcons from "./components/MarqueeIcons";
import MyServices from "./components/MyServices";

import { useState, useEffect } from "react";
import Projects from "./components/Projects";

interface Post {
  // _embedded: any;
  id: number;
  title: { rendered: string };
  featured_media: { source_url: string };
  categories: number[]; // Pode ser um ID de categoria
}



export default function Home() {


  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://aprovinciadopara.com.br/wp-json/wp/v2/posts?_embed&per_page=6") // Ajuste a URL da API
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
<MarqueeIcons/>
</div>
<MyServices/>
  <Projects/>


<div className="container py-5">

<h5>Hello, I'm</h5>
                <h1 className='fw-bold display-3'>Lorem Ipsum <span className='text-red'>Dolor</span></h1>
                <h3>Lorem Ipsum Dolor</h3>
<div className="row">



{/* {posts.map((post) => (
        <div className="col-md-4" key={post.id}>
          <CardNews
            url={`https://seusite.com/post/${post.id}`}
            category="Notícia" // Se quiser buscar a categoria, precisará fazer outra requisição
            title={post.title.rendered}
            urlImage={post.featured_media?.source_url || "https://picsum.photos/800/600"}
          />
        </div>
      ))} */}


{posts.map((post) => {
            const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://picsum.photos/800/600";
            
            return (
              <div className="col-md-4" key={post.id}>
                <CardNews
                  url={`https://seusite.com/post/${post.id}`}
                  category="Notícia" // Se quiser buscar a categoria, precisará fazer outra requisição
                  title={post.title.rendered}
                  urlImage={imageUrl}
                />
              </div>
            );
          })}



</div>
</div>


<Footer/>
</>

  );
}
