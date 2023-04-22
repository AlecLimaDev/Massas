import cardapio from "../../data/lista-cardapio.json";
import styles from "./Inicio.module.scss";
import stylesTema from "../../styles/Tema.module.scss";
import nossaCasa from "../../assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Prato } from "../../types/Prato";

const Inicio = () => {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato }, replace: true });
  }

  return (
    <section className={stylesTema.container}>
      <h3 className={stylesTema.titulo}>Recomendações de cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.titulo} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3186
          <br />
          São Cristóvão, RJ
        </div>
      </div>
    </section>
  );
};

export default Inicio;
