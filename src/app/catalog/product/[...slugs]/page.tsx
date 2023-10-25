interface ProductProps {
  params: {
    slugs: Array<string>
  }
}

export default function Product(props: ProductProps) {
  const [productName, color, size] = props?.params?.slugs
  return (
    <>
      <p>Produto: {productName}</p>
      <p>Cor: {color}</p>
      <p>Tamanho: {size}</p>
    </>
  )
}
