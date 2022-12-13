const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/logofirefox.png") {
    myImage.setAttribute("src", "imagens/logofirefox2.png");
  } else {
    myImage.setAttribute("src", "imagens/logofirefox.png");
  }
}

let botao = document.querySelector('button')
let hum = document.querySelector('h1')

function username() {
    const nick = prompt('Digite seu nome!')
    localStorage.setItem('name, nick')
    hum.textContent = `Mozilla é legal, ${nick}`
    }
    if (!localStorage.getItem("name")) {
        username();
    } else {
        const storedName = localStorage.getItem("name");
        hum.textContent = `Mozilla é legal, ${storedName}`;
    }

botao.onclick = () => {
    username();
};

function username() {
    const nick = prompt("Por favor digite o seu nome.");
    if (!nick) {
      setUserName();
    } else {
      localStorage.setItem("name", nick);
      myHeading.textContent = `Mozilla é legal, ${nick}`;
    }
  }
