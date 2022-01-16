import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link as RouterLink } from "react-router-dom";
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline, FormControl,
    Grid,
    InputLabel,
    Link, MenuItem, Select,
    TextField,
    Typography
} from "@mui/material";
import Navbar from "./navbar/Navbar";

const locations = [
    {
        val: "ul. Lubostroń 3F",
        latitude: 50.015033,
        longitude: 19.901099
    },
    {
        val: "ul. Zakopiańska 105",
        latitude: 50.013581,
        longitude: 19.928383
    },
    {
        val: "ul. Kobierzyńska 113",
        latitude: 50.023654,
        longitude: 19.910747
    },
    {
        val: "ul. Zawiła",
        latitude: 50.007543,
        longitude: 19.894312
    }
];

const theme = createTheme();

export default function ItemForm() {
    const [category, setCategory] = React.useState("");
    const [location, setLocation] = React.useState("");

    const mappedLocations = locations.map(location => {
        return <MenuItem value={location.val}>{location.val}</MenuItem>;
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleCategoryChange = (event: any) => {
        setCategory(event.target.value);
    }

    const handleLocationChange = (event: any) => {
        setLocation(event.target.value);
    }

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add product
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="title"
                                    name="title"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Short description"
                                    label="Short description"
                                    name="description"
                                    autoComplete="description"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        labelId="category"
                                        id="category-select"
                                        label="Category"
                                        value={category}
                                        onChange={handleCategoryChange}
                                    >
                                        <MenuItem value={"pieczywo"}>Pieczywo</MenuItem>
                                        <MenuItem value={"przyprawy"}>Przyprawy</MenuItem>
                                        <MenuItem value={"dania-na-cieplo"}>Dania na ciepło</MenuItem>
                                        <MenuItem value={"dania-do-odgrzania"}>Dania do odgrzania</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel>Location</InputLabel>
                                    <Select
                                        labelId="location"
                                        id="location-select"
                                        label="Location"
                                        value={location}
                                        onChange={handleLocationChange}
                                    >
                                        {mappedLocations}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            component={RouterLink} to={"/profile/1"}
                        >
                            Add product
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}