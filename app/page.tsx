"use client";

import Image from "next/image";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleLogin() {
    setErro("");

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/dashboard");
    } catch (err: any) {
      setErro("E-mail ou senha inválidos");
    }
  }

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

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div>
              <label className="block text-sm mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3"
              />
            </div>

            {erro && (
              <p className="text-red-400 text-sm text-center">{erro}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-white text-[#0B1220] font-medium py-3"
            >
              Entrar
            </button>

            <p className="text-xs text-white/50 text-center">
              Criação e recuperação de senha somente pelo administrador.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
