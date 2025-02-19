
import styles from './style.module.scss'
export default function CardNews({urlImage, title, category, url}:{urlImage: string, title: string, category: string, url: string} ) {
  return (
    <div className="card border-0 rounded-0">
        <a href={url}>
            <img src={urlImage} className={`img-fluid ${styles.destaque_img}`} alt={title} />       
            <div  className={`card-img-overlay rounded-0 border-0 ${styles.glass}`}>
                    <span className="badge text-bg-light">{category}</span>
                    <h5 className="text-white tw-bold">{title}</h5>
            </div>
        </a>
    </div>
  )
}




