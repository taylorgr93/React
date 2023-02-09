// This function calculates the elapsed time in hours by subtracting the current date
// from the date specified in the `str` parameter and dividing the result by the number
// of milliseconds in an hour.
export const getElapsedTimeInHours = (str) => {
  return Math.abs(new Date(str) - new Date()) / 36e5;
};

// This function calculates the elapsed time in minutes by calling `getElapsedTimeInHours`
// and multiplying the result by 60.
export const getElapsedTimeInMinutes = (str) => {
  return getElapsedTimeInHours(str) * 60;
};

// This function calculates the elapsed time in hours by calling `getHours`,
// and then uses a series of conditional statements to format the elapsed time as a string.
export const getFormattedTimeString = (str) => {
  const hours = getHours(str);

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

// This function calculates the elapsed time in hours by calling `getElapsedTimeInMinutes`
// and then using a series of conditional statements to determine the appropriate unit of time
// to use (minutes or hours).
export const getHours = (str) => {
  const elapsedTimeInMinutes = getElapsedTimeInMinutes(str);
  let hours;

  if (elapsedTimeInMinutes < 1) {
    hours = Math.floor(elapsedTimeInMinutes);
  } else {
    hours = Math.floor(getElapsedTimeInHours(str));
  }

  return hours;
};
