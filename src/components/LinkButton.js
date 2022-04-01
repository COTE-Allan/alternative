function LinkButton(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className={props.dark ? "button button-dark" : "button"}
    >
      {props.text}
    </a>
  );
}

export default LinkButton;
