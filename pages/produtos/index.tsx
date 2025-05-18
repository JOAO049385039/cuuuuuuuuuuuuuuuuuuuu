import Head from 'next/head'
import Link from 'next/link'

const produtos = [
  {
    id: '1',
    nome: 'Dior Sauvage Eau de Toilette',
    preco: 89.90,
    imagem: '/sauvage.jpg'
  },
  {
    id: '2',
    nome: 'Creme Facial Nivea Soft',
    preco: 5.49,
    imagem: '/nivea.jpg'
  },
  {
    id: '3',
    nome: 'Whey Protein Max Titanium 900g',
    preco: 29.99,
    imagem: '/whey.jpg'
  },
  {
    id: '4',
    nome: 'Fones Bluetooth JBL Tune 510BT',
    preco: 49.99,
    imagem: '/jbl.jpg'
  }
]

export default function Produtos() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Produtos - Divino Encanto</title>
      </Head>
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Todos os Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.map(prod => (
            <Link href={`/produtos/${prod.id}`} key={prod.id} className="border p-4 rounded shadow-sm hover:shadow-lg transition">
              <img src={prod.imagem} alt={prod.nome} className="w-full h-40 object-cover mb-2 rounded" />
              <h2 className="font-semibold">{prod.nome}</h2>
              <p className="text-indigo-600 font-bold mt-1">€ {prod.preco.toFixed(2)}</p>
            </Link>
          ))}
        </div>
        <Link href="/" className="inline-block mt-6 text-indigo-500 hover:underline text-sm">← Voltar para Home</Link>
      </main>
    </div>
  )
}
