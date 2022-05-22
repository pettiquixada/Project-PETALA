import React, { PureComponent } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";

import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    tooltip: {
        width: 200,
        height: 50,
        backgroundColor: "#ffffff",
        color: "blue",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 5px 5px 1px rgba(0, 0, 0, 0.3)",
        borderRadius: 10,
    },
    title: {
        color: "#333333",
        fontWeight: "bold",
        marginRight: 4,
    },
    value: {
        color: "blue",
        fontWeight: "bold",
    },
});

const data = [
    {
        name: "Segunda-feira",
        volume: 400,
    },
    {
        name: "Terça-feira",
        volume: 200,
    },
    {
        name: "Quarta-feira",
        volume: 300,
    },
    {
        name: "Quinta-feira",
        volume: 175,
    },
    {
        name: "Sexta-feira",
        volume: 100,
    },
    {
        name: "Sábado",
        volume: 125,
    },
    {
        name: "Domingo",
        volume: 345,
    },
];

export default class CustomLineChart extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    render() {
        return (
            <ResponsiveContainer width={"100%"} height={350}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="volume"
                        unit="L"
                        name="volume"
                        stroke="#003f92"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

const CustomTooltip = ({ active, payload, label }) => {
    const data = payload[0];
    const classes = useStyle();
    if (active) {
        console.log();
        return (
            <div className={classes.tooltip}>
                <span className={classes.title}>
                    {data.payload.name + ": "}
                </span>
                <span className={classes.value}>
                    {data.payload.volume + "" + data.unit}
                </span>
            </div>
        );
    }

    return null;
};
