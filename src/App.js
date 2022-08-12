import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Add from "./Components/Add";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";

function App() {

  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={5} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;
