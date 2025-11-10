import { CustomForm } from "./_components/forms/customForm";
import { CardItem } from "./_components/card/card";
import { Spinner } from "./_components/spinner/spinner";
import { inputs } from "./constants";
import "./App.css";
import {
  PhrasesProvider,
  usePhrasesContext,
} from "./_lib/contexts/phrasesContext";
import { SearchInput } from "./_components/search/searchInput";
import { CardGrid } from "./_components/cardGrid/cardGrid";

const AppContent = () => {
  const { filteredPhrases, addPhrase, deletePhrase, loading } =
    usePhrasesContext();

  const handleSubmit = (data: any) => {
    addPhrase(data);
  };
  const formInputs = inputs;
  return (
    <div className="container">
      <div className="form-container">
        <CustomForm inputs={formInputs} onSubmit={handleSubmit} />
      </div>

      <div className="cards-container">
        <div className="search-box">
          <SearchInput />
        </div>
        {loading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}

        {!loading && filteredPhrases?.length === 0 && (
          <div className="no-results">
            <p>No hay frases disponibles o no se encontraron resultados...</p>
          </div>
        )}
        {!loading && filteredPhrases?.length > 0 && (
          <div className="cards-grid">
            <CardGrid
              items={filteredPhrases.map((phrase: any) => ({
                id: phrase.id,
                text: phrase.phrase,
                author: phrase.author,
              }))}
              onDelete={deletePhrase}
            />
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <PhrasesProvider>
      <AppContent />
    </PhrasesProvider>
  );
}

export default App;
