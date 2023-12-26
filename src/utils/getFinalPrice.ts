export function getFinalPrice(
  price: number,
  count: number,
  discountPrice?: number,
  addition?: number
): number {
  if (addition)
    return discountPrice
      ? ((discountPrice as number) + addition) * count
      : (price + addition) * count;
  return discountPrice ? (discountPrice as number) * count : price * count;
}
