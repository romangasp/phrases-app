import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { usePhrasesContext } from "../../_lib/contexts/phrasesContext";


export const SearchInput = () => {
  const { handleSearch } = usePhrasesContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <TextField
      fullWidth
      placeholder="Buscar por frase o autor..."
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="secondary" />
          </InputAdornment>
        ),
      }}
      size="small"
      sx={{ mb: 3, maxWidth: "42%" }}
      color="secondary"
    />
  );
};