import React from "react";
import { Box, Typography } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    card: {
        width: "100%",
        boxShadow: "1px 1px 3px #000000",
        borderRadius: "50px 50px 100px 50px",
        background: "rgb(0, 35, 255)",
        background:
            "linear-gradient(145deg, rgba(0,93,228,1) 0%, rgba(111,128,208,1) 41%, rgba(255,208,173,1) 100%)",
        padding: "50px 30px 30px 30px",
        // backgroundImage: url(imagens/back01.png);
        // background-color:#fff;
        // background-size: cover;
        // color: #000;
    },
});

const MainCard = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.card}>
            <Typography variant="h1" component="h2">
                Bem vindos ao Pétala
            </Typography>
            <Typography variant="h5" component="p">
                Projeto desenvolvido pelo o PET-TI do campus Quixadá e elaborado
                pelo grupo de estudo de IOT. O Petálas foi pensado para
                facilitar o monitoramento e cuidado diário para as plantas.
            </Typography>
        </Box>
    );
};

export default MainCard;
