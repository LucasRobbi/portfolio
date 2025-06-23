import usePolitica from "../../hooks/politica";

import info from "../../info";

export default function Politica() {
  const { data, isLoading } = usePolitica({ id: info.id_politica });

  return (
    <section>
      <div className="container">
        <div className="py-10">
          {!isLoading && (
            <div dangerouslySetInnerHTML={{ __html: data.descricao }}></div>
          )}
        </div>
      </div>
    </section>
  );
}
