import style from './style.module.scss'
import { IconProps } from '@phosphor-icons/react'


// Componente CardService com tipagem correta
export default function CardService({
  icon: Icon,
  title,
  description,
}: {
  icon: React.FC<IconProps>;
  title: string;
  description: string;
}) {
  return (
    <div className="col">
      <div className={`card h-100 border-0 rounded-0 shadow ${style['bg-rgba']}`}>
        <div className="card-body text-white">
          {/* Renderiza o ícone, se fornecido */}
          {Icon && <Icon size={60} color="#F60838" weight='duotone' className='mb-2' />}
          
          <h5 className="card-title fw-bold">{title}</h5>
          <hr/>
          <p className="card-text small">{description}</p>
        </div>
      </div>
    </div>
  );
}