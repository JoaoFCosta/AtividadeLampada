let led = "ligar";

const ligar = () => {
  let lampada = document.getElementById("lampada");
  let btnEnviar = document.getElementById("btnEnviar");

  lampada.src = "img/acesa.jpg";
  btnEnviar.innerHTML = "Apagar";

  if (led == "ligar") {
    lampada.src = "img/acesa.jpg";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    lampada.src = "img/apagada.jpg";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";
  for (let i = 0; i < qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens" src="img/acesa.jpg" alt="">`;
  }
};

const calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido").value;
  let inPercDesc = document.getElementById("inPercDesc");
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  switch (true) {
    case inValorPedido >= 2000:
      inPercDesc.value = 1.5;
      break;
    case inValorPedido >= 1500:
      inPercDesc.value = 1;
      break;
    case inValorPedido >= 1000:
      inPercDesc.value = 0.8;
      break;
    case inValorPedido >= 500:
      inPercDesc.value = 0.5;
      break;
    default:
      break;
  }

  // if (inValorPedido >= 2000) {
  //   inPercDesc.value = 1.5;
  // } else if (inValorPedido >= 1500) {
  //   inPercDesc.value = 1;
  // } else if (inValorPedido >= 1000) {
  //   inPercDesc.value = 0.8;
  // } else if (inValorPedido >= 500) {
  //   inPercDesc.value = 0.5;
  // }

  inValDesc.value = inValorPedido * (inPercDesc.value / 100);
  inValFinal.value = inValorPedido - inValDesc.value;
};

const validaForm = () => {
  const data = document.getElementById("inData").value;
  const cliente = document.getElementById("inCli").value;
  const telefone = document.getElementById("inFone").value;
  const email = document.getElementById("inMail").value;
  const produto = document.getElementById("inProd").value;
  const qtd = document.getElementById("inQtd").value;
  const valor = document.getElementById("inVal").value;
  const mensagemErro = document.getElementById("mensagem-erro");

  mensagemErro.innerHTML = "";
  mensagemErro.style.display = "none";
  mensagemErro.classList.remove("sucesso");

  if (!data) {
    mensagemErro.innerHTML += "A data é inválida! <br/>";
  }
  if (cliente.length < 3) {
    mensagemErro.innerHTML += "O cliente está incorreto! <br/>";
  }
  if (!telefone) {
    mensagemErro.innerHTML += "O telefone está incorreto! <br/>";
  }
  if (email.length < 6) {
    mensagemErro.innerHTML += "O email é inválido! <br/>";
  }
  if (produto.length < 5) {
    mensagemErro.innerHTML += "O produto está incorreto! <br/>";
  }
  if (qtd <= 0) {
    mensagemErro.innerHTML += "A quantidade é inválida! <br/>";
  }
  if (valor <= 0) {
    mensagemErro.innerHTML += "O valor é inválido! <br/>";
  }

  if (mensagemErro.innerHTML == "") {
    mensagemErro.style.display = "block";
    mensagemErro.innerHTML = "Dados enviados com sucesso!";
    mensagemErro.classList.add("sucesso");
  } else {
    mensagemErro.style.display = "block";
  }
};
