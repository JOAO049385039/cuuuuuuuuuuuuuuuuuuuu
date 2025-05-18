
import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-center p-10">
      <h1 className="text-3xl font-bold text-rose-600">Bem-vindo à Divino Encanto</h1>
      <p className="mt-4 text-marsala">Explore nossos produtos encantadores!</p>
      <Link href="/produtos" className="text-pink-500 underline mt-6 block">Ver Produtos</Link>
    </main>
  )
}
