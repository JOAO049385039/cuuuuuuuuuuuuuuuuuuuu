import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Divino Encanto</title>
        <meta name="description" content="Perfumes, cosméticos, suplementos e eletrônicos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">Divino Encanto</h1>
          <nav className="space-x-6">
            <Link href="/produtos" className="text-indigo-500 hover:underline">Produtos</Link>
            <Link href="/contato" className="text-indigo-500 hover:underline">Contato</Link>
            <Link href="/login" className="text-indigo-500 hover:underline">Login</Link>
          </nav>
        </div>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Bem-vindo à Divino Encanto</h2>
        <p className="mb-8">Sua loja de perfumes, cosméticos, suplementos e eletrônicos com qualidade e confiança.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-1">Perfumes</h3>
            <p>Fragrâncias incríveis das melhores marcas.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-1">Cosméticos</h3>
            <p>Beleza e cuidado com você.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-1">Suplementos</h3>
            <p>Saúde e bem-estar em primeiro lugar.</p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-1">Eletrônicos</h3>
            <p>Tecnologia com o melhor custo-benefício.</p>
          </div>
        </div>
      </main>

      <footer className="p-6 bg-gray-100 mt-10 text-center text-sm text-gray-600">
        <p>&copy; 2025 Divino Encanto Unipessoal Lda | NIF: 517772221 | geral@divinoencanta.com</p>
        <p>+351 931 307 266</p>
      </footer>
    </div>
  )
}
