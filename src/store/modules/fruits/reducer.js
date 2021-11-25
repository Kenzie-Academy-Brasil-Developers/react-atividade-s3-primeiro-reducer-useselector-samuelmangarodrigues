const initialState = [
  {
    nome: "Banana",
    id: 1,
    img: "https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/banana-prata-unidade-aprox.-110-gramas_2021-04-20_11-27-58_3_423.jpeg",
  },
  {
    nome: "Maçã",
    id: 2,
    img: "https://hiperideal.vteximg.com.br/arquivos/ids/167662-1000-1000/27766.jpg?v=636615816153470000",
  },
  {
    nome: "Morango",
    id: 3,
    img: "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/oleo-essencia-morango-100ml-fruta-puro-essencia-massagem-D_NQ_NP_960102-MLB31202671230_062019-F[1]-1000x1000.jpg",
  },
];

const fruitsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fruitsReducer;
