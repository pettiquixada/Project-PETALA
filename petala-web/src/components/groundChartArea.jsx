import React, { useState } from "react";

import {
    MenuItem,
    Typography,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";

import { makeStyles } from "@material-ui/styles";
import CustomBarChart from "./barChart";

import { IoBarChart } from "react-icons/io5";

import blob from "../svg/blob.svg";

const useStyles = makeStyles({
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        boxShadow: "0px 5px 5px 1px rgba(0, 0, 0, 0.3)",
        margin: "20px 0px",
        padding: "40px 50px 0px 50px",
        backgroundImage: `url(${blob})`,
        backgroundSize: "cover",
        backgroundPositionY: "-530px",
        backgroundPositionX: "-380px",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#ffffff",
    },
    chart: {
        width: "100%",
        backgroundColor: "#ffffff",
        marginBottom: 20,
        padding: "30px 30px 10px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
    },
    backForm: {
        backgroundColor: "#ffffff",
        borderRadius: 3,
        marginBottom: 10,
        boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.3)",
    },
});

const GroundChartArea = () => {
    const [groundChartInterval, setGroundChartInterval] = useState("day");

    const handleChange = (event) => {
        setGroundChartInterval(event.target.value);
    };

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="p" className={classes.sectionTitle}>
                    <IoBarChart style={{ marginRight: 5 }} />
                    Gráfico de Umidade do Solo
                </Typography>
                <div className={classes.backForm}>
                    <FormControl
                        variant="filled"
                        size="large"
                        sx={{
                            m: 1,
                            minWidth: 180,
                        }}
                        color="success"
                    >
                        <InputLabel
                            id="ground-chart-interval"
                            sx={{
                                fontSize: 18,
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            Período
                        </InputLabel>
                        <Select
                            labelId="ground-chart-interval"
                            id="id-ground-chart-interval"
                            value={groundChartInterval}
                            onChange={handleChange}
                            defaultValue={groundChartInterval}
                        >
                            <MenuItem value={"day"} sx={{ fontWeight: "bold" }}>
                                Diário
                            </MenuItem>
                            <MenuItem
                                value={"month"}
                                sx={{ fontWeight: "bold" }}
                            >
                                Mensal
                            </MenuItem>
                            <MenuItem
                                value={"year"}
                                sx={{ fontWeight: "bold" }}
                            >
                                Anual
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className={classes.chart}>
                <CustomBarChart />
            </div>
        </div>
    );
};

export default GroundChartArea;
