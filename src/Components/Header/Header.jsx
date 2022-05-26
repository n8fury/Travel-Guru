import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons";
const Header = () => {
  <AppBar position="static">
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.title}>
        Travel Guru
      </Typography>
      <Box display="flex">
        <Typography variant="h6" className={classes.title}>
          Explore the world
        </Typography>
        <Autocomplete>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Places ..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Autocomplete>
      </Box>
    </Toolbar>
  </AppBar>;
};

export default Header;
