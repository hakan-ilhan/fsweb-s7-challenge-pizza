import React, { useState } from 'react'
import images from "../Assets/logo.svg"
import "./Order.css"


const initialForm = {
    size: "",
    hamur: "",
    malzeme: [],

}

function Order() {
    const [form, setForm] = useState(initialForm)

    const handleChange = (event) => {
        let { type, name, checked, value, id } = event.target;

        if (type === "radio" || type === "select-one") {
            setForm({ ...form, [name]: value });

        } else if (type === "checkbox" && checked) {
            setForm({ ...form, [name]: [...form.malzeme, value] });

        } else {
            setForm({
                ...form, malzeme: form.malzeme.filter((item) => item !== value)
            });
        }
    }





    console.log("form", form.malzeme);



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
                <form>
                    <div className='pizza-order'>

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
                        <textarea name="not" id="not" cols="70" rows="3" placeholder='Siparişine eklemek istediğin bir not var mı?'></textarea>
                        <br /><br /><hr /><br />
                    </div>
                    <div className='yeter'>
                        <div className='omg'>
                            <button className='button'>-</button><div className='button-div'>1</div><button className='button'>+</button>
                        </div>
                        <div className='end'>
                            <div className='siparis-toplami'>
                                <h3>Sipariş Toplamı</h3>
                                <div className='secimler-div'>
                                    <p>Seçimler</p>
                                    <p>25TL</p>
                                </div>
                                <div className='toplam-div'>
                                    <p>Toplam</p>
                                    <p>110TL</p>
                                </div>
                            </div>
                            <div>
                                <button disabled className='end-button'>SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </section >



    )
}

export default Order