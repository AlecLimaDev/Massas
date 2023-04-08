import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from '../../styles/Tema.module.scss';
import classNames from 'classnames';

const PaginaPadrao = ({ children }: { children?: React.ReactNode }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={classNames({
                    [styles.header__text] : true,
                    [stylesTema.titulo] : true,
                })}>
                    A casa do código e da massa
                </div>
            </header>
            <div>
                <Outlet />
                {children}
            </div>
        </>
    )
}

export default PaginaPadrao
