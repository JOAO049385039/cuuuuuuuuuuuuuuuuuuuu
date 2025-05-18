
export default function LoginPage() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-dourado">Login de Administrador</h1>
      <form className="mt-4 space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Senha" className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-marsala text-white p-2 rounded hover:opacity-90">Entrar</button>
      </form>
    </div>
  );
}
