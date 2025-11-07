// import { useEffect } from "react";
// import "./App.css";
// import { CustomForm } from "./_components/forms/customForm";
// import { usePhrases } from "./_lib/hooks/usePhrases";
// import { Spinner } from "./_components/spinner/spinner";
// import { CardItem } from "./_components/card/card";
// import { inputs } from "./constants";

// function App() {
//   const { phrases, getPhrases, addPhrase, deletePhrase, loading } =
//     usePhrases();

//   const handleSubmit = (data: any) => {
//     addPhrase(data);
//   };

//   useEffect(() => {
//     getPhrases();
//   }, [getPhrases]);

//   const formInputs = inputs;

//   return (
//     <div className="container">
//       <CustomForm filters={formInputs} onSubmit={handleSubmit}></CustomForm>

//       <div className="cards-container">
//         {loading && (
//           <div className="overlay">
//             <Spinner />
//           </div>
//         )}

//         <div className="cards-grid">
//           {phrases.map((phrase) => (
//             <CardItem
//               key={phrase.id}
//               id={phrase.id}
//               text={phrase.phrase}
//               author={phrase.author}
//               onDelete={() => deletePhrase(phrase.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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

const AppContent = () => {
  const { filteredPhrases, addPhrase, deletePhrase, loading } =
    usePhrasesContext();

  const handleSubmit = (data: any) => {
    addPhrase(data);
  };

  return (
    <div className="container">
      <CustomForm inputs={inputs} onSubmit={handleSubmit} />

      <div className="cards-container">
        <div>
          <SearchInput />
        </div>
        {loading && (
          <div className="overlay">
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
            {filteredPhrases.map((phrase: any) => (
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
