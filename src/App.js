import "./App.css";
import EmailSignatureTemp from "./Components/EmailSignatureTemp/EmailSignatureTemp";
import { useContext } from "react";
import { DataContext } from "./Context/ContextStore";
import { Box, Grid } from "@mui/material";
import Form from "./Components/Form/Form";

function App() {
 

  // const state = useContext(DataContext);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Form />
          </Grid>
          <Grid className="emailSignTemp" item xs={12} md={8}>
            <EmailSignatureTemp />
          </Grid>
        </Grid>
      </Box>

      {/* <button onClick={copyToClipboard}>copy</button>
      <EmailSignatureTemp /> */}
    </div>
  );
}

export default App;
