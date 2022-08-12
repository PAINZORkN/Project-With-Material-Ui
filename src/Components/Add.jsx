import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import {
  Fab,
  Modal,
  Tooltip,
  Box,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  DateRange,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const TooltipDisplay = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  position: "fixed",
  bottom: "20px",
  [theme.breakpoints.up("sm")]: {
    position: "fixed",
    bottom: "20px",
    justifyContent: "start",
    paddingLeft: "10px",
  },
}));

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TooltipDisplay>
        <Tooltip onClick={(e) => setOpen(true)} title="Add Post">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </TooltipDisplay>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          backgroundColor="white"
          borderRadius={3}
          p={3}
        >
          <Typography variant="h6" color="gray" textAlign="center" fontSize>
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              Sabzorro
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Write here"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
