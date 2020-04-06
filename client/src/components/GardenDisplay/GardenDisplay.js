import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    listItemDiv: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}));

export default function SimpleExpansionPanel(props) {
    const classes = useStyles();
    const [dense] = useState(false);
    const [secondary] = useState(false);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    return (
        <div className={classes.root}>
            <ExpansionPanel disabled={props.disabled}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{props.title}</Typography>
                </ExpansionPanelSummary>
                {props.plants.length > 1 ?
                    props.plants.map((data, i) => (
                        <div key={i} className={classes.listItemDiv}>
                            <List dense={dense}>
                                <ListItem>
                                    <ListItemAvatar>
                                        {data.plant_qty > 0 ? <Avatar>{data.plant_qty}x</Avatar> : <></> }
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={data.plant_name}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction>
                                        <div>
                                            <Button
                                                ref={anchorRef}
                                                aria-controls={open ? 'menu-list-grow' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleToggle}
                                            >
                                                <MoreVertIcon />
                                            </Button>
                                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                                {({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                                    >
                                                        <Paper className={classes.plantOptions}>
                                                            <ClickAwayListener onClickAway={handleClose}>
                                                                <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                                    <MenuItem onClick={handleClose}>All Info</MenuItem>
                                                                    <MenuItem onClick={handleClose}>Edit Qty</MenuItem>
                                                                    <MenuItem onClick={handleClose}>Remove</MenuItem>
                                                                </MenuList>
                                                            </ClickAwayListener>
                                                        </Paper>
                                                    </Grow>
                                                )}
                                            </Popper>
                                        </div>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </div>)
                    ) : <Typography variant="subtitle2">You do not have any plants in this garden!</Typography>}
            </ExpansionPanel>
        </div>
    );
}