import menuData from './menu.json';
import './menu.css';

class Menu {
  getProducts () {
    const result = menuData.menu;
    return result;
  }
}
class UI {
  constructor () {
    const speech = document.querySelector("#speech");
    speech.innerHTML = "You're here for the good stuff, huh?"
  }
  displayMenu (menuItems) {
    const content = document.querySelector("#content");
    let result = '';
    menuItems.forEach(item => {
      result += `
      <div class="item">
        <div class="name">${item["name"]}</div>
        <div class="price">${item["price"]} euros</div>
        <img class="image" src=${item["image"]} alt="image of a burger">
      </div>
      `;
    })
    content.innerHTML = `
    <div class="menu-container">${result}</div>
    `;
  }
}
export { Menu, UI };