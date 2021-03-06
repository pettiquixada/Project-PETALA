import React from "react";
import {
    Box,
    Grid,
    TextField,
    Typography,
    Input,
    Button,
    InputAdornment,
} from "@mui/material";

import { makeStyles } from "@material-ui/styles";
import { IoHardwareChipOutline, IoAddCircleSharp } from "react-icons/io5";
import { styled } from "@mui/material/styles";

import SvgGirlv from "../svg/girlFlower";

const CustomButtom = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#00a048",
    borderColor: "#00a048",
    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
        backgroundColor: "#007434",
        borderColor: "#007434",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#007434",
        borderColor: "#007434",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0, 255, 55, 0.5)",
    },
});

const useStyles = makeStyles({
    card: {
        width: "100%",
        boxShadow: "0px 5px 5px 1px rgba(0, 0, 0, 0.3)",
        padding: "0px 100px 20px 100px",
        backgroundColor: "#ffffff",
    },
    title: {
        color: "#1d9e3d",
        fontSize: 60,
        fontWeight: "bold",
        fontFamily: "roboto",
        lineHeight: 1,
        textTransform: "uppercase",
        marginBottom: 15,
    },
    subTitle: {
        marginTop: 0,
        color: "#636363",
        fontSize: 16,
    },
    ButtonDiv: {
        marginTop: 30,
    },
    inputDiv: {
        marginTop: 30,
        display: "flex",
        alignItems: "center",
    },
    inputCard: {
        width: 450,
        height: 50,
        color: "gray",
        border: "none",
        borderRadius: "25px 0px 0px 25px",
        padding: "0px 20px",
        outline: "none",
        fontSize: 18,
    },
    buttonCard: {
        padding: "0px 30px",
        height: 50,
        borderRadius: "0px 25px 25px 0px",
        backgroundColor: "#1d9e3d",
        border: "none",
        color: "#ffffff",
        fontSize: 18,
        cursor: "pointer",
        fontWeight: "bold",
        transition: "1s",

        "&:hover": {
            backgroundColor: "#0a8629",
            transition: "1s",
        },
    },
});

const MainCard = () => {
    const classes = useStyles();
    return (
        <Box component="section" className={classes.card}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item md="6">
                    <h1 className={classes.title}>Bem-vindos ao P??tala</h1>
                    <Typography variant="p" className={classes.subTitle}>
                        Projeto desenvolvido pelo o PET-TI do campus Quixad?? e
                        elaborado pelo grupo de estudo de IOT. O Pet??las foi
                        pensado para facilitar o monitoramento e cuidado di??rio
                        para as plantas.
                    </Typography>
                    <div className={classes.inputDiv}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="IP do Hardware"
                            sx={{ width: "60%", mr: 1 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IoHardwareChipOutline />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            color="success"
                        />
                        <CustomButtom variant="contained" size="medium">
                            Adicionar
                        </CustomButtom>
                    </div>
                </Grid>
                <Grid
                    item
                    md="6"
                    sx={{ p: 2 }}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <SvgGirlv width={"auto"} height={350} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainCard;
