import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface CardItemProps {
  id: string;
  text: string;
  author: string;
  onDelete: (id: string) => void;
  quoteText?: boolean;
}

export const CardItem = ({
  id,
  text,
  author,
  onDelete,
  quoteText,
}: CardItemProps) => (
  <Card
    sx={{
      borderRadius: 2,
      boxShadow: 3,
      p: 1,
      backgroundColor: "#f1f1f1",
    }}
  >
    <CardContent
      sx={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "95%",
        }}
      >
        <Typography
          variant="body1"
          color="text.primary"
          mb={2}
          sx={{
            fontSize: "0.9rem",
            lineHeight: 1.2,
            fontStyle: "italic",
            marginBottom: "0",
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            color: "grey",
          }}
        >
          {quoteText ? `“${text}”` : text}
        </Typography>
        <IconButton color="secondary" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>

      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <Typography
          variant="body1"
          color="#cd8fcd"
          fontWeight={600}
          fontSize={"0.9rem"}
          mb={2}
        >
          {author}
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);
