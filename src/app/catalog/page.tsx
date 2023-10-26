export default async function Catalog() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
      <p>Product 01</p>
      <p>Product 02</p>
      <p>Product 03</p>
      <p>Product 04</p>
    </div>
  )
}
