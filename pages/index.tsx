import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center">
      <h1 className="text-3xl font-bold text-rose-600">Bem-vindo à Divino Encanto</h1>
      <p className="text-lg mt-2 text-gray-700">Explore nossos produtos encantadores!</p>
      <Link href="/produtos" className="mt-4 text-pink-600 hover:underline">
        Ver Produtos
      </Link>
    </div>
  );
}