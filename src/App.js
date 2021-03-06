import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import './App.css';
import AuthProvider from "./AuthContext/AuthProvider";
import Home from "./Pages/Homepage/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Header from "./Pages/Shared/Header/Header";
import Profile from "./Pages/Profile/Profile";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Products from "./Pages/Products/Products";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import Order from "./Pages/Order/Order";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blog from "./Pages/Others/Blog/Blog";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/header'>
              <Header />
            </Route>
            <Route exact path='/footer'>
              <Footer />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/registration'>
              <Registration />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>

            <PrivateRoute path="/product/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router >
      </AuthProvider>
    </div >
  );
}

export default App;
