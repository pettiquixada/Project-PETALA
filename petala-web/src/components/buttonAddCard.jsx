import React from "react";

import { IconButton } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

import { IoAddCircle } from "react-icons/io5";

const useStyles = makeStyles({
    buttonBack: {
        backgroundColor: "rgba(7, 89, 143, 1)",
        borderRadius: "50%",
    },
    icon: {
        color: "#ffffff",
        boxShadow: "1px 2px 5px 1px rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        transition: "0.2s",

        "&:hover": {
            color: "#dddddd",
            transition: "0.2s",
        },
    },
});

const ButtonAddCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.buttonBack}>
            <IconButton aria-label="add" size="large">
                <IoAddCircle fontSize="80" className={classes.icon} />
            </IconButton>
        </div>
    );
};

export default ButtonAddCard;
