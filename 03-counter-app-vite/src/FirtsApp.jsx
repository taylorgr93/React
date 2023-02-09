import PropTypes from "prop-types";

const newMessage = {
  message: "Hola",
  title: "Taylor",
};

export const FirtsApp = ({ title, subtitle, name }) => {
  // if (!title) {
  //   throw new Error("El title no existe");
  // }

  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirtsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirtsApp.defaultProps = {
  name: "Taylor",
  subtitle: "No hay subtitulo",
  // title: "No hay titulo",
};
