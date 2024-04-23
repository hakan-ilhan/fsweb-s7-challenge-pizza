import React, { useState, useEffect } from "react";
import images from "../Assets/logo.svg";
import "./Pizza.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialForm = {
  isim: "",
  size: "",
  hamur: "",
  malzeme: [],
  not: "",
};
const initialErrors = {
  isim: false,
  size: false,
  hamur: false,
  malzeme: false,
};

const errorMassages = {
  isim: "Adınız en az 3 harf içermeli.",
  size: "Lütfen boyutunuzu seçiniz.",
  hamur: "Lütfen hamur seçimi yapınız.",
  malzeme: "En az 4, en fazla 10 ek malzeme seçebilirsiniz.",
};

const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Sucuk",
  "Ananas",
  "Kabak",
];
const boyutlar = ["Küçük", "Orta", , "Büyük"];
const secim = ["İnce", "Orta", "Kalın"];

function Pizza({ changeHakan }) {
  const [form, setForm] = useState(initialForm);
  const [disableButton, setDisableButton] = useState(true);
  const [selectedMalzemeCount, setSelectedMalzemeCount] = useState(0);
  const [count, setCount] = useState(1);
  const [error, setError] = useState(initialErrors);

  const history = useHistory();

  const isOrderValid = () => {
    return (
      form.size !== "" &&
      form.hamur !== "" &&
      form.malzeme.length >= 4 &&
      form.malzeme.length <= 10 &&
      form.isim.length > 2 &&
      form.isim !== "Gökhan"
    );
  };

  useEffect(() => {
    setSelectedMalzemeCount(form.malzeme.length);
  }, [form.malzeme]);

  const handleChange = (event) => {
    let { type, name, checked, value, id } = event.target;

    if (
      type === "radio" ||
      type === "select-one" ||
      name === "not" ||
      name === "isim"
    ) {
      setForm({ ...form, [name]: value });
    } else if (type === "checkbox" && checked) {
      setForm({ ...form, [name]: [...form.malzeme, value] });
    } else {
      setForm({
        ...form,
        malzeme: form.malzeme.filter((item) => item !== value),
      });
    }
    if (name === "isim" && value.length > 2) {
      setError({ ...error, [name]: false });
    } else {
      setError({ ...error, [name]: true });
    }
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isOrderValid()) return;

    const formData = {
      ...form,
      adet: count,
      toplamTutar: (selectedMalzemeCount * 5 + 85.5) * count,
    };

    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        console.log("data", response);
        setForm(initialForm);
        changeHakan(response.data);
        history.push("/succes");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <section>
      <header className="header">
        <div>
          <img src={images} />
        </div>
        <div className="selam">
          <p style={{ color: "white" }}>
            Anasayfa-
            <span style={{ fontWeight: "bold", color: "white" }}>
              Sipariş Oluştur
            </span>
          </p>
        </div>
      </header>
      <div className="form-container">
        <h2>Position Absolute Acı Pizza</h2>
        <div>
          <div className="yazilar">
            <p>85.50TL</p>
            <div className="yazilar2">
              <p>4.9</p>
              <p>(200)</p>
            </div>
          </div>
          <p id="info">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezetli bir yemektir..Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="pizza-form">
            <div className="radioCheck">
              <h3>
                Boyut Seç<span className="kirmizi">*</span>
              </h3>
              {boyutlar.map((boyut, index) => (
                <div key={index}>
                  <input
                    id={boyut}
                    type="radio"
                    name="size"
                    value={boyut}
                    checked={form.size === boyut}
                    onChange={handleChange}
                  />
                  <label htmlFor={boyut}>{boyut}</label>
                </div>
              ))}
            </div>
            <div className="hamur">
              <h3>
                Hamur Seç<span className="kirmizi">*</span>
              </h3>
              <select
                name="hamur"
                id="hamur"
                value={form.hamur}
                onChange={handleChange}
              >
                {secim.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h3>Ek malzemeler</h3>
            <p>En fazla 10 malzeme seçebilirsiniz.5tl</p>
            {form.malzeme.length > 0 &&
              (form.malzeme.length < 4 || form.malzeme.length > 10) && (
                <p style={{ color: "red" }}>
                  Lütfen en az 4 ve en fazla 10 malzeme seçiniz.
                </p>
              )}
            <div className="pizza-checkbox-container">
              {malzemeler.map((malzeme, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="malzeme"
                    id={malzeme}
                    value={malzeme.toLowerCase()}
                    onChange={handleChange}
                  />
                  <label htmlFor={malzeme}>{malzeme}</label>
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="not">
            <label htmlFor="isim">Adınız:</label>
            <input
              placeholder="Lütfen Adınızı Giriniz"
              id="isim"
              onChange={handleChange}
              value={form.isim}
              name="isim"
            />
            <p style={{ color: "red" }}>{error.isim && errorMassages.isim}</p>
            <p>Sipariş Notu</p>
            <textarea
              id="malzemeler-checkbox"
              onChange={handleChange}
              value={form.not}
              name="not"
              cols="70"
              rows="3"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            ></textarea>
            <br />
            <br />
            <hr />
            <br />
          </div>
          <div className="yeter">
            <div className="omg">
              <button type="button" onClick={decrement} className="button">
                -
              </button>
              <div className="button-div">{count}</div>
              <button type="button" onClick={increment} className="button">
                +
              </button>
            </div>
            <div className="end">
              <div className="siparis-toplami">
                <h3>Sipariş Toplamı</h3>
                <div className="secimler-div">
                  <p>Seçimler</p>
                  <p>{count * (selectedMalzemeCount * 5)}TL</p>
                </div>
                <div className="toplam-div">
                  <p>Toplam</p>
                  <p>{(selectedMalzemeCount * 5 + 85.5) * count}TL</p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!isOrderValid()}
                  id="order-button"
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Pizza;
