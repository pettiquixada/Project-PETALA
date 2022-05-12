import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import Girassol from "../images/girassol.png";

const useStyles = makeStyles({
    card: {
        width: "100%",
        boxShadow: "1px 1px 3px #000000",
        borderRadius: "50px 50px 100px 50px",
        background:
            "linear-gradient(145deg, rgba(0,93,228,1) 0%, rgba(111,128,208,1) 41%, rgba(255,208,173,1) 100%)",
        padding: "50px 30px 30px 30px",
    },
    title: {
        color: "#ffffff",
        fontWeight: "bolder",
    },
    subTitle: {
        color: "#ffffff",
        fontSize: 16,
        marginTop: 50,
    },
    ButtonDiv: {
        marginTop: 30,
    },
    inputDiv: {
        marginTop: 30,
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
        <Box component="div" className={classes.card}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item md="7">
                    <Typography
                        variant="h1"
                        component="h2"
                        className={classes.title}
                    >
                        Bem-vindos ao Pétala
                    </Typography>
                    <Typography variant="p" className={classes.subTitle}>
                        Projeto desenvolvido pelo o PET-TI do campus Quixadá e
                        elaborado pelo grupo de estudo de IOT. O Petálas foi
                        pensado para facilitar o monitoramento e cuidado diário
                        para as plantas.
                    </Typography>
                    <div className={classes.inputDiv}>
                        <input
                            className={classes.inputCard}
                            placeholder="Digite o IP da sua placa..."
                        />
                        <button className={classes.buttonCard}>
                            Adicionar
                        </button>
                    </div>
                </Grid>
                <Grid item md="5">
                    <img src={Girassol} alt="Girassol" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainCard;
