export const formatCurrency = (val) => {
  let PesoFormatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return PesoFormatter.format(val);
};

