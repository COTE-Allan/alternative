import "../assets/scss/project.scss";

function Paragraph(props) {
  // Déclencher l'affichage quand la section entre dans le viewport
  function isInViewport(element) {
    // Get the bounding client rectangle position in the viewport
    var bounding = element.getBoundingClientRect();

    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return true;
    } else {
      return false;
    }
  }
  // Vérifier à chaque scroll
  window.addEventListener(
    "scroll",
    function (e) {
      let sectionToWatch = document.querySelector("." + props.componentId);

      if (isInViewport(sectionToWatch)) {
        let target = document.querySelector(
          "." + props.componentId + " .project-illustration"
        );
        target.classList.add("active");
      }
    },
    false
  );
  // Version mobile
  window.addEventListener(
    "touchmove",
    function (e) {
      let sectionToWatch = document.querySelector("." + props.componentId);

      if (isInViewport(sectionToWatch)) {
        let target = document.querySelector(".project-illustration");
        target.classList.add("active");
      }
    },
    false
  );
  return (
    <section
      className={"project reverted " + props.componentId + " " + props.imgSide}
    >
      <div className="project-content">
        <div className="project-text">
          <p>{props.text}</p>
          <hr />
        </div>
        <div className="project-illustration">
          {" "}
          <img src={props.img} alt="illustration paragraphe" />
        </div>
      </div>
    </section>
  );
}

export default Paragraph;
