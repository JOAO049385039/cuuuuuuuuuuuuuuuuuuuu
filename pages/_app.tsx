import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CarrinhoProvider } from "@/context/CarrinhoContext";
import Link from 'next/link'
import { useCarrinho } from "@/context/CarrinhoContext";

function CarrinhoNav() {
  const { itens } = useCarrinho();
  const quantidade = itens.length;

  return (
    <Link href="/checkout" className="text-sm text-pink-600 hover:underline ml-6">
      🛒 Carrinho ({quantidade})
    </Link>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarrinhoProvider>
      <div className="min-h-screen bg-pink-50">
        <header className="p-4 shadow-md flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-rose-600">
            <Link href="/">Divino Encanto</Link>
          </h1>
          <nav className="flex items-center space-x-4">
            <Link href="/produtos" className="text-sm text-pink-600 hover:underline">Produtos</Link>
            <Link href="/contato" className="text-sm text-pink-600 hover:underline">Contato</Link>
            <Link href="/login" className="text-sm text-pink-600 hover:underline">Login</Link>
            <CarrinhoNav />
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-4">
          <Component {...pageProps} />
        </main>
      </div>
    </CarrinhoProvider>
  )
}

export default MyApp