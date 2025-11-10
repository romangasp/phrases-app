import { Grid } from "@mui/material";
import { CardItem } from "..";

interface CardGridProps {
  items: { id: string; text: string; author: string }[];
  onDelete: (id: string) => void;
}

export const CardGrid = ({ items, onDelete }: CardGridProps) => {
  return (
    <Grid
      container
      spacing={2}
      mt={2}
      width={"100%"}
      minWidth={"100%"}
      size={{ xs: 2, sm: 4, md: 4 }}
    >
      {items.map((item) => (
        <Grid key={item.id} size={{ xs: 2, sm: 4, md: 4 }}>
          <CardItem
            id={item.id}
            text={item.text}
            author={item.author}
            onDelete={onDelete}
            quoteText
          />
        </Grid>
      ))}
    </Grid>
  );
};
