
import { useCarrinho } from '@/context/CarrinhoContext'

const produtos = [
  { id: '1', nome: 'Perfume Elegante', preco: 29.90, imagem: '', descricao: 'Fragrância marcante e sofisticada' },
  { id: '2', nome: 'Creme Hidratante', preco: 14.50, imagem: '', descricao: 'Pele macia e nutrida' }
]

export default function Produtos() {
  const { adicionar } = useCarrinho()

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-marsala">Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {produtos.map((produto) => (
          <div key={produto.id} className="border p-4 rounded-lg bg-white shadow-md">
            <h2 className="text-lg font-semibold text-douradoRose">{produto.nome}</h2>
            <p className="text-sm text-gray-600">{produto.descricao}</p>
            <p className="font-bold text-marsala mt-2">€ {(produto.preco * 1.23).toFixed(2)} (IVA incluído)</p>
            <button
              className="mt-2 px-4 py-1 bg-douradoRose text-white rounded hover:bg-marsala"
              onClick={() => adicionar(produto)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
