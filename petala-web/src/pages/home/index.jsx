import React, { useState } from "react";
import {
    Box,
    MenuItem,
    Divider,
    Button,
    Tooltip,
    ListItemIcon,
    Badge,
    Grid,
    Typography,
} from "@mui/material";
import { IoNotifications, IoFlower } from "react-icons/io5";

import NavMenu from "../../components/menu.jsx";
import Logo from "../../images/logo.png";

import { makeStyles } from "@material-ui/styles";
import MainCard from "../../components/mainCard.jsx";
import InfoCard from "../../components/infoCard.jsx";
import ButtonAddCard from "../../components/buttonAddCard.jsx";
import GroundChartArea from "../../components/groundChartArea.jsx";
import WaterChartArea from "../../components/waterChartArea.jsx";

import board from "../../svg/board.svg";
import blob from "../../svg/blob.svg";

const useStyles = makeStyles({
    navbar: {
        border: 0,
        padding: "10px 50px",
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#ffffff",
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
        // marginBottom: 100,
        flexDirection: "column",
    },
    cards: {
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
    infoCardsDiv: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    wrapper: {
        backgroundImage: `url(${board})`,
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#ffffff",
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
            <div className={classes.wrapper}>
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
                                aria-expanded={
                                    openSystemMenu ? "true" : undefined
                                }
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
                                aria-expanded={
                                    openGeneralMenu ? "true" : undefined
                                }
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
                                // startIcon={<IoNotifications />}
                                // iconSizeSmall
                            >
                                <Badge
                                    badgeContent={4}
                                    color="primary"
                                    sx={{ mr: 2 }}
                                >
                                    <IoNotifications fontSize={25} />
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
                                    <IoNotifications />
                                </ListItemIcon>
                                Conexões do Circuito
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <IoNotifications />
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
                                    <IoNotifications />
                                </ListItemIcon>
                                Idiomas
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <IoNotifications />
                                </ListItemIcon>
                                Backup e Restauração
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <IoNotifications />
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
                    <div className={classes.container}>
                        <MainCard />
                        <Grid container className={classes.cards}>
                            <Typography
                                variant="p"
                                className={classes.sectionTitle}
                            >
                                <IoFlower style={{ marginRight: 5 }} />
                                Plantações a Monitorar
                            </Typography>
                            <div className={classes.infoCardsDiv}>
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
                                    <ButtonAddCard />
                                </Grid>
                            </div>
                        </Grid>
                        <GroundChartArea />
                        <WaterChartArea />
                    </div>
                </main>
            </div>
        </>
    );
};

export default HomeScreen;
