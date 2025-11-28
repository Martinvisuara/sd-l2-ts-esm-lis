import productsList from "./products.json" with { type: "json" };

export function getProductsSortedByPrice() {
  return productsList
    .slice() // copiamos para no mutar el original
    .sort((a, b) => Number(a.price) - Number(b.price));
}

// Se exporta el listado sin ordenar:
export { productsList };