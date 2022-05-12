import React from "react";

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
} from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { FaSnowflake, FaEllipsisH } from "react-icons/fa";

const useStyles = makeStyles({
    card: {
        background:
            "linear-gradient(90deg, rgba(236,142,0,1) 0%, rgba(255,206,79,1) 100%)",
        height: 200,
        maxWidth: 350,
        padding: "20px 10px",
    },
    cardTop: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

const InfoCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.cardTop}>
                    <FaSnowflake />
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <FaEllipsisH />
                    </IconButton>
                </div>
                <Typography className={classes.cardTitle}>Planta 01</Typography>
                <div className={classes.cardTop}>
                    <div className={classes.cardInfo}>
                        <Typography variant="span" className={classes.number}>
                            0
                            <Typography className={classes.small}>%</Typography>
                        </Typography>
                        <Typography variant="span" className={classes.label}>
                            Umidade do solo
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default InfoCard;
