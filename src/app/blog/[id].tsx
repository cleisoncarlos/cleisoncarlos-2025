'use client'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface Post {
  title: { rendered: string };
  content: { rendered: string };
  _embedded: any;
}

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://aprovinciadopara.com.br/wp-json/wp/v2/posts/${id}?_embed`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((error) => console.error("Erro ao buscar post:", error));
    }
  }, [id]);

  if (loading) return <p>Carregando...</p>;

  if (!post) return <p>Post não encontrado</p>;

  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://picsum.photos/800/600";

  return (
    <>
      <Header />
      <Hero />
      <div className="container py-5">
        <h1 className="fw-bold">{post.title.rendered}</h1>
        <img src={imageUrl} alt={post.title.rendered} className="img-fluid my-4" />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
      <Footer />
    </>
  );
}
