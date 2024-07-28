import './about.css';
import fbLogo from '../../assets/fb_logo.png';
import igLogo from '../../assets/ig_logo.png';
import ytLogo from '../../assets/yt_logo.png';

class About {
  constructor () {
    const speech = document.querySelector("#speech");
    speech.innerHTML = "Follow us on social medias!";
  }
  content () {
    const aboutContent = `
    <div class="about-content">
      <p>At Galactic Burger, we are a team of young space enthusiasts from diverse backgrounds
       united by a love for cosmic cuisine.<br><br> 
       Our dedication to quality and innovation fuels our mission to deliver extraordinary flavors 
       and unforgettable experiences. <br><br>Join us on this journey, and be part of our cosmic community as we reach 
       for the stars, one burger at a time.</p>
      <div class="socials">
        <a href="#"><img class="fb" src="${fbLogo}"></a>
        <a href="#"><img class="ig" src="${igLogo}"></a>
        <a href="#"><img class="yt" src="${ytLogo}"></a>
      </div>
     
    </div>`;
    return aboutContent;
  }
  addContent (content) {
    const DOMcontent = document.querySelector("#content");
    DOMcontent.innerHTML = content;
  }
}
export default About;