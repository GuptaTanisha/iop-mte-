import React,{useState} from 'react';
import {Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar,Typography,InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const Header = ({setCoordinates,home}) => {
    const classes = useStyles();
    const [autocomplete,setAutocomplete] = useState(null);
    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat,lng});
    }
    return (
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Link className={classes.link} to="/"> EV Charging Station</Link>
            <Box display="flex">
            <Link className={classes.link} to="/contact">Contact</Link>
            <Link className={classes.link} to="/book">Click to Book</Link>
            {home && <><Typography variant="h6" className={classes.title}>
                Explore the stations
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <div className={classes.search}>
                   <div className = {classes.searchIcon}>
                        <SearchIcon />
                   </div>
                   <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput }}/>
                </div>
          </Autocomplete></>}    
            </Box>
        </Toolbar>
        </AppBar>);
}

export default Header;