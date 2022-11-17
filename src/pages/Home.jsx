import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useUserContext from "../hooks/useUserContext";
import useDataContext from "../hooks/useDataContext";
import Form from "../components/elements/Form";
import Challenges from "../components/elements/Challenges";

function Home() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { state, getData } = useDataContext();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      getData();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ minHeight: "70vh", my: 5 }}>
      <Container sx={{ my: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} sx={{ order: { xs: 1, sm: 0 } }}>
            <Stack spacing={2}>
              {state.length === 0 ? (
                <Typography variant="body1">No Challenges</Typography>
              ) : (
                state.map((obj) => <Challenges key={obj.id} obj={obj} />)
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} sx={{ order: { xs: 0, sm: 1 } }}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Home;
