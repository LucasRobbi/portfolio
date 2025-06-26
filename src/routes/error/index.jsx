import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section className="min-h-screen bg-[#00000055]">
        <div className="container">
          <div className="text-white flex flex-col flex-wrap items-center justify-center gap-5">
            <h1>404 - Página não encontrada</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/" className="underline">Voltar para a página inicial</Link>
          </div>
        </div>
      </section>
    </>
  );
}
