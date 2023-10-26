export async function Test() {
  await new Promise((resolve) => setInterval(resolve, 5000))

  return (
    <p>
      Server component dentro de um <i>use client.</i>
    </p>
  )
}
