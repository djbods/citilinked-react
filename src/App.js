import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Common components
import AppHeader from "./components/layout/AppHeader";
import AppFooter from './components/layout/AppFooter';

// Views
import Home from "./components/views/Home";
import ServicesPage from "./components/views/ServicesPage";
import GalleryPage from "./components/views/GalleryPage";
import ProductsPage from './components/views/ProductsPage';
import TestimonialsPage from './components/views/TestimonialsPage';
import SpaceCalculatorPage from './components/views/SpaceCalculatorPage';
import LocationsPage from './components/views/LocationsPage';
import Faqs from './components/views/Faqs';

// // Layout
// import Products from "./components/views/Products";
// import SpaceCalculator from "./components/layout/SpaceCalculator";
// import Gallery from "./components/layout/Gallery";
// import Testimonials from "./components/layout/Testimonials";




const App = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/spacecalculator" component={SpaceCalculatorPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/testimonials" component={TestimonialsPage} />
        <Route exact path="/locations" component={LocationsPage} />
        <Route exact path="/faqs" component={Faqs} />
      </Switch>
      <AppFooter />
    </Router>
  );
};

export default App;
