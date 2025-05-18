
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-marsala mb-4">Bem-vindo à Divino Encanto</h1>
      <p className="text-douradoRose">Explore nossos produtos encantadores!</p>
      <Link href="/produtos" className="mt-4 text-douradoRose underline hover:text-marsala">
        Ver Produtos
      </Link>
    </div>
  )
}
