import React from "react";
import "./Success.css";
import logo from "../Assets/logo.svg";
import images from "../Assets/logo.svg";

function Success({ hakan }) {
  return (
    <div className="success-container">
      <div>
        <img src={images} />
      </div>
      <div className="lezzet-card">
        <p id="lezzet">lezzetin yolda</p>
        <p id="sipariş">SİPARİŞ ALINDI</p>
        <hr />
      </div>
      <h2>Position Absolute Acılı Pizza</h2>
      <div className="infos">
        <p>Boyut:{hakan.size}</p>
        <p>Hamur:{hakan.hamur}</p>
        <p>Ek Malzemeler:{hakan.malzeme}</p>
      </div>
      <div className="price-card">
        <p>Sipariş Toplamı</p>
        <div id="secim">
          <p>Seçimler</p>
          <p>{hakan.toplamTutar - hakan.adet * 85.5}</p>
        </div>
        <div id="tutar">
          <p>Seçimler</p>
          <p>{hakan.toplamTutar}</p>
        </div>
      </div>
    </div>
  );
}

export default Success;
