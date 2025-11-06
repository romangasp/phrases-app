import { axiosBase } from "../routes/axiosConfig";
import { ENDPOINTS } from "../routes/endpoint";

export interface FormData {
  [key: string]: any;
}

export const phrasesService = {
  async addPhrase(data: FormData) {
    const response = await axiosBase.post(
      `${ENDPOINTS.ROOT}${ENDPOINTS.PHRASES.ROOT}`,
      data
    );
    return response.data;
  },

  async getPhrases() {
    const response = await axiosBase.get(
      `${ENDPOINTS.ROOT}${ENDPOINTS.PHRASES.ROOT}`
    );
    return response.data;
  },

  async deletePhrase(id: string) {
    const response = await axiosBase.delete(
      `${ENDPOINTS.ROOT}${ENDPOINTS.PHRASES.ROOT}/${id}`
    );
    return response.data;
  },
};
