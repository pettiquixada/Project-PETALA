import React, { useState } from "react";

import {
    Box,
    MenuItem,
    Divider,
    Button,
    Tooltip,
    ListItemIcon,
    Badge,
    Container,
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";

import { makeStyles } from "@material-ui/styles";
import CustomBarChart from "./barChart";

const useStyles = makeStyles({
    container: {
        padding: 20,
        width: "100%",
        height: "auto",
        backgroundColor: "#f3f3f3",
    },
    header: {
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    chart: {
        width: "100%",
    },
});

const ChartArea = () => {
    const [groundChartInterval, setGroundChartInterval] = useState("day");

    const handleChange = (event) => {
        setGroundChartInterval(event.target.value);
    };

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography>Gráfico de Umidade do Solo</Typography>
                <div>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="ground-chart-interval">
                            Período
                        </InputLabel>
                        <Select
                            labelId="ground-chart-interval"
                            id="id-ground-chart-interval"
                            value={groundChartInterval}
                            onChange={handleChange}
                            defaultValue={groundChartInterval}
                        >
                            <MenuItem value={"day"}>Diário</MenuItem>
                            <MenuItem value={"month"}>Mensal</MenuItem>
                            <MenuItem value={"year"}>Anual</MenuItem>
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

export default ChartArea;
