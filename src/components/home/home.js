import './home.css'

class Home {
  constructor () {
    const speech = document.querySelector("#speech");
    speech.innerHTML = "Welcome, astronaut!";
  }
  content () {
    const homeContent = `
    <div class="home-content">
      <p>Prepare for a liftoff into a universe of flavor, where every bite is a cosmic adventure.<br><br> 
       Whether you're a space explorer or an Earthbound foodie, you'll find something to love in our 
       constellation of delicious dishes.<br><br>Fasten your taste belts, and enjoy the ride!</p>
    </div>
    `;
    return homeContent;
  }
  addContent (content) {
    const DOMcontent = document.querySelector("#content");
    DOMcontent.innerHTML = content;
  }
}
export default Home;