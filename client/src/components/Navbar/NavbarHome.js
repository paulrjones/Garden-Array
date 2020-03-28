import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from '../Grid/GridContainer.js';
import GridItem from '../Grid/GridItem.js';
import Header from '../Header/Header.js';
import CustomInput from '../CustomInput/CustomInput.js';
import CustomDropdown from '../CustomDropdown/CustomDropdown.js';
import Button from '../CustomButtons/Button.js';
import teal from '@material-ui/core/colors/teal';

import image from "../../assets/img/Garden.jpg";
import profileImage from "../../assets/img/logo.jpg";

import styles from '../../assets/jss/views/navbarsStyle.js';

const useStyles = makeStyles(styles);
const tealBt = teal[900]

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div id="navbar" className={classes.navbar}>
      <div
        className={classes.navigation}
      >
        <div id="navbar" className={classes.navbar}>
          <div
            className={classes.navigation}
            style={{ backgroundImage: "url(" + image + ")" }}
          >
            <Header
              brand={
                <img
                  src={profileImage}
                  className={classes.img}
                />}
              color="transparent"


              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink
                      }
                    >
                      <i
                        className={
                          classes.socialIcons
                        }
                      />{" "}
                      Plant Page
                  </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink
                      }
                    >
                      <i
                        className={
                          classes.socialIcons
                        }
                      />{" "}
                      My Garden
                  </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink
                      }
                      style={{ backgroundColor: 'tealBt' }}
                    >
                      <i
                        className={
                          classes.socialIcons
                        }
                      />{" "}
                      Login/Register
                  </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      className={
                        classes.navLink
                      }
                      style={{ backgroundColor: 'tealBt' }}
                    >
                      <i
                        className={
                          classes.socialIcons
                          
                        }
                      />{" "}
                      My Profile
                  </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <div>
                      <CustomInput
                        white
                        inputRootCustomClasses={classes.inputRootCustomClasses}
                        formControlProps={{
                          className: classes.formControl
                        }}
                        inputProps={{
                          placeholder: "Search",
                          inputProps: {
                            "aria-label": "Search",
                            className: classes.searchInput
                          }
                        }}
                      />
                      <Button justIcon round color="transparent">
                        <Search className={classes.searchIcon} />
                      </Button>
                    </div>
                  </ListItem>
                </List>

              }
            />


          </div>
        </div>
      </div>
    </div>
  );
}
