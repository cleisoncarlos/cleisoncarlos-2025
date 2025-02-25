import styles from './style.module.scss'

export default function CardNews({urlImage, title, category, url}:{urlImage: string, title: string, category: string, url: string} ) {
  return (
    <div className="card border-0 rounded-0 mb-3">
        <a href={url}>
            <img src={urlImage} className={`img-fluid crop-img ${styles['crop-img']}`} alt={title} />       
            <div  className={`card-img-overlay rounded-0 border-0 ${styles.glass}`}>
                    <span className="badge text-bg-danger bg-danger rounded-0 mb-1">{category}</span>
                    <p className="text-white tw-bold">{title}</p>
            </div>
        </a>
    </div>
  )
}




