import { IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useDataContext from "../../hooks/useDataContext";

function Challenges({ obj }) {
  const { deleteData } = useDataContext();

  return (
    <Paper sx={{ p: 4, position: "relative" }}>
      <Typography>{obj.challenge}</Typography>

      <IconButton
        aria-label="edit"
        size="small"
        sx={{ position: "absolute", top: 10, right: 40 }}
      >
        <EditIcon fontSize="small" />
      </IconButton>

      <IconButton
        aria-label="delete"
        size="small"
        sx={{ position: "absolute", top: 10, right: 10 }}
        onClick={() => deleteData(obj.id)}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
}
export default Challenges;
