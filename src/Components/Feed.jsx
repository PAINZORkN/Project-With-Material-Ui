import { Box, Checkbox } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} padding={2}>
      <Post name="S" title="Sabi" date="1 Hour Ago" img="https://www.lanotiziagiornale.it/wp-content/uploads/2022/02/peppino_di_capri.jpg" desc="Tu si nna malatiaaa" color={{backgroundColor: 'blue'}}/>
      <Post name="P" title="Gigi" date="2 Hours Ago" color={{backgroundColor: 'orange'}}/>
      <Post name="P" title="Painz" date="3 Hours Ago" color={{backgroundColor: 'orange'}}/>
      <Post name="S" title="Sab" date="4 Hours Ago" color={{backgroundColor: 'blue'}}/>
      <Post name="SP" title="SabZor" date="5 Hours Ago" color={{backgroundColor: 'pink'}}/>
      <Post name="SP" title="ZorSab" date="6 Hours Ago" color={{backgroundColor: 'pink'}}/>
    </Box>
  );
};

export default Feed;
