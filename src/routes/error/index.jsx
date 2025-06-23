import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Error() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="h-[50vh] flex flex-col flex-wrap items-center justify-center">
            <h1>404 - Página não encontrada</h1>
            <p>A página que você está procurando não existe.</p>
            <Link to="/">Voltar para a página inicial</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
