export function numberToFormatPrice(
  price: number,
  minimumFractionDigits: number
) {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits,
    style: 'currency',
    currency: 'BRL'
  })
}
