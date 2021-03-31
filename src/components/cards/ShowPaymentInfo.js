import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Id comanda: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Valoare comanda:{" / "}
        {(order.paymentIntent.amount /= 100).toLocaleString("ro-RO", {
          style: "currency",
          currency: "RON",
        })}
      </span>
      {" / "}
      <span>Moneda: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Metoda de plata: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <br></br>
      <span>
        Data efectuarii platii:{"  "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;
