import React, { useState, useEffect } from 'react'
import images from "../Assets/logo.svg"
import "./Pizza.css"
import axios from "axios"
import { useHistory } from "react-router-dom";


const initialForm = {
    size: "",
    hamur: "",
    malzeme: [],
    not: "",
}



function Pizza() {
    const [form, setForm] = useState(initialForm)
    const [disableButton, setDisableButton] = useState(true);
    const [selectedMalzemeCount, setSelectedMalzemeCount] = useState(0);
    const [count, setCount] = useState(1);

    const history = useHistory();

    const isOrderValid = () => {
        return (
            form.size !== '' &&
            form.hamur !== '' &&
            form.malzeme.length >= 4 &&
            form.malzeme.length <= 10
        );
    };

    useEffect(() => {
        setSelectedMalzemeCount(form.malzeme.length);
    }, [form.malzeme]);


    const handleChange = (event) => {
        let { type, name, checked, value, id } = event.target;



        if (type === "radio" || type === "select-one" || name === "not") {
            setForm({ ...form, [name]: value });

        } else if (type === "checkbox" && checked) {
            setForm({ ...form, [name]: [...form.malzeme, value] });

        } else {
            setForm({
                ...form, malzeme: form.malzeme.filter((item) => item !== value)
            });
        }
    }
    const increment = () => {

        setCount(count + 1)
    };
    const decrement = () => {

        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("https://reqres.in/api/users", form).then((response) => {
            console.log("data", response.data)
            setForm(initialForm)
        })

        history.push("/succes")
    }







    return (
        <section>
            <header className='header'>
                <div>
                    <img src={images} />
                </div>
                <div className='selam'>
                    <p style={{ color: "white" }}>Anasayfa-<span style={{ fontWeight: "bold", color: "white" }}>Sipariş Oluştur</span></p>
                </div>
            </header>
            <div className='form-container'>
                <h2>Position Absolute Acı Pizza</h2>
                <div>
                    <div className='yazilar'>
                        <p>85.50TL</p>
                        <div className='yazilar2'>
                            <p>4.9</p>
                            <p>(200)</p>
                        </div>

                    </div>
                    <p id="info">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div id='pizza-form'>

                        <div>
                            <h3>Boyut Seç<span className="kirmizi">*</span></h3>
                            <input type="radio" name="size" id="kucuk" value="kucuk" onChange={handleChange} checked={form.size === "kucuk" ? true : false} />
                            <label htmlFor="kucuk">Küçük</label><br /><br />

                            <input type="radio" id="orta" name="size" value="orta" onChange={handleChange} checked={form.size === "orta" ? true : false} />
                            <label htmlFor="orta">Orta</label><br /><br />

                            <input type="radio" id="buyuk" name="size" value="buyuk" onChange={handleChange} checked={form.size === "buyuk" ? true : false} />
                            <label htmlFor="buyuk">Büyük</label><br /><br />
                        </div>
                        <div className='hamur'>
                            <h3>Hamur Seç<span className="kirmizi">*</span></h3>
                            <select name="hamur" id="hamur" value={form.hamur} onChange={handleChange}>
                                <option value="ince">İnce</option>
                                <option value="orta">Orta</option>
                                <option value="kalin">Kalın</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h3>Ek malzemeler</h3>
                        <p>En fazla 10 malzeme seçebilirsiniz.5tl</p>
                        <div className="pizza-checkbox-container">
                            <div>
                                <input type="checkbox" name="malzeme" id="pepperoni" value="pepperoni" onChange={handleChange} />
                                <label htmlFor="pepperoni">Pepperoni</label><br /><br />

                                <input type="checkbox" name="malzeme" id="sosis" value="sosis" onChange={handleChange} />
                                <label htmlFor="sosis">Sosis</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="kanada" onChange={handleChange} />
                                <label htmlFor="kanada">Kanada Jambonu</label><br /><br />


                                <input type="checkbox" name="malzeme" id="malzeme" value="tavuk" onChange={handleChange} />
                                <label htmlFor="tavuk">Tavuk Izgara</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="sogan" onChange={handleChange} />
                                <label htmlFor="sogan">Soğan</label>
                            </div>
                            <div>
                                <input type="checkbox" name="malzeme" id="malzeme" value="domates" onChange={handleChange} />
                                <label htmlFor="domates">Domates</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="misir" onChange={handleChange} />
                                <label htmlFor="misir">Mısır</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="sucuk" onChange={handleChange} />
                                <label htmlFor="sucuk">Sucuk</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="jalepeno" onChange={handleChange} />
                                <label htmlFor="jalepeno">Jalepeno</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="sarimsak" onChange={handleChange} />
                                <label htmlFor="sarimsak">Sarımsak</label>
                            </div>
                            <div>
                                <input type="checkbox" name="malzeme" id="malzeme" value="biber" onChange={handleChange} />
                                <label htmlFor="biber">Biber</label><br /><br />
                                <input type="checkbox" name="malzeme" id="malzeme" value="sucuk" onChange={handleChange} />
                                <label htmlFor="sucuk">Sucuk</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="ananas" onChange={handleChange} />
                                <label htmlFor="annas">Ananas</label><br /><br />

                                <input type="checkbox" name="malzeme" id="malzeme" value="kabak" onChange={handleChange} />
                                <label htmlFor="kabak">Kabak</label>
                            </div>
                        </div>
                    </div>
                    <div className='not'>
                        <p>Sipariş Notu</p>
                        <textarea id="malzemeler-checkbox" onChange={handleChange} value={form.not} name="not" id="not" cols="70" rows="3" placeholder='Siparişine eklemek istediğin bir not var mı?'></textarea>
                        <br /><br /><hr /><br />
                    </div>
                    <div className='yeter'>
                        <div className='omg'>
                            <button type='button' onClick={decrement} className='button'>-</button><div className='button-div'>{count}</div><button type='button' onClick={increment} className='button'>+</button>
                        </div>
                        <div className='end'>
                            <div className='siparis-toplami'>
                                <h3>Sipariş Toplamı</h3>
                                <div className='secimler-div'>
                                    <p>Seçimler</p>
                                    <p>{count * (selectedMalzemeCount * 5)}TL</p>
                                </div>
                                <div className='toplam-div'>
                                    <p>Toplam</p>
                                    <p>{((selectedMalzemeCount * 5) + 85.50) * count}TL</p>
                                </div>
                            </div>
                            <div>
                                <button type="submit" disabled={!isOrderValid()} id='order-button'>SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </section >



    )
}

export default Pizza