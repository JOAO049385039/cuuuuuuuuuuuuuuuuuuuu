import Head from 'next/head'
import Link from 'next/link'
import { useCarrinho } from '@/context/CarrinhoContext'

export default function Checkout() {
  const { itens, limpar } = useCarrinho()

  const total = itens.reduce((acc, item) => acc + item.preco, 0)
  const iva = total * 0.23
  const totalComIva = total + iva

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <Head>
        <title>Checkout - Divino Encanto</title>
      </Head>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Finalizar Pedido</h1>
        {itens.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <div className="space-y-4">
            {itens.map((item, i) => (
              <div key={i} className="border p-3 rounded flex justify-between">
                <span>{item.nome}</span>
                <span>€ {item.preco.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <p>Subtotal: € {total.toFixed(2)}</p>
              <p>IVA (23%): € {iva.toFixed(2)}</p>
              <p className="font-bold">Total: € {totalComIva.toFixed(2)}</p>
            </div>
            <button onClick={limpar} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Confirmar Pedido
            </button>
          </div>
        )}
        <Link href="/" className="inline-block mt-6 text-indigo-500 hover:underline text-sm">← Voltar para a loja</Link>
      </main>
    </div>
  )
}
