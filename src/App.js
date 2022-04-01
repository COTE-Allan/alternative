import "./assets/scss/core.scss";
import "./assets/scss/main.scss";
// Components
import Home from "./components/Home";
import Paragraph from "./components/Paragraph";
import Carousel from "./components/Carousel";
import LinkButton from "./components/LinkButton";
import Koffi from "./components/Koffi";
// IMG
import clementine from "./assets/img/Clementine.png";
import laura from "./assets/img/Laura.png";
import logoAlt from "./assets/img/logo_alt.png";

function App() {
  // Les fonctions allant de paires avec la prochaine.
  function addClassOnScroll(siteHeader) {
    siteHeader.classList.add("is-inverted");
    // console.log("in!");
  }
  function removeClassOnScroll(siteHeader) {
    siteHeader.classList.remove("is-inverted");
  }
  // Je fait en sorte d'obscursir le header quand nécessaire.
  window.addEventListener("scroll", function () {
    let siteHeader = document.querySelector(".site-header");
    let revertElements = document.querySelectorAll(".reverted");
    let cordsEl_1 = revertElements[0].getBoundingClientRect();
    let cordsEl_2 = revertElements[1].getBoundingClientRect();
    let cordsEl_3 = revertElements[2].getBoundingClientRect();
    if (cordsEl_1.top < 0 && cordsEl_1.bottom > 0) {
      addClassOnScroll(siteHeader);
    } else if (cordsEl_2.top < 0 && cordsEl_2.bottom > 0) {
      addClassOnScroll(siteHeader);
    } else if (cordsEl_3.top < 0 && cordsEl_3.bottom > 0) {
      addClassOnScroll(siteHeader);
    } else {
      removeClassOnScroll(siteHeader);
    }
  });
  // Je rend le scroll des liens smooth
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  return (
    <div className="App">
      <header className="site-header">
        <img src={logoAlt} alt="logo alternative" id="logoAlt" />
        <nav>
          <a href="#home">Accueil</a>
          <a href="#project">Projet</a>
          <a href="#books">Tomes</a>
          <a target="_blank" href="https://linktr.ee/Koffi_Cup">
            Réseaux sociaux
          </a>{" "}
          {/* <a href="#">Personnages</a>
          <a href="#">Univers</a> */}
          <LinkButton text="ACHETER ALTERNATIVE" link="#" />
        </nav>
      </header>
      <Home />
      <a id="project"></a>
      <Paragraph
        text="Alternative est un projet de bande dessiné reprenant dans un univers
            post-apocalyptique unique en son genre. Le projet est entièrement
            écrit et dessiné par Allan COTE depuis début 2021 et est disponible
            gratuitement en lecture en ligne, ou disponible en version physique
            sur TheBookEdition !"
        componentId="resume"
        imgSide="right"
        img={clementine}
        id="project"
      />
      <div className="illustration MP-LeHavre">
        <div className="filter"></div>
      </div>
      <Paragraph
        text="Après être sortie d'un cocon fait de lianes et de vignes, Clémentine découvre que le monde qu'elle connaissait n'est plus qu'un vieux souvenir. Seule dans une immense ville, elle devra affronter les nombreux dangers de ce nouveau monde."
        componentId="synopsis"
        imgSide="left"
        img={laura}
      />
      <div id="books" className="illustration MP-University">
        <div className="filter"></div>
        <h2>LES TOMES</h2>
      </div>
      <Carousel />
      {/* <Universe /> */}
      <footer className="site-footer ">
        <p>
          {" "}
          Alternative fait partie de l'ensemble{" "}
          <a href="http://kofficup.fr/portfolio/" target="_blank">
            Koffi Cup
          </a>
          , une marque rassemblant les projets d'Allan COTE, le projet est sous
          licence Creative Commons :{" "}
          <a
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
            target="_blank"
          >
            CC BY-NC-SA 4.0
          </a>
        </p>

        <a href="http://kofficup.fr/portfolio/" target="_blank">
          <Koffi />
        </a>
      </footer>
    </div>
  );
}

export default App;
