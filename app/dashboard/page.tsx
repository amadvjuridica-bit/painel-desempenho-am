"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) return null;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white flex items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Bem-vindo ao Dashboard 🚀
      </h1>
    </main>
  );
}
