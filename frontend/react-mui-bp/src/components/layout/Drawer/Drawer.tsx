import React, { useState, Fragment } from "react";
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
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/about" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>
              About
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/contact" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <ListItemText>
              Contact
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
}
export default DrawerComponent;
