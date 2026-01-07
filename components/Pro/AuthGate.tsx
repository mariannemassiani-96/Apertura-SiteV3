"use client";

import { useEffect, useState } from "react";

const TOKEN_KEY = "apertura-pro-token";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const token = window.localStorage.getItem(TOKEN_KEY);
    setAuthenticated(Boolean(token));
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    window.localStorage.setItem(TOKEN_KEY, "demo-token");
    setAuthenticated(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem(TOKEN_KEY);
    setAuthenticated(false);
  };

  if (authenticated) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-ink/70">
            Vous êtes connecté à un environnement de démonstration.
          </p>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/70"
          >
            Déconnexion
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleLogin}
      className="mx-auto flex w-full max-w-lg flex-col gap-4 rounded-3xl border border-ink/10 bg-white/70 p-8"
    >
      <div>
        <h3 className="text-lg font-light text-ink">Accès pro</h3>
        <p className="mt-2 text-sm text-ink/60">
          Utilisez n&apos;importe quel email/mot de passe pour accéder à la démo.
        </p>
      </div>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-ink/60">
        Email
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink outline-none"
          placeholder="pro@apertura.corsica"
        />
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-ink/60">
        Mot de passe
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          className="rounded-full border border-ink/20 px-4 py-2 text-sm text-ink outline-none"
          placeholder="••••••••"
        />
      </label>
      <button
        type="submit"
        className="rounded-full border border-ink bg-ink px-4 py-2 text-xs uppercase tracking-[0.2em] text-sand"
      >
        Entrer
      </button>
    </form>
  );
}
