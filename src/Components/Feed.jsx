import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} padding={2}>
      <Post name="S" title="Sabi" date="1 Hour Ago" img="https://www.lanotiziagiornale.it/wp-content/uploads/2022/02/peppino_di_capri.jpg" desc="Tu si nna malatiaaa" color={{backgroundColor: 'blue'}}/>
      <Post name="P" title="Gigi" date="2 Hours Ago" img="https://wallpaperaccess.com/full/109666.jpg" desc="Image 1" color={{backgroundColor: 'orange'}}/>
      <Post name="P" title="Painz" date="3 Hours Ago" img="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-HD-Image-Nature-Desktop.jpg" desc="Image 2" color={{backgroundColor: 'orange'}}/>
      <Post name="S" title="Sab" date="4 Hours Ago" img="https://wallpaperaccess.com/full/138728.jpg" desc="Image 3" color={{backgroundColor: 'blue'}}/>
      <Post name="SP" title="SabZor" date="5 Hours Ago" img="https://wallpaperaccess.com/full/284466.jpg" desc="Image 4" color={{backgroundColor: 'pink'}}/>
      <Post name="SP" title="ZorSab" date="6 Hours Ago" img="https://wallpapercave.com/wp/trlzN6b.jpg" desc="Image 5" color={{backgroundColor: 'pink'}}/>
    </Box>
  );
};

export default Feed;
