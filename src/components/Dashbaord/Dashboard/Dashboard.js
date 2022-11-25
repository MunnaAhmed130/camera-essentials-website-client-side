import React from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import AddAProduct from "../../Admin/AddAProduct/AddAProduct";
import AllOrders from "../../Admin/AllOrders/AllOrders";
import MyOrders from "../../User/MyOrders/MyOrders";
import MakeAdmin from "../../Admin/MakeAdmin/MakeAdmin";
import DashboardHome from "../DashboardHome/DashboardHome";
import ManageProducts from "../../Admin/ManageProducts/ManageProducts";
import useAuth from "../../../Hooks/useAuth";
import Pay from "../../User/Pay/Pay";
import Review from "../../User/Review/Review";
import "./Dashboard.css";
import useTheme from "../../../Hooks/useTheme";
import DarkMode from "../../Shared/DarkMode/DarkMode";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { darkMode } = useTheme();
  const { window } = props;
  const { admin, logOut } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={darkMode ? "dark drawer" : "light"}>
      {/* <div> */}
      <Toolbar />
      <Divider />
      <div className="side-links">
        {/* <div> */}
        <NavLink activeClassName="active__link" to="/">
          Home
        </NavLink>{" "}
        <br />
        {/* <Link to={`${url}`}>Dashboard </Link> <br /> */}
        {/* {!admin && (
            <Box>
              <Link to={`${url}/myOrders`}>My Orders</Link> <br />
              <Link to={`${url}/pay`}>Pay</Link> <br />
              <Link to={`${url}/review`}>Review</Link> <br />
            </Box>
          )}
          {admin && (
            <Box>
              <Link to={`${url}/allOrders`}>All Orders</Link> <br />
              <Link to={`${url}/addAProduct`}>Add A Product</Link> <br />
              <Link to={`${url}/manageProducts`}>Manage Products</Link> <br />
              <Link to={`${url}/makeAdmin`}>Make Admin</Link>
            </Box>
          )} */}
        <Box className="dashboard_link">
          <NavLink activeClassName="active__link" to={`${url}/allOrders`}>
            All Orders
          </NavLink>{" "}
          <br />
          <NavLink activeClassName="active__link" to={`${url}/addAProduct`}>
            Add A Product
          </NavLink>{" "}
          <br />
          <NavLink activeClassName="active__link" to={`${url}/manageProducts`}>
            Manage Products
          </NavLink>{" "}
          <br />
          <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
          <br />
          <NavLink to={`${url}/myOrders`}>My Orders</NavLink> <br />
          <NavLink to={`${url}/pay`}>Pay</NavLink> <br />
          <NavLink to={`${url}/review`}>Review</NavLink> <br />
          {/* <Link to={`${url}/darkMode`}>DarkMode</Link> <br /> */}
        </Box>
        <Button onClick={logOut} variant="contained">
          Log Out
        </Button>
      </div>
      {/* </div> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Box className="" sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          className="appbar"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            // width: "100%",
            // zIndex: 999,
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              // variant="h6"
              // noWrap
              // component="div"
              className="appbar-title"
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          // component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
          // className="drawer"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          className="main_content"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={path}>
              <DashboardHome />
            </Route>
            <Route path={`${path}/addAProduct`}>
              <AddAProduct />
            </Route>
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders />
            </Route>
            <Route path={`${path}/allOrders`}>
              <AllOrders />
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProducts />
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
