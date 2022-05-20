import React, { PureComponent } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

const data = [
    {
        name: "Segunda-feira",
        Diário: 400,
    },
    {
        name: "Terça-feira",
        Diário: 200,
    },
    {
        name: "Quarta-feira",
        Diário: 300,
    },
    {
        name: "Quinta-feira",
        Diário: 175,
    },
    {
        name: "Sexta-feira",
        Diário: 100,
    },
    {
        name: "Sábado",
        Diário: 125,
    },
    {
        name: "Domingo",
        Diário: 345,
    },
];

export default class CustomBarChart extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    render() {
        return (
            <ResponsiveContainer width={"100%"} height={300}>
                <BarChart
                    width={500}
                    height={300}
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
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Diário" title fill="#0870a0" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
