// Dados dos slides: imagem e texto descritivo
const dadosSlides = [
  {
    src: "imagem/bolo.jpg",   
    texto:
      "Curso de Bolos Caseiros e Festa (Online).<br> Aprenda a preparar massas fofinhas, recheios equilibrados e montagens perfeitas para bolos caseiros e de festa. Você vai entender técnicas simples, combinações que vendem e como transformar cada receita em uma fonte de renda. <br><br> Ideal para quem quer começar do zero ou melhorar seus resultados na cozinha",
  },
  {
    src: "imagem/salgados.jpg", 
    texto:
      "Curso de Salgadinhos Fritos e Assados (Online).<br>Descubra o passo a passo para preparar salgadinhos saborosos e padronizados, como coxinha, bolinha de queijo, kibe e muito mais. Você vai aprender desde a massa até o ponto ideal de fritura ou forno, garantindo qualidade e lucro em cada produção.<br><br> Perfeito para quem deseja vender para festas, encomendas e eventos.",
  },
  {
    src: "imagem/doce.jpg",  
    texto:
      "Curso de Doces Gourmet (Online ou Presencial Premium).<br> Aprenda a produzir doces gourmet com acabamento profissional e alto valor agregado. Brigadeiros especiais, combinações sofisticadas e técnicas de apresentação que encantam e vendem. Na versão presencial premium, você também aprende técnicas de finalização e decoração com acompanhamento individual. <br><br>Ideal para quem quer elevar o nível e aumentar o faturamento.",
  },
  {
    src: "imagem/confeitar.jpg",  
    texto:
      "Curso de Confeitaria Presencial (Turma Exclusiva – até 2 alunas),<br> Uma experiência prática e personalizada para quem quer dominar técnicas de confeitaria com segurança. Aprenda na prática montagem, nivelamento, recheio e finalização de bolos com orientação direta. <br><br> Vagas limitadas para até 2 alunas por turma, garantindo atenção individual e aprendizado completo.",
  },
];

const containerSlides = document.querySelector(".slides");
containerSlides.innerHTML = dadosSlides
  .map(
    (item, i) => `
  <div class="slide ${i === 0 ? "ativo" : ""}">
    <img src="${item.src}" alt="imagem-${i + 1}">
    <p>${item.texto}</p>
  </div>
`,
  )
  .join("");

let slides = document.querySelectorAll(".slide");
let indice = 0;

function mostrarIndice(novoIndice) {
  slides[indice].classList.remove("ativo");
  indice = (novoIndice + slides.length) % slides.length;
  slides[indice].classList.add("ativo");
}

document
  .querySelector(".next")
  .addEventListener("click", () => mostrarIndice(indice + 1));
document
  .querySelector(".prev")
  .addEventListener("click", () => mostrarIndice(indice - 1));

// FAQ - Abrir e fechar respostas
const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const item = pergunta.parentElement;
    item.classList.toggle("ativo");
  });
});

// BOTÃO VOLTAR AO TOPO
const voltarTopo = document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    voltarTopo.classList.add("mostrar");
  } else {
    voltarTopo.classList.remove("mostrar");
  }
});

voltarTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});









