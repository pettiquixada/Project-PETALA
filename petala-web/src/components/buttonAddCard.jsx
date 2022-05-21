import React from "react";

import { Button, CardContent, IconButton, Typography } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { IoAddCircle } from "react-icons/io5";

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
    icon: {
        color: "#069b38",
    },
});

const ButtonAddCard = ({ full }) => {
    const classes = useStyles();
    return (
        <IconButton aria-label="add" size="large">
            <IoAddCircle fontSize="80" className={classes.icon} />
        </IconButton>
    );
};

export default ButtonAddCard;
