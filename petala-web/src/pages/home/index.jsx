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
import { FaBell } from "react-icons/fa";

import NavMenu from "../../components/menu.jsx";
import Logo from "../../images/logo.png";

import { makeStyles } from "@material-ui/styles";
import MainCard from "../../components/mainCard.jsx";
import InfoCard from "../../components/infoCard.jsx";
import ButtonAddCard from "../../components/buttonAddCard.jsx";
import ChartArea from "../../components/chartArea.jsx";

const useStyles = makeStyles({
    navbar: {
        border: 0,
        padding: "30px 50px",
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        width: "18rem",
        height: "auto",
    },
    menuButton: {
        padding: "10px 40px",
        margin: "5px 20px",
        fontWeight: "bold",
        color: "#0e4d81",

        "&:hover": {
            background: "#a7a7a7",
            color: "#1b5a8fff",
        },
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100,
    },
    infoCardsDiv: {
        marginTop: 50,
        alignItems: "center",
    },
});

const HomeScreen = () => {
    const [openSystemMenu, setOpenSystemMenu] = useState(null);
    const [openGeneralMenu, setOpenGeneralMenu] = useState(null);
    const [openNotificationMenu, setOpenNotificationMenu] = useState(null);

    const openSysMenu = (event) => {
        setOpenSystemMenu(event.currentTarget);
    };

    const closeSysMenu = () => {
        setOpenSystemMenu(null);
    };

    const openGenMenu = (event) => {
        setOpenGeneralMenu(event.currentTarget);
    };

    const closeGenMenu = () => {
        setOpenGeneralMenu(null);
    };

    const openNotMenu = (event) => {
        setOpenNotificationMenu(event.currentTarget);
    };

    const closeNotMenu = () => {
        setOpenNotificationMenu(null);
    };

    const classes = useStyles();

    return (
        <>
            <nav className={classes.navbar}>
                <Tooltip title="Logo Pétala">
                    <img src={Logo} alt="Logo" className={classes.logo} />
                </Tooltip>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                    className={classes.gridAlign}
                >
                    <Tooltip title="Configurações de Sistema">
                        <Button
                            onClick={openSysMenu}
                            size="large"
                            sx={{ ml: 2 }}
                            aria-controls={
                                openSystemMenu ? "system-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={openSystemMenu ? "true" : undefined}
                            className={classes.menuButton}
                        >
                            Sistema
                        </Button>
                    </Tooltip>
                    <Tooltip title="Configurações Gerais">
                        <Button
                            onClick={openGenMenu}
                            size="large"
                            sx={{ ml: 2 }}
                            aria-controls={
                                openGeneralMenu ? "general-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={openGeneralMenu ? "true" : undefined}
                            className={classes.menuButton}
                        >
                            Geral
                        </Button>
                    </Tooltip>
                    <Tooltip title="Notificações do Usuário">
                        <Button
                            onClick={openNotMenu}
                            size="large"
                            sx={{ ml: 2 }}
                            aria-controls={
                                openNotificationMenu
                                    ? "account-menu"
                                    : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={
                                openNotificationMenu ? "true" : undefined
                            }
                            className={classes.menuButton}
                            // startIcon={<FaBell />}
                            // iconSizeSmall
                        >
                            <Badge
                                badgeContent={4}
                                color="primary"
                                sx={{ mr: 2 }}
                            >
                                <FaBell fontSize={20} />
                            </Badge>
                            Notificações
                        </Button>
                    </Tooltip>
                    <NavMenu
                        id={"system-menu"}
                        openMenu={openSystemMenu}
                        closeMenu={closeSysMenu}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <FaBell />
                            </ListItemIcon>
                            Conexões do Circuito
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <FaBell />
                            </ListItemIcon>
                            Controle Doves
                        </MenuItem>
                    </NavMenu>

                    <NavMenu
                        id={"general-menu"}
                        openMenu={openGeneralMenu}
                        closeMenu={closeGenMenu}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <FaBell />
                            </ListItemIcon>
                            Idiomas
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <FaBell />
                            </ListItemIcon>
                            Backup e Restauração
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <FaBell />
                            </ListItemIcon>
                            Versões e Update
                        </MenuItem>
                    </NavMenu>

                    <NavMenu
                        id={"notification-menu"}
                        openMenu={openNotificationMenu}
                        closeMenu={closeNotMenu}
                    >
                        <MenuItem>Mensagem 1</MenuItem>
                        <Divider />
                        <MenuItem>Mensagem 2</MenuItem>
                        <Divider />
                        <MenuItem>Mensagem 3</MenuItem>
                    </NavMenu>
                </Box>
            </nav>
            <main>
                <Container maxWidth="lg" className={classes.container}>
                    <MainCard />
                    <Grid container className={classes.infoCardsDiv}>
                        <Grid item>
                            <InfoCard />
                        </Grid>
                        <Grid item>
                            <InfoCard />
                        </Grid>
                        <Grid item>
                            <InfoCard />
                        </Grid>
                        <Grid item>
                            <ButtonAddCard full />
                        </Grid>
                    </Grid>
                    <ChartArea />
                </Container>
            </main>
        </>
    );
};

export default HomeScreen;
