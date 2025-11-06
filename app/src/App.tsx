import { useEffect } from "react";
import "./App.css";
import { CustomForm } from "./_components/forms/customForm";
import { usePhrases } from "./_lib/hooks/usePhrases";

function App() {
  const { phrases, getPhrases, addPhrase, deletePhrase, loading } =
    usePhrases();
    
  const handleSubmit = (data: any) => {
    addPhrase(data);
  };

  useEffect(() => {
    getPhrases();
  }, [getPhrases]);

  const filters: any = [
    {
      label: "frase",
      name: "phrase",
      placeholder: "Escribi una frase",
      type: "text",
    },
    {
      label: "autor",
      name: "author",
      placeholder: "Escribi el author",
      type: "text",
    },
  ];

  return (
    <>
      <CustomForm filters={filters} onSubmit={handleSubmit}></CustomForm>
      {loading && <p>Cargando...</p>}

      <div>
        <ul>
          {phrases.map((phrase) => (
            <li key={phrase.id}>
              "{phrase.phrase}" - {phrase.author}
              <button onClick={() => deletePhrase(phrase.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
