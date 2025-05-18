import Head from 'next/head'
import Link from 'next/link'

export default function Contato() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Contato - Divino Encanto</title>
      </Head>
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Fale Conosco</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Seu nome" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Seu email" className="w-full p-2 border rounded" required />
          <textarea placeholder="Sua mensagem" rows={4} className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Enviar</button>
        </form>
        <Link href="/" className="mt-6 inline-block text-indigo-500 hover:underline">← Voltar</Link>
      </main>
    </div>
  )
}
