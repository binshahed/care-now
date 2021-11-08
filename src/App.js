import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import initializeAuthentication from "./firebase/firebase.initialize";
import AuthProvider from "./context/AuthProvider";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Appointment from "./components/Appointment/Appointment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OurDoctors from "./components/OurDoctors/OurDoctors";
import AppointmentSubmit from "./components/Appointment/AppointmentSubmit";
import AboutUs from "./components/AboutUs/AboutUs";

initializeAuthentication();

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/doctors">
            <OurDoctors />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute exact path="/appointmentSubmit">
            <AppointmentSubmit />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
