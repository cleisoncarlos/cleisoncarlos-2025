import style from './style.module.scss'

export default function CardService({icon, title, description}: {icon: string, title: string, description: string}) {
  return (
    <div className="col ">
    <div className={`card h-100 border-0 rounded-0 shadow ${style['bg-rgba']}`}>     
      <div className="card-body text-white">
        <div>{icon}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
   
  )
}
