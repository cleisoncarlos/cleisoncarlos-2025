import { Spinner } from "@phosphor-icons/react"
import style from './style.module.scss'

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center " style={{height: '100vh'}}>
      <div>
        <Spinner size={100} weight="bold" color="#ffffff" className={style.spin} />
      </div>
    </div>
  )
}
