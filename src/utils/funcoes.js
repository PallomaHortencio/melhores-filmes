const formataData = (data) => {
  // exemplo de data recebida: 2022-11-17
  const dataQuebrada = data.split("-");
  const dia = dataQuebrada[2]; // 17
  const mes = dataQuebrada[1]; // 11
  const ano = dataQuebrada[0]; // 2022
  console.log(data);
  console.log(dia, mes, ano);
  return `${dia}/${mes}/${ano}`;
};

export { formataData };
