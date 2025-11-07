import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface CardItemProps {
  id: string;
  text: string;
  author: string;
  onDelete: (id: string) => void;
}

export const CardItem = ({ id, text, author, onDelete }: CardItemProps) => (
  <Card
    sx={{
      borderRadius: 3,
      boxShadow: 3,
      p: 1,
      transition: "0.3s",
      "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
    }}
  >
    <CardContent>
      <Typography variant="body1" color="text.primary" mb={2}>
        {text}
      </Typography>
      <Typography variant="body1" color="text.primary" mb={2}>
        {author}
      </Typography>
      <IconButton color="error" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </CardContent>
  </Card>
);
