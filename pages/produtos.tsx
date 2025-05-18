import Head from 'next/head'
import Link from 'next/link'

export default function Produtos() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Produtos - Divino Encanto</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Produtos</h1>
        <p>Em breve você verá aqui todos os nossos perfumes, cosméticos, suplementos e eletrônicos!</p>
        <Link href="/" className="mt-4 inline-block text-indigo-500 hover:underline">← Voltar</Link>
      </main>
    </div>
  )
}
