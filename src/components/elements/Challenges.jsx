import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useDataContext from "../../hooks/useDataContext";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Challenges({ obj }) {
  const { deleteData, updateData } = useDataContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(obj.challenge);

  return (
    <>
      <Paper sx={{ p: 4, position: "relative" }}>
        <Typography>{obj.challenge}</Typography>

        <IconButton
          aria-label="edit"
          size="small"
          sx={{ position: "absolute", top: 10, right: 40 }}
          onClick={handleOpen}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} spacing={2}>
          <Typography variant="h6">Edit</Typography>
          <TextField value={value} onChange={(e) => setValue(e.target.value)} />
          <Box>
            <Button
              variant="contained"
              onClick={() => updateData(value, obj.id)}
            >
              confirm
            </Button>
            <Button sx={{ ml: 2 }} onClick={handleClose}>
              Cancle
            </Button>
          </Box>
        </Stack>
      </Modal>
    </>
  );
}
export default Challenges;
