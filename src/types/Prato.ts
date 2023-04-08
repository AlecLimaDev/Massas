import cardapio from './data/lista-cardapio.json';

export type Cardapio = typeof cardapio;

export type Prato = typeof cardapio[0]