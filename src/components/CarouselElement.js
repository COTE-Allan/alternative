import LinkButton from "../components/LinkButton";

function CarouselElement(props) {
  return (
    <div
      className={props.active ? "carousel-element active" : "carousel-element"}
    >
      <div>
        <h3>{"Tome " + props.tomeNumber}</h3>
        <h4>{props.title}</h4>
        <p>{props.resume}</p>
        {props.available == true && (
          <LinkButton
            text={"ACHETER LE TOME " + props.tomeNumber}
            link={props.link}
            dark="true"
          />
        )}
      </div>

      <img src={props.img} alt={"livre" + props.title} />
    </div>
  );
}

export default CarouselElement;
