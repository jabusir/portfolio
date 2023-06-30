export default function getClientLocalTime() {
  const clientDate = new Date();
  const options = { hour: "numeric", minute: "numeric" };
  return clientDate.toLocaleTimeString([], options);
}
