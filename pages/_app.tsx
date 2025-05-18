
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CarrinhoProvider } from '@/context/CarrinhoContext'
import Link from 'next/link'
import { useCarrinho } from '@/context/CarrinhoContext'

function CarrinhoNav() {
  const { carrinho } = useCarrinho()
  const quantidade = carrinho.length

  return (
    <Link href="/checkout" className="text-sm text-douradoRose hover:underline ml-6">
      🛒 Carrinho ({quantidade})
    </Link>
  )
}

function Layout({ Component, pageProps }: AppProps) {
  return (
    <CarrinhoProvider>
      <div>
        <header className="p-4 shadow-md flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-marsala">
            <Link href="/">Divino Encanto</Link>
          </h1>
          <nav className="flex items-center space-x-4">
            <Link href="/produtos" className="text-sm text-douradoRose hover:underline">Produtos</Link>
            <Link href="/contato" className="text-sm text-douradoRose hover:underline">Contato</Link>
            <Link href="/login" className="text-sm text-douradoRose hover:underline">Login</Link>
            <CarrinhoNav />
          </nav>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </CarrinhoProvider>
  )
}

export default Layout
