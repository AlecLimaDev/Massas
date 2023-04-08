import styles from "./Item.module.scss";
import { Prato } from "../../../../types/Prato";
import TagsPrato from "../../../../components/TagsPrato/TagsPrato";
import { useNavigate } from "react-router-dom";

const Item = (props : Prato) => {

    const {id, photo, titulo, descricao} = props;
    const navigate = useNavigate()

    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={titulo} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {titulo} </h2>
                    <p> {descricao} </p>
                </div>
                <TagsPrato {...props} />
            </div>
        </div>
    )
}

export default Item
