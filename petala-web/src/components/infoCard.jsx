import React from "react";

import { CardContent, IconButton, Typography } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { FaEllipsisH } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";

const useStyles = makeStyles({
    card: {
        background:
            "linear-gradient(90deg, #fcb61f 0%, rgba(255,206,79,1) 100%)",
        maxWidth: 300,
        maxHeight: 350,
        padding: "20px 10px 10px 10px",
        marginBottom: 50,
        borderRadius: 30,
        boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, .3)",
        margin: "20px",
    },
    cardTop: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40,
    },
    cardIcon: {
        color: "#ffffff",
        fontSize: 50,
    },
    dotsIcon: {
        color: "#ffffff",
        fontSize: 30,
    },
    cardTitle: {
        color: "#ffffff",
        fontSize: 30,
        fontWeight: "900",
        fontFamily: "roboto",
    },
    cardBottom: {
        display: "flex",
        justifyContent: "space-between",
    },
    cardInfo: {
        marginRight: "40px",
    },
    cardNumberData: {
        color: "#ffffff",
        fontSize: 50,
        fontWeight: "900",
        fontFamily: "roboto",
    },
    small: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "300",
        fontFamily: "roboto",
    },
    label: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "300",
        fontFamily: "roboto",
    },
    divider: {
        border: "1px solid #ffffff",
    },
});

const InfoCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <CardContent>
                <div className={classes.cardTop}>
                    <IoFlowerOutline className={classes.cardIcon} />
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        <FaEllipsisH className={classes.dotsIcon} />
                    </IconButton>
                </div>

                <span className={classes.cardTitle}>Planta 01</span>

                <div className={classes.cardBottom}>
                    <div className={classes.cardInfo}>
                        <div>
                            <Typography
                                variant="span"
                                className={classes.cardNumberData}
                            >
                                0 <sup className={classes.small}>%</sup>
                            </Typography>
                            <hr className={classes.divider} />
                        </div>
                        <Typography variant="span" className={classes.label}>
                            Umidade do solo
                        </Typography>
                    </div>
                    <div className={classes.cardInfo}>
                        <div>
                            <Typography
                                variant="span"
                                className={classes.cardNumberData}
                            >
                                0 <sup className={classes.small}>L</sup>
                            </Typography>
                            <hr className={classes.divider} />
                        </div>
                        <Typography variant="span" className={classes.label}>
                            Consumo de água
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </div>
    );
};

export default InfoCard;
