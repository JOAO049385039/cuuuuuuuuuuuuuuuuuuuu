
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProdutoDetalhe = () => {
  const router = useRouter();
  const { id } = router.query;

  const produto = {
    id: id ?? "produto-sem-id",
    nome: "Dior Sauvage Eau de Toilette",
    descricao: "...",
    preco: 89.90,
    imagem: "/images/sauvage.jpg"
  };

  const precoComIVA = produto.preco * 1.23;

  return (
    <div className="p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
        <span className="text-xs">{produto.nome}</span>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">{produto.nome}</h1>
        <p className="mb-4 text-sm text-gray-600">{produto.descricao}</p>
        <p className="text-xl font-semibold text-indigo-600 mb-4">
          € {precoComIVA.toFixed(2)}{" "}
          <span className="text-sm text-gray-500">(IVA incluído)</span>
        </p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          Adicionar ao Carrinho
        </button>
        <div className="mt-4">
          <Link href="/produtos" className="text-indigo-500 hover:underline text-sm">
            ← Voltar para Produtos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhe;
