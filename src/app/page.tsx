import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-56 h-32">
            <Image
              src="/logo_am_invertida.png"
              alt="Assis & Mollerke"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-white/70">
            Painel de Desempenho • Funcionários
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur p-6">
          <h1 className="text-xl font-semibold">Entrar</h1>
          <p className="text-sm text-white/70 mt-1">
            Acesse com seu e-mail e senha.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-white/80 mb-2">E-mail</label>
              <input
                type="email"
                placeholder="seuemail@empresa.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <div>
              <label className="block text-sm text-white/80 mb-2">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-white text-[#0B1220] font-medium py-3 hover:bg-white/90 transition"
            >
              Entrar
            </button>

            <p className="text-xs text-white/50 text-center mt-3">
              * Recuperação de senha e criação de usuários somente pelo administrador.
            </p>
          </form>
        </div>

        <p className="text-center text-xs text-white/40 mt-6">
          © {new Date().getFullYear()} Assis & Mollerke
        </p>
      </div>
    </main>
  );
}
