import React from "react";
import { Container } from "react-bootstrap";
import $ from "jquery";

const SpaceCalculatorPage = () => {
  function calculateTotal() {
    let unit_size = {
      queenFull: 1,
      doubleFull: 1.2,
      singleFull: 0.6,
      doubleMattress: 0.48,
      // singleMattress: 0.3,
      // bedhead: 0.3,
      // bedsideTable: 0.2,
      // chestLarge: 0.9,
      // chest: 0.4,
      // dressingTable: 0.8,
      // foldingBed: 0.28,
      // cot: 0.7,
    };
    let item_size = {};

    item_size.queenFull = $("#qty_queenFull").val() * unit_size.queenFull;
    $("#size_queenFull").val(item_size.queenFull);

    item_size.doubleFull = $("#qty_doubleFull").val() * unit_size.doubleFull;
    $("#size_doubleFull").val(item_size.doubleFull);

    item_size.singleFull = $("#qty_singleFull").val() * unit_size.singleFull;
    $("#size_singleFull").val(item_size.singleFull);

    item_size.doubleMattress =
      $("#qty_doubleMattress").val() * unit_size.doubleMattress;
    $("#size_doubleMattress").val(item_size.doubleMattress);

    let total =
      item_size.queenFull +
      item_size.doubleFull +
      item_size.singleFull +
      item_size.doubleMattress;
    // item_size.singleMattress+
    // item_size.bedhead+
    // item_size.bedsideTable+
    // item_size.chestLarge+
    // item_size.chest+
    // item_size.dressingTable+
    // item_size.foldingBed+
    // item_size.cot

    $("#total_value").text(total);
  }

  $(function () {
    $(".qty").on("change keyup", calculateTotal);
  });

  return (
    <React.Fragment>
      <Container>
        <h1 className="my-5">Space Calculator</h1>
        <div className="container mt-4">
          <div className="row">
            <h3 className="col-4 row-heading">Item</h3>
            <h3 className="col-4 row-heading">Quantity</h3>
            <h3 className="col-4 row-heading">Metres(cubed)</h3>
          </div>
          <div className="row">
            <div className="col-4">Queen Bed & Mattress</div>
            <div className="col-4">
              <input type="number" className="qty" id="qty_queenFull" />
            </div>
            <div className="col-4">
              <input type="number" id="size_queenFull" readOnly />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">Double Bed & Mattress</div>
            <div className="col-4">
              <input type="number" className="qty" id="qty_doubleFull" />
            </div>
            <div className="col-4">
              <input type="number" id="size_doubleFull" readOnly />
            </div>
          </div>

          <div className="row my-4">
            <div className="col-4">Single Bed & Mattress</div>
            <div className="col-4">
              <input type="number" className="qty" id="qty_singleFull" />
            </div>
            <div className="col-2">
              <input type="number" id="size_singleFull" readOnly />
            </div>
          </div>

          <div className="row my-3">
            <div className="col-4">Double Mattress</div>
            <div className="col-4">
              <input type="number" className="qty" id="qty_doubleMattress" />
            </div>
            <div className="col-2">
              <input type="number" id="size_doubleMattress" readOnly />
            </div>
          </div>

          <div className="row my-4">
            <h5 className="col-9 text-right total">Total</h5>

            <div className="col-2 total-val">
              <h5 id="total_value">0 </h5>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default SpaceCalculatorPage;
