"use client"
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardNews from "../components/CardNews";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

interface Post {
  _embedded: any;
  id: number;
  title: { rendered: string };
  slug: string;
  featured_media: { source_url: string };
  categories: number[];
}

interface Category {
  id: number;
  name: string;
}


const meuBlog = 'process.env.URL_BLOG'

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setLoading(true);
    fetch(`https://blog.cleisoncarlos.com/wp-json/wp/v2/posts?_embed&page=${currentPage}&per_page=9`)
      .then((response) => {
        setTotalPages(parseInt(response.headers.get('X-WP-TotalPages') || '1', 10));
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, [currentPage]);

  useEffect(() => {
    fetch(`https://blog.cleisoncarlos.com/wp-json/wp/v2/categories`)
      .then((response) => response.json())
      .then((data: Category[]) => {
        const categoryMap: { [key: number]: string } = {};
        data.forEach((category) => {
          categoryMap[category.id] = category.name;
        });
        setCategories(categoryMap);
      })
      .catch((error) => console.error("Erro ao buscar categorias:", error));
  }, []);

  if (!isClient) return null;
  if (loading) return <Loading />;

  const handleNextPage = (event: any) => {
    event.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = (event: any) => {
    event.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
     
      <div className="container py-5">

      <h1 className='fw-bold display-3'><span className="small text-white h3">Meu</span> <span className='text-red'>Blog</span></h1>
      <h5>Últimas postagens</h5>

        <div className="row mt-5">
          {posts.map((post) => {
            const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://picsum.photos/800/600";
            const category = categories[post.categories[0]] || "Notícia";
            return (
              <div className="col-md-4" key={post.id}>
                <CardNews
                  url={`/blog/${post.slug}`}
                  category={category}
                  title={post.title.rendered}
                  urlImage={imageUrl}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="btn-group me-2" role="group" aria-label="group">
            <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={currentPage === 1}>
              <ArrowLeft size={28} color="#fff" weight="bold" className="mx-2" />
              Página Anterior
            </button>

            <button className="btn btn-outline-secondary px-4" disabled>Página {currentPage} de {totalPages}</button>

            <button className="btn btn-secondary" onClick={handleNextPage} disabled={currentPage === totalPages}>
              Próxima Página
              <ArrowRight size={28} color="#fff" weight="bold" className="mx-2" />
            </button>
          </div>
        </div>
      </div>
    
    </>
  );
}
