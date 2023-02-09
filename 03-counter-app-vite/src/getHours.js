// getHours.js

export const getHours = (str) => {
  var hours = Math.abs(new Date(str) - new Date()) / 36e5;
  // console.log(hours);

  if (hours < 1) {
    var minutes = Math.floor(hours * 60);
    if (minutes < 1) hours = "Hace menos de 1 minuto";
    if (minutes == 1) hours = "Hace 1 minuto";
    if (minutes > 1 && minutes < 60)
      hours = "Hace " + Math.floor(hours * 60) + " minutos";
  }
  if (Math.floor(hours) == 1) hours = "Hace " + Math.floor(hours) + " hora";
  if (Math.floor(hours) > 1 && Math.floor(hours) < 24)
    hours = "Hace " + Math.floor(hours) + " horas";
  if (Math.floor(hours) >= 24 && Math.floor(hours) < 48) hours = "1 dia";
  if (Math.floor(hours) >= 48 && Math.floor(hours) < 168)
    hours = Math.floor(hours / 24) + " dias";

  return hours;
};
