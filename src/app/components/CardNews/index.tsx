
import styles from './style.module.scss'
export default function CardNews({urlImage, title, tag}:{urlImage: string, title: string, tag: string} ) {
  return (
    <div className="card border-0 rounded-0">
        <a href="#">
            <img src={urlImage} className={`img-fluid ${styles.destaque_img}`} alt={title} />       
            <div  className={`card-img-overlay rounded-0 border-0 ${styles.glass}`}>
                    <span className="badge text-bg-light">{tag}</span>
                    <h5 className="text-white tw-bold">{title}</h5>
            </div>
        </a>
    </div>
  )
}




