
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPackage from './pages/AddPackage/AddPackage';
import AllPackage from './pages/AllPackage/AllPackage';
import ManageAllBooking from './pages/Booking/ManageAllBooking/ManageAllBooking';
import MyBooking from './pages/Booking/MyBooking/MyBooking';
import Update from './pages/Booking/Update/Update';
import AuthProvider from './pages/context/AuthProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivetRoute from './pages/Login/PrivetRoute/PrivetRoute';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allPackage">
              <AllPackage></AllPackage>
            </Route>
            <Route path="/addPackage">
              <AddPackage></AddPackage>
            </Route>
            <PrivetRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivetRoute>
            <PrivetRoute path="/myBooking">
              <MyBooking></MyBooking>
            </PrivetRoute>
            <PrivetRoute path="/manageAllBooking">
              <ManageAllBooking></ManageAllBooking>
            </PrivetRoute>
            <PrivetRoute path="/update/:orderId">
              <Update></Update>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
