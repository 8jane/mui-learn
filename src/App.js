import { useState } from "react";

import {
  Container,
  Typography,
  Button,
  ThemeProvider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  createTheme,
} from "@mui/material";

import Notes from "./Notes";

const theme = createTheme({
  // palette: {
  //   primary: purple,
  // },
});

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Typography variant="h2">
//           Imperdiet sed ex no vero iusto sea.
//         </Typography>

//         <div>
//           <ButtonGroup>
//             <Button variant="contained" endIcon={<SendIcon />}>
//               Mark
//             </Button>
//             <Button endIcon={<CancelScheduleSendIcon />}>Owen</Button>
//           </ButtonGroup>
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// }

function App() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("today");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h2">Imperdiet sed.</Typography>

        <Notes />

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Note Title"
            fullWidth
            required
            onChange={(e) => setTitle(e.target.value)}
            error={titleError}
            margin="normal"
          ></TextField>

          <TextField
            label="Details"
            multiline
            rows="4"
            fullWidth
            required
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
            margin="normal"
          ></TextField>

          <FormControl>
            <FormLabel>Our Categories</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                control={<Radio />}
                value="money"
                label="Money"
              />
              <FormControlLabel
                control={<Radio />}
                value="today"
                label="Today"
              />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default App;
