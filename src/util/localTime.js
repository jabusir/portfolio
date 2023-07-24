export default function getClientLocalTime() {
  const clientDate = new Date();
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  let timeString = clientDate.toLocaleTimeString("en-US", options);

  // Removing the AM/PM from the time string
  timeString = timeString.replace(/\s?[APap][mM]$/, "");

  return timeString;
}
