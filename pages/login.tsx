import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center">
      <Head>
        <title>Login - Divino Encanto</title>
      </Head>
      <main className="w-full max-w-sm p-6">
        <h1 className="text-xl font-semibold mb-6 text-center">Entrar na Conta</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
          <input type="password" placeholder="Senha" className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Entrar</button>
        </form>
        <Link href="/" className="mt-6 inline-block text-indigo-500 hover:underline text-sm text-center">← Voltar para a loja</Link>
      </main>
    </div>
  )
}
