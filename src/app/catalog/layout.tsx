import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catálogo',
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h2>Catálogo</h2>
      {children}
    </>
  )
}
