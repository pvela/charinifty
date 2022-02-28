import React, { useState,  Fragment } from "react";
import {
    Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './styles'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Drawer from '@mui/material/Drawer';

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Fragment>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        variant="temporary"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
           <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>

            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                  <InfoIcon />
              </ListItemIcon>
              <ListItemText>
              <Link to="/about" className={classes.link}>About</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <ListItemText>
              <Link to="/contact" className={classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
}
export default DrawerComponent;
