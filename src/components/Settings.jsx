import React from 'react';
import { GiModernCity } from "react-icons/gi";
import { BsStack } from "react-icons/bs";
import { FaScaleUnbalanced, FaFileInvoice } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { PiBarnFill } from "react-icons/pi";

const Settings = ({ son }) => {

  return (
    <div className={`${son === false ? 'set-act' : ''} set`}>
      <div className="cards">
        <div className="cardd">
          <div className="img">
            <GiModernCity />
          </div>
          <div className="texx">
            <span>Tashkilotlar</span>
            <p>Tashkilotlar soni: 3 ta</p>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <BsStack />
          </div>
          <div className="texx">
            <span>Kategoriyalar</span>
            <p>Kategoriyalar soni: 0 ta</p>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <FaScaleUnbalanced />
          </div>
          <div className="texx">
            <span>O'lchov birligi</span>
            <p>O'lchov birliklari soni: 0 ta</p>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <FaShoppingCart />
          </div>
          <div className="texx">
            <span>Mahsulotlar</span>
            <p>Mahsulotlar soni: 0 ta</p>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <FaFileInvoice  />
          </div>
          <div className="texx">
            <span>Yuk xatlari</span>
            <p>Yuk xatlari: 0 ta</p>
          </div>
        </div>
        <div className="cardd">
          <div className="img">
            <PiBarnFill />
          </div>
          <div className="texx">
            <span>Kirim qilish</span>
            <p>Kirim qilishlar soni: 0 ta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;
