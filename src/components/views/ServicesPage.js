// This is the component for the route /services
import React from "react";
import { Container } from "react-bootstrap";

// Custom imports
import Services from "../layout/Services";

const ServicesPage = () => {
  return (
    <React.Fragment>
      <Services />
      <Container>
        <h1 className="py-3">Secure Storage in Melbourne</h1>
        <p className="lead">
          When it comes to storage facilities in Melbourne, local residents and
          businesses want a service that’s affordable, flexible in what it can
          store, offers enough storage space, and – most importantly – is
          secure. If you’re moving overseas for a year and don’t want to sell
          your possessions, putting them in secure safe storage allows you to
          retrieve them at a later date with the reasonable expectation that
          they will be in just as good a condition as they were when you put
          them in secure storage. At Citilinked Self Storage, we provide a
          comprehensive variety of storage solutions Melbourne wide to
          accommodate the storage needs of residents and businesses, including
          secure facilities in Richmond and Flemington.
        </p>
      </Container>
      <Container>
        <h1 className="py-3">Discover Our Complete Safe Storage Solutions</h1>
        <p className="lead">
          With storage facilities in Flemington and Richmond, both just a short
          drive from the Melbourne CBD, Citilinked Self Storage is your one-stop
          destination for safe storage solutions in the metropolitan area. Come
          to us when you need:
        </p>
        <ul className="py-3">
          <li>
            Safe self storage: Self safe storage gives you control over who is
            able to access your belongings. Whether you decide you’re the only
            one with access or you nominate a friend or family member to act on
            your behalf, self storage puts the responsibility in your hands.
          </li>
          <li>
            Secure storage units: Perfect for when you’re renovating a bathroom
            or kitchen and you don’t want to store all your essential equipment
            off-site at one of our Flemington or Richmond facilities, secure
            storage containers allow you to store your possessions on-site
            without having them get in the way of your work.
          </li>
          <li>
            Wine storage: Choosing the right secure storage service in Melbourne
            can be like choosing a fine wine. Just as you’d select the wine
            according to the meal, selecting the best safe storage solutions
            will largely depend on what you need it for. Citilinked offers
            professional wine cellar storage for everyone from collectors and
            merchants through to restaurants and boutique wineries.
          </li>
          <li>
            Storage boxes: If all you need is boxes for the upcoming relocation
            of your home or business, Citilinked offers storage boxes in a range
            of sizes.
          </li>
        </ul>
      </Container>
      <Container>
        <h1 className="py-3">Storage Space Calculator</h1>
        <p className="lead">
          The storage calculator is a handy tool to aid in the estimation of the
          storage required for storage space in our Richmond and Flemington
          facilities. Simply fill in the table below and the calculator will
          give you the approximate self storage space you will require.
          Important note: This is an approximate value only. Self storage
          services will depend on the actual sizes and types of goods you will
          need to store. Javascript is required to run this calculator. Please
          make sure Javascript is enabled in your browser. Click here to access
          the space calculator. There are also variations of self storage units
          in Melbourne we can offer – if you have questions, call our Flemington
          office on 03 9376 5975 or our Richmond office on 03 9429 6970.
        </p>
      </Container>
    </React.Fragment>
  );
};

export default ServicesPage;
