import React, { useContext, useState } from 'react'
import {
    TextField,
    Typography,
    InputAdornment,
    IconButton,
    Icon,
    Container,
    Grid,
    InputLabel,
    Select,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'
import { Redirect } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import PlantQueryCard from '../../components/PlantQueryCard'
import Footer from '../../components/Footer'
import UserContext from '../../utils/UserContext'
import PlantContext from '../../utils/PlantContext'

const useStyles = makeStyles({
    root: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        marginBottom: 5
    },
    pageTitle: {
        fontSize: 26,
        marginBottom: 12
    }
});


const Home = () => {

    const classes = useStyles();

    const { isLoggedIn } = useContext(UserContext)

    const {
        result,
        plants,
        searchPlant,
        searchedPlant,
        sortBy,
        completeData,
        handleSelectInputChange,
        handlePlantInputChange,
        handleSearchPlant
    } = useContext(PlantContext)

    const [value] = useState(completeData)

    return (
        <>
            {isLoggedIn ?
                (<>
                    <Navbar />
                    <Container className={classes.root}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <form onSubmit={e => handleSearchPlant(e)}>
                                <Grid item xs={12}>
                                    <Typography variant='h1' className={classes.pageTitle}>Search for a Plant!</Typography>
                                    <InputLabel htmlFor="selectSortBy">SortBy</InputLabel>
                                    <Select
                                        native
                                        id='selectSortBy'
                                        name='sortBy'
                                        value={sortBy}
                                        onChange={handleSelectInputChange}
                                        className={classes.input}
                                        display='flex'
                                        inputProps={{
                                            name: 'sortBy',
                                            id: 'age-native-simple'
                                        }}
                                    >
                                        <option value='q'>Common or Scientific Name</option>
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <RadioGroup value={value} onChange={handleSelectInputChange}>
                                            <FormControlLabel
                                                value={true}
                                                control={<Radio />}
                                                label="Complete Data" />
                                            <FormControlLabel
                                                value={false}
                                                control={<Radio />}
                                                label="Incomplete Data" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Plant Name"
                                        id="searchPlant"
                                        name="searchPlant"
                                        value={searchPlant}
                                        onChange={handlePlantInputChange}
                                        className={classes.input}
                                        display='flex'
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment>
                                                    <IconButton
                                                        onClick={handleSearchPlant}
                                                    >
                                                        <Icon>
                                                            <SearchIcon />
                                                        </Icon>
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                            </form>
                            <Typography component="span">
                                Results: {result}
                            </Typography>
                            <Typography component="span">
                                {searchedPlant}
                            </Typography>
                            <PlantQueryCard
                                plantObj={plants}
                            />
                        </Grid>
                    </Container>
                    <Footer />
                </>) : <Redirect to={{ pathname: '/signin' }} />
            }
        </>
    )
}

export default Home