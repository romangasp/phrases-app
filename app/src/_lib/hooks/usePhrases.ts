import { useCallback, useState } from "react";
import { phrasesService } from "../services/phrasesService";

export const usePhrases = () => {
  const [phrases, setPhrases] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPhrases = useCallback(async () => {
    setLoading(true);
    try {
      const data = await phrasesService.getPhrases();
      setPhrases(data);
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addPhrase = useCallback(
    async (formData: any) => {
      setLoading(true);
      try {
        await phrasesService.addPhrase(formData);
        await getPhrases();
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    },
    [getPhrases]
  );

  const deletePhrase = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        await phrasesService.deletePhrase(id);
        await getPhrases();
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    },
    [getPhrases]
  );

  return { phrases, loading, error, getPhrases, addPhrase, deletePhrase };
};
