import { useEffect, useState } from "react";
import Item from "./Item/Item";
import cardapio from "../../../data/lista-cardapio.json";
import styles from "./Itens.module.scss";

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

const Itens = (props: Props) => {
  const [lista, setLista] = useState(cardapio);
  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
      case "porcao":
        return novaLista.sort((a, b) => (a.tamanho > b.tamanho ? 1 : -1));

      case "qtd_pessoas":
        return novaLista.sort((a, b) => (a.servindo > b.servindo ? 1 : -1));

      case "preco":
        return novaLista.sort((a, b) => (a.preco > b.preco ? 1 : -1));

      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.titulo) && testaFiltro(item.categoria.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Itens;
