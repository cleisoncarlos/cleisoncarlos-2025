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
  const { slug } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (slug) {
      fetch(`https://aprovinciadopara.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Post not found');
          }
          return response.json();
        })
        .then((data) => {
          if (data.length === 0) {
            throw new Error('Post not found');
          }
          setPost(data[0]);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar post:", error);
          setError(true);
          setLoading(false);
        });
    }
  }, [slug]);

  if (!isClient) return null;

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>Post não encontrado</p>;

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
