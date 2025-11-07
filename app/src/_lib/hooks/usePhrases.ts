import { useCallback, useState } from "react";
import { phrasesService } from "../services/phrasesService";
import type { AxiosError } from "axios";
import { alertsActions } from "../store/alerts/alert";
import { useDispatch } from "react-redux";

interface AxiosErrorResponse {
  message?: string;
}
export const usePhrases = () => {
  const [phrases, setPhrases] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const dispatch = useDispatch();

  const getPhrases = useCallback(async () => {
    setLoading(true);
    try {
      const data = await phrasesService.getPhrases();
      setPhrases(data);
    } catch (error: any) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      setError(axiosError);
      dispatch(
        alertsActions.setAlertMessage({
          status: "error",
          message:
            axiosError?.response?.data?.message ||
            "Error al obtener frases, intente más tarde",
        })
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const addPhrase = useCallback(
    async (formData: any) => {
      setLoading(true);
      try {
        await phrasesService.addPhrase(formData);
        dispatch(
          alertsActions.setAlertMessage({
            status: "success",
            message: "La frase se creó con éxito",
          })
        );
        await getPhrases();
      } catch (error: any) {
        const axiosError = error as AxiosError<AxiosErrorResponse>;
        setError(axiosError);
        dispatch(
          alertsActions.setAlertMessage({
            status: "error",
            message:
              axiosError?.response?.data?.message ||
              "Error al crear la frase, intente más tarde",
          })
        );
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
        const axiosError = error as AxiosError<AxiosErrorResponse>;
        setError(axiosError);
        dispatch(
          alertsActions.setAlertMessage({
            status: "error",
            message:
              axiosError?.response?.data?.message ||
              "Error al eliminar la frase, intente más tarde",
          })
        );
      } finally {
        setLoading(false);
      }
    },
    [getPhrases]
  );

  return { phrases, loading, error, getPhrases, addPhrase, deletePhrase };
};
