import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

export default function NoteCard({ note }) {
  return (
    <div>
      <Card elevation={8}>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
