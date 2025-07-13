import data from "../data/ships.json";

export function getShipById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const shipment = data.find((s) => s.id === Number(id));
      resolve(shipment || null);
    }, 500);
  });
}
export function getShips() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
