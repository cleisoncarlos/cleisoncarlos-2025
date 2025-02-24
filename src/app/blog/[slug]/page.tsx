"use client"
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Share from '@/app/components/Share';

interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    _embedded: any;
}

export default function PostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetch(`https://aprovinciadopara.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`)
                .then((response) => response.json())
                .then((data) => {
                    setPost(data[0]);
                    setLoading(false);
                })
                .catch((error) => console.error("Erro ao buscar post:", error));
        }
    }, [slug]);

    if (loading) return <Loading />;
    if (!post) return <div>Post não encontrado</div>;

    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://picsum.photos/800/600";

    return (
        <>
            <Header />
            <div className="container py-5">
          <div className="col-lg-8 mx-auto">
          <h1 className="fw-bold mb-4">{post.title.rendered}</h1>
              <Share url={`https://aprovinciadopara.com.br/${slug}`}/>
            
                <img src={imageUrl} className="img-fluid mb-4" alt={post.title.rendered} />
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
            </div>
            <Footer />
        </>
    );
}
