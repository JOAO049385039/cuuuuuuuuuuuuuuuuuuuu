
import { useCarrinho } from '@/context/CarrinhoContext'

export default function Checkout() {
  const { itens, limpar } = useCarrinho()

  const total = itens.reduce((acc, item) => acc + item.preco, 0)
  const iva = total * 0.23

  return (
    <div className="p-10">
      <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
      <ul>
        {itens.map((item, i) => (
          <li key={i}>{item.nome} - €{item.preco.toFixed(2)}</li>
        ))}
      </ul>
      <p className="mt-4">Total: €{total.toFixed(2)}</p>
      <p>IVA (23%): €{iva.toFixed(2)}</p>
      <p>Total com IVA: €{(total + iva).toFixed(2)}</p>
      <button onClick={limpar} className="mt-4 bg-rose-500 text-white px-4 py-2 rounded">Finalizar</button>
    </div>
  )
}
