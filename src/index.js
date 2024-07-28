import Home from './components/home/home';
import About from './components/about/about';
import { Menu, UI} from './components/menu/menu';
import './style.css';

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const astronaut = document.querySelector("#astronaut");

// experiment: this is just out of curiosity
astronaut.addEventListener("mouseover", () => {
  changeSpeech();
})
astronaut.addEventListener("mouseout", () => {
  changeSpeech();
})
function changeSpeech() {
  const speech = document.querySelector("#speech");
  let newSpeech = speech.getAttribute("data-speech");
  let oldSpeech = speech.innerText;
  speech.innerHTML = newSpeech;
  speech.setAttribute("data-speech", oldSpeech);
}
// end of experiment


homeBtn.addEventListener("click", () => {
  const home = new Home ();
  home.addContent(home.content());
});
menuBtn.addEventListener("click", () => {
  const menu = new Menu ();
  const ui = new UI ();
  const menuItems = menu.getProducts();
  ui.displayMenu(menuItems);
});
aboutBtn.addEventListener("click", () => {
  const about = new About ();
  about.addContent(about.content());
});
const firstLoad = new Home ();
firstLoad.addContent(firstLoad.content());