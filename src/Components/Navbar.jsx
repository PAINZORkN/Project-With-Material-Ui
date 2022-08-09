import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "45%",
    [theme.breakpoints.up('sm')]: {
        width: "30%",
    }
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up('sm')]: {
        display: "flex"
    }
}))

const UserBoxMobile = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up('sm')]: {
        display: "none"
    }
}))




const Navbar = () => {
    // const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    PAINZOR
                </Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase fullWidth={true} placeholder='Search...' />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge color="secondary" badgeContent={100}>
                        <MailIcon />
                    </Badge>
                    <Avatar
                        sx={{ width: 35, height: 35 }} alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg" />
                </Icons>
                <UserBoxMobile>
                    <Avatar
                        sx={{ width: 35, height: 35 }} alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg" />

                    <Typography variant="span">John</Typography>
                </UserBoxMobile>
            </StyledToolbar>
            {/* <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu> */}
        </AppBar>
    )
}

export default Navbar