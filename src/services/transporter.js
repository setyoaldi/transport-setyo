import data from "../data/transporter.json";

export function assignTransporter(shipmentId, transporterId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      resolve(success);
    }, 500);
  });
}
export function getTransporters() {
  return new Promise((resolve) => setTimeout(() => resolve(data), 500));
}
