// getHours.js

export const getHours = (str) => {
  const elapsedTime = Math.abs(new Date(str) - new Date()) / 36e5;
  let hours;

  if (elapsedTime < 1) {
    hours = Math.floor(elapsedTime * 60);
  } else {
    hours = Math.floor(elapsedTime);
  }

  if (hours === 0) {
    return "Hace menos de 1 minuto";
  } else if (hours === 1) {
    return "Hace 1 minuto";
  } else if (hours < 24) {
    return `Hace ${hours} minutos`;
  } else if (hours < 48) {
    return "Hace 1 día";
  } else {
    return `Hace ${Math.floor(hours / 24)} días`;
  }
};
