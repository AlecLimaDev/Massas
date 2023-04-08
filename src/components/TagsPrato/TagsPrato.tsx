import classNames from 'classnames';
import styles from './TagsPrato.module.scss';
import { Prato } from '../../types/Prato';

const TagsPrato = ({ categoria, tamanho, servindo, preco} : Prato ) => {
  return (
    <div className={styles.tags}>
        <div className={classNames({
            [styles.tags__tipo]: true,
            [styles[`tags__tipo__${categoria.label.toLowerCase()}`]]: true
        })}>{categoria.label}</div>
        <div className={styles.tags__porcao}>{tamanho}g</div>
        <div className={styles.tags__qtdpessoas}>Serve {servindo} pessoa{servindo === 1 ? '' : 's'}</div>
        <div className={styles.tags__valor}>R$ {preco.toFixed(2)}</div>
    </div>
  )
}

export default TagsPrato
