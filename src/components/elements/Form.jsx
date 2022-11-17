import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useDataContext from "../../hooks/useDataContext";
import useUserContext from "../../hooks/useUserContext";

function Form() {
  const { loading, createData } = useDataContext();
  const { user } = useUserContext();
  const [challenge, setChallenge] = useState("");

  function handleClick() {
    createData({ challenge, user: user.uid });
    setChallenge("");
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h4">New Challenge</Typography>
      <TextField
        label="Challenge Name"
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
      />
      <Button onClick={handleClick} disabled={loading} variant="contained">
        Add ✔️
      </Button>
    </Stack>
  );
}
export default Form;
