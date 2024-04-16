import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";
import nityam_logo from "./logo/text.png";
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 280;


export default function SideBar() {
  return (
    <>
    <div>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img
          src={nityam_logo}
          style={{
            width: "250px",
            height: "45px",
            marginLeft: "1rem",
            marginTop:"1.7rem",
          }}
          alt=""
        />
        <Toolbar />
        
        <List>
      {/* 'All mail' Button */}
      <ListItem disablePadding>
        <Button component="div" disableRipple>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="All mail" />
        </Button>
      </ListItem>

      {/* 'Trash' Button */}
      <ListItem disablePadding>
        <Button component="div" disableRipple>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </Button>
      </ListItem>

      {/* 'Spam' Button */}
      <ListItem disablePadding>
        <Button component="div" disableRipple>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </Button>
      </ListItem>
    </List>
    <Link to="/postform">
    <Button variant='contained'sx={{width:"10rem",justifyContent:"center",backgroundColor:"orange",marginLeft:"1rem"}}>
          Post
    </Button>
    </Link>
        
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        
        
      </Box>
    </Box>
    </div>
    </>
  );
}