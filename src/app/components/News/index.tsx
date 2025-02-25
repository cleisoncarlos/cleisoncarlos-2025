import { useState, useEffect } from 'react'
import Loading from '../Loading';
import CardNews from '../CardNews';

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

export default function News() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [categories, setCategories] = useState<{ [key: number]: string }>({});
    const [loading, setLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        fetch(`https://blog.cleisoncarlos.com/wp-json/wp/v2/posts?_embed&per_page=6`) // Ajuste a URL da API
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => console.error("Erro ao buscar posts:", error));
    }, []);


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

    return (
        <div className="container py-5">
            <h1 className='fw-bold display-3'><span className="small text-white h3">Meu</span> <span className='text-red'>Blog</span></h1>
            <h5>As últimas novidades e conquistas no meu universo de programação</h5>
            <div className="row">
                {posts.map((post) => {
                    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://picsum.photos/800/600";
                    const category = categories[post.categories[0]] || "Tecnologia";
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
        </div>
    )
}
