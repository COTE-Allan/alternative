import "../assets/scss/carousel.scss";
import CarouselElement from "./CarouselElement";
import bookAlt from "../assets/img/book_alt.png";

function Carousel() {
  //   Permet de passer a la slide suivante
  function nextSlide() {
    let current = document.querySelector(".carousel-element.active");
    let next = current.nextSibling;
    if (next) {
      current.classList.add("outL");
      setTimeout(() => {
        current.classList.remove("active", "outL");
        next.classList.add("inR", "active");
        setTimeout(() => {
          next.classList.remove("inR");
        }, 450);
      }, 450);
    }
  }
  //   Permet de passer a la slide précedente
  function previousSlide() {
    let current = document.querySelector(".carousel-element.active");
    let next = current.previousSibling;
    if (next) {
      current.classList.add("outR");
      setTimeout(() => {
        current.classList.remove("active", "outR");
        next.classList.add("inL", "active");
        setTimeout(() => {
          next.classList.remove("inL");
        }, 450);
      }, 450);
    }
  }
  return (
    <section className="carousel reverted">
      <div className="carousel-buttonGroup">
        <box-icon
          name="left-arrow"
          type="solid"
          animation="flashing-hover"
          size="lg"
          class="carousel-button left"
          onClick={previousSlide}
        ></box-icon>
        <box-icon
          name="right-arrow"
          type="solid"
          animation="flashing-hover"
          size="lg"
          class="carousel-button right"
          onClick={nextSlide}
        ></box-icon>
      </div>
      <div className="carousel-elements">
        <CarouselElement
          tomeNumber="1"
          active
          available
          title="Le monde des plantes"
          resume="Après être sortie d'un cocon fait de lianes et de vignes, Clémentine
        découvre que le monde qu'elle connaissait n'est plus qu'un vieux
        souvenir. Seule dans une immense ville, elle devra affronter les
        nombreux dangers de ce nouveau monde."
          link="#"
          img={bookAlt}
        />
        <CarouselElement
          tomeNumber="2"
          title="Demon EX Machina"
          resume="???"
          link="#"
        />
        <CarouselElement
          tomeNumber="3"
          title="La Falaise"
          resume="???"
          link="#"
        />
        <CarouselElement
          tomeNumber="4"
          title="La princesse des fleurs"
          resume="???"
          link="#"
        />
        <CarouselElement
          tomeNumber="5"
          title="Alter Ego"
          resume="???"
          link="#"
        />
        <CarouselElement
          tomeNumber="6"
          title="La bataille de Logsalhall"
          resume="???"
          link="#"
        />
        <CarouselElement
          tomeNumber="7"
          title="Le destin du Voyageur"
          resume="???"
          link="#"
        />
      </div>
    </section>
  );
}

export default Carousel;
