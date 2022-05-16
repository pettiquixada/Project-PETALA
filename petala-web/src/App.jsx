import React from "react";
import HomeScreen from "./pages/home";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const App = () => {
    return (
        <>
            <CssBaseline />
            <HomeScreen />
        </>
    );
};

export default App;
