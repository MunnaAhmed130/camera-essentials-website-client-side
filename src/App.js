import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Explore from "./components/Explore/Explore/Explore";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import Purchase from "./components/Shared/Purchase/Purchase";
import Dashboard from "./components/Dashbaord/Dashboard/Dashboard";
import Pay from "./components/User/Pay/Pay";
import MyOrders from "./components/User/MyOrders/MyOrders";
import Review from "./components/User/Review/Review";
import AddAProduct from "./components/Admin/AddAProduct/AddAProduct";
import AllOrders from "./components/Admin/AllOrders/AllOrders";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageProducts from "./components/Admin/ManageProducts/ManageProducts";
import Reviews from "./components/Home/Reviews/Reviews";
import DarkThemeProvider from "./Context/ThemeProvider/DarkThemeProvider";
import ExploreProduct from "./components/Explore/ExploreProduct/ExploreProduct";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import "./App.css";
// import useTheme from "./Hooks/useTheme";
// Material UI
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import DarkMode from "./components/Shared/DarkMode/DarkMode";

function App() {
  // let viewportWidth;
  // let setViewportWidth = function () {
  // viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  // console.log(viewportWidth);
  // };
  // window.addEventListener("onResize", function () {
  //   setViewportWidth();
  // });
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Bai Jamjuree",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DarkThemeProvider>
          <AuthProvider>
            <Router>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/explore">
                  <Explore />
                </Route>
                <PrivateRoute path="/explore_product/:_id">
                  <ExploreProduct />
                </PrivateRoute>
                <PrivateRoute path="/explore/product">
                  <ExploreProduct />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/purchase/:_id">
                  <Purchase />
                </PrivateRoute>
                <PrivateRoute path="/purchase">
                  <Purchase />
                </PrivateRoute>
                <Route path="/pay">
                  <Pay />
                </Route>
                <Route path="/myOrders">
                  <MyOrders />
                </Route>
                <Route path="/review">
                  <Review />
                </Route>
                <Route path="/reviews">
                  <Reviews />
                </Route>
                <Route path="/addAProduct">
                  <AddAProduct />
                </Route>
                <Route path="/manageProducts">
                  <ManageProducts />
                </Route>
                <Route path="/AllOrders">
                  <AllOrders />
                </Route>
                <Route path="/makeAdmin">
                  <MakeAdmin />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </AuthProvider>
        </DarkThemeProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
