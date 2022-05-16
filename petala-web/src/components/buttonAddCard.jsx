import React from "react";

import { Button, CardContent, IconButton, Typography } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { FaPlus } from "react-icons/fa";

const useStyles = makeStyles({
    card: {
        backgroundColor: "#eeeeee",
        boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, .3)",
        minWidth: 80,
        minHeight: 80,
        maxHeight: 350,
        maxWidth: 300,
        padding: "20px 10px 10px 10px",
        marginBottom: 50,
        borderRadius: "50%",
        border: "none",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "1s",

        "&:hover": {
            backgroundColor: "#f8f8f8",
            boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, .1)",
            transition: "1s",
        },
    },
    buttonIcon: {
        color: "#fcb61f",
        fontSize: 30,
        transition: "1s",
    },
});

const ButtonAddCard = ({ full }) => {
    const classes = useStyles();
    return (
        <button
            className={classes.card}
            style={{
                width: full ? 50 + "px" : 100 + "px",
                height: full ? 50 + "px" : 100 + "px",
            }}
        >
            <FaPlus
                className={classes.buttonIcon}
                style={{ fontSize: full ? 30 + "px" : 50 + "px" }}
            />
        </button>
    );
};

export default ButtonAddCard;
