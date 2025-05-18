import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function Produto() {
  const { query } = useRouter()

  // Produto fictício
  const produto = {
    id: query.id,
    nome: 'Dior Sauvage Eau de Toilette',
    descricao: 'Fragrância amadeirada e fresca com notas de bergamota e ambroxan. Ideal para homens modernos.',
    preco: 89.90,
    imagem: '/sauvage.jpg'
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>{produto.nome} - Divino Encanto</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img src={produto.imagem} alt={produto.nome} className="w-full md:w-1/3 object-cover rounded shadow" />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
            <p className="mb-4 text-sm text-gray-600">{produto.descricao}</p>
            <p className="text-xl font-semibold text-indigo-600 mb-4">€ {produto.preco.toFixed(2)}</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Adicionar ao Carrinho</button>
            <div className="mt-4">
              <Link href="/produtos" className="text-indigo-500 hover:underline text-sm">← Voltar para Produtos</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
