//PEGANDO O INPUT
let ProdutoInput = document.getElementById("ProdutoInput"); // elemento que vai receber os dados digitados
let PrecoInput = document.getElementById("PrecoInput"); // elemento que vai receber os dados digitados
let QtdeInput = document.getElementById("QtdeInput"); // elemento que vai receber os dados digitados
let Adicionar = document.getElementById("BtnInput"); // elemento que vai receber os dados digitados

let Gastos = []; // array vazio que vai receber os preços dos produtos referente a quantidade

function Compras() {
  //PEGANDO O VALUE
  let Produto = ProdutoInput.value; // aqui estou pegando exatamente o valor digitado pelo usuario
  let Preco = Number(PrecoInput.value); // aqui estou pegando exatamente o valor digitado pelo usuario e deixando especifico que ele vai ser um número
  let Qtde = Number(QtdeInput.value); // aqui estou pegando exatamente o valor digitado pelo usuario e deixando especifico que ele vai ser um número
  const PrecoTotal = Preco * Qtde; // aqui estou pegando exatamente o valor digitado pelo usuario

  Gastos.push(PrecoTotal); // aqui eu estou adicioando  os valores das compras para mais tarde ser feita a soma

  const ComprasTotal = Gastos.reduce(
    (ComprasTotal, currentElement) => ComprasTotal + currentElement
  ); // aqui esta sendo feito a soma de todos os valores  que estão no array Gastos para dar o resultado final e mostrar quando foi a compra

  // conversão para moeda Real (R$)
  let PrecoReal = Preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  // conversão para moeda Real (R$)
  let PrecoTotalReal = PrecoTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  // conversão para moeda Real (R$)
  let ComprasTotalReal = ComprasTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  // Mostrar em tela
  let Detalhes = document.getElementById("Detalhes"); // aqui estou pegando a tabela que vai receber todos dados que foram formatados anteriormente

  Detalhes.innerHTML += `  <tr>
          <td>${Produto}</td>
          <td>${PrecoReal}</td>
          <td>${Qtde}</td>
          <td>${PrecoTotalReal}</td>
        </tr>`; //  o javascript esta criando esses elementos no html e  os valores entre ${} serão escritos no html

  let Soma = document.getElementById("ValorTotalCompras"); // div que vai mostrar o custo total da compra
  Soma.innerHTML = `<h5 class="card-title"> Valor total da compra</h5>
                         <p class="card-text">${ComprasTotalReal}</p>
  `;
}

Adicionar.addEventListener("click", Compras);
