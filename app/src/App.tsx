import { useEffect } from "react";
import "./App.css";
import { CustomForm } from "./_components/forms/customForm";
import { usePhrases } from "./_lib/hooks/usePhrases";
import { Spinner } from "./_components/spinner/spinner";
import { CardItem } from "./_components/card/card";

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
    <div className="container">
      <CustomForm filters={filters} onSubmit={handleSubmit}></CustomForm>
      {loading ? (
        <Spinner />
      ) : (
        <div className="cards-grid">
          {phrases.map((phrase) => (
            <CardItem
              key={phrase.id}
              id={phrase.id}
              text={phrase.phrase}
              author={phrase.author}
              onDelete={() => deletePhrase(phrase.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
