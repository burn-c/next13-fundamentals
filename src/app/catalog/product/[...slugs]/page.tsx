import { AddToCartButton } from './AddToCardButton'
import { Test } from './Test'

interface ProductProps {
  params: {
    slugs: Array<string>
  }
}

// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado ao navegador (cliente)

// Streaming SSR => Ler/escrever dados de forma parcial + Server-side Rendering

// Renderizar um componente pelo lado do servidor de forma PARCIAL
// Client boundaries => caso o componente este encadeado em um componente usando "use client" todos componentes filhos também seram, só é possivel usar um server components se ele for passado como children para o componente pai.

export default function Product(props: ProductProps) {
  const [productName, color, size] = props?.params?.slugs
  return (
    <>
      <p>Produto: {productName}</p>
      <p>Cor: {color}</p>
      <p>Tamanho: {size}</p>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </>
  )
}
