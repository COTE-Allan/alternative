import "../assets/scss/homepage.scss";
import bookAlt from "../assets/img/book_alt.png";
import movieAlt from "../assets/video/movie_alt.mp4";
import LinkButton from "../components/LinkButton";

function Home() {
  return (
    <section className="home" id="home">
      <video poster="poster.jpg" autoPlay playsInline muted loop>
        <source src={movieAlt} type="video/mp4" />
      </video>
      <div className="filter"></div>
      <div className="home-update">
        <h1 className="home-title">
          Le premier tome <br />
          est disponible !
        </h1>
        <LinkButton text="ACHETER ALTERNATIVE" link="#" />
        <span className="home-read">
          Vous pouvez aussi{" "}
          <a
            target="_blank"
            href="https://www.mangadraft.com/manga/alternative"
          >
            lire Alternative gratuitement en ligne
          </a>{" "}
          !
        </span>
      </div>
      <div className="home-picture">
        <img className="home-book" src={bookAlt} />
      </div>
    </section>
  );
}

export default Home;
