import Image from 'next/image'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('http://api.github.com/users/burn-c')
  const user = await response.json()

  return (
    <>
      <h1>Home Page</h1>
      <button>Atualizar Home</button>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
