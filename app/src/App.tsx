import { useEffect } from "react";
import "./App.css";
import { CustomForm } from "./_components/forms/customForm";
import { usePhrases } from "./_lib/hooks/usePhrases";
import { Spinner } from "./_components/spinner/spinner";
import { CardItem } from "./_components/card/card";
import { inputs } from "./constants";

function App() {
  const { phrases, getPhrases, addPhrase, deletePhrase, loading } =
    usePhrases();

  const handleSubmit = (data: any) => {
    addPhrase(data);
  };

  useEffect(() => {
    getPhrases();
  }, [getPhrases]);

  const formInputs = inputs;

  return (
    <div className="container">
      <CustomForm filters={formInputs} onSubmit={handleSubmit}></CustomForm>

      <div className="cards-container">
        {loading && (
          <div className="overlay">
            <Spinner />
          </div>
        )}

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
      </div>
    </div>
  );
}

export default App;
