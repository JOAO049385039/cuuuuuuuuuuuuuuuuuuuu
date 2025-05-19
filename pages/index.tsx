import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-marsala mb-4">Bem-vindo ao Divino Encanto</h1>
      <p className="mb-4 text-dourado-rose">Descubra os melhores cosméticos e fragrâncias da Europa.</p>
      <Link href="/produtos" className="bg-marsala text-white px-4 py-2 rounded">Ver Produtos</Link>
    </div>
  )
}