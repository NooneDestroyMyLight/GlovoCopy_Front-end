export function getActualPrice(price: number, discountPrice?: number): number {
  return discountPrice ? discountPrice : price;
}
