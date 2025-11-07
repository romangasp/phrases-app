import { createContext, useContext, useEffect, useState } from "react";
import { usePhrases } from "../hooks/usePhrases";


const PhrasesContext = createContext<any>(null);

export const PhrasesProvider = ({ children }: { children: React.ReactNode }) => {
  const { phrases, getPhrases, addPhrase, deletePhrase, loading } = usePhrases();
  const [filteredPhrases, setFilteredPhrases] = useState<any[]>([]);

  useEffect(() => {
    getPhrases();
  }, [getPhrases]);

  useEffect(() => {
    setFilteredPhrases(phrases);
  }, [phrases]);

  const handleSearch = (query: string) => {
    if (query.length < 3) {
      setFilteredPhrases(phrases);
      return;
    }

    const normalized = query.toLowerCase();
    const filtered = phrases.filter(
      (p) =>
        p.phrase.toLowerCase().includes(normalized) ||
        p.author.toLowerCase().includes(normalized)
    );
    setFilteredPhrases(filtered);
  };

  return (
    <PhrasesContext.Provider
      value={{
        phrases,
        filteredPhrases,
        loading,
        addPhrase,
        deletePhrase,
        handleSearch,
      }}
    >
      {children}
    </PhrasesContext.Provider>
  );
};

export const usePhrasesContext = () => useContext(PhrasesContext);