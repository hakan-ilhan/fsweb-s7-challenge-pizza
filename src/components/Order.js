import React from 'react'
import images from "../Assets/logo.svg"
import "./Order.css"

function Order() {
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
                            <p>200</p>
                        </div>

                    </div>
                    <p id="info">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <form>
                    <div className='pizza-order'>

                        <div>
                            <h3>Boyut Seç<span className="kirmizi">*</span></h3>
                            <input type="radio" name="size" />
                            <label htmlFor="kucuk">Küçük</label><br /><br />

                            <input type="radio" id="orta" name="size" />
                            <label htmlFor="orta">Orta</label><br /><br />

                            <input type="radio" id="boyut" name="size" />
                            <label htmlFor="buyuk">Büyük</label><br /><br />
                        </div>
                        <div className='hamur'>
                            <h3>Hamur Seç<span className="kirmizi">*</span></h3>
                            <select name="hamur" id="cars">
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
                                <input type="checkbox" name="malzeme" id="pepperoni" />
                                <label htmlFor="pepperoni">Pepperoni</label><br /><br />

                                <input type="checkbox" name="malzeme" id="sosis" />
                                <label htmlFor="sosis">Sosis</label><br /><br />

                                <input type="checkbox" name="malzeme" id="kanada" />
                                <label htmlFor="kanada">Kanada Jambonu</label><br /><br />


                                <input type="checkbox" name="malzeme" id="tavuk" />
                                <label htmlFor="tavuk">Tavuk Izgara</label><br /><br />

                                <input type="checkbox" name="malzeme" id="sogan" />
                                <label htmlFor="sogan">Soğan</label>
                            </div>
                            <div>
                                <input type="checkbox" name="malzeme" id="domates" />
                                <label htmlFor="domates">Domates</label><br /><br />

                                <input type="checkbox" name="malzeme" id="misir" />
                                <label htmlFor="misir">Mısır</label><br /><br />

                                <input type="checkbox" name="malzeme" id="sucuk" />
                                <label htmlFor="sucuk">Sucuk</label><br /><br />

                                <input type="checkbox" name="malzeme" id="jalepeno" />
                                <label htmlFor="jalepeno">Jalepeno</label><br /><br />

                                <input type="checkbox" name="malzeme" id="sarimsak" />
                                <label htmlFor="sarimsak">Sarımsak</label>
                            </div>
                            <div>
                                <input type="checkbox" name="malzeme" id="biber" />
                                <label htmlFor="biber">Biber</label><br /><br />
                                <input type="checkbox" name="malzeme" id="sucuk" />
                                <label htmlFor="sucuk">Sucuk</label><br /><br />

                                <input type="checkbox" name="malzeme" id="ananas" />
                                <label htmlFor="annas">Ananas</label><br /><br />

                                <input type="checkbox" name="malzeme" id="kabak" />
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
                                <button className='end-button'>SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </section >



    )
}

export default Order