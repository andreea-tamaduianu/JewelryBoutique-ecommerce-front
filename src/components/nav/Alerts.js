import React, { useState, useEffect } from "react";
import { Alert } from 'antd';
import TextLoop from 'react-text-loop';

const Alerts = () => {
    return (
        <Alert className="text-center"
        type="warning" 
        closable
        message={
          <TextLoop mask>
            <div>Livrare gratuita</div>
            <div>Politica de returnare in 60 de zile</div>
            <div>Ambalare cadou gratuita</div>
            <div>Garantie pe viata</div>
            <div>Obtine 10% reducere la produsele din cos folosind cuponul <span className="text-danger"><b>VIP2021</b></span></div>
          </TextLoop>
        }
      />
    )
   
}

export default Alerts;

