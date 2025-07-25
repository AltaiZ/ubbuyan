import React from "react";
import ErxesForm from "./component/erxesForm";

export default function page() {
  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <section className="container">
        <div className="get_help center">
          <img className="contact-logo" src="/static/images/blue_logo.png" />
          <h3>ЭРДЭНЭТ ХҮМҮҮНИЙГ МӨНХЖҮҮЛЖ ДУРСГАЛЫГ НЬ ХҮНДЭТГЭН ДЭЭДЛЬЕ</h3>
          <p>
            {" "}
            Бид танд буяны үйлчилгээний талаарх бүхий л зөвлөгөө, мэдээ
            мэдээллийг цаг алдалгүй хүргэн нэг цэгийн үйлчилгээг нэг дороос
            үзүүлж байна.{" "}
          </p>
          <h3>БУЯНЫ ҮЙЛЧИЛГЭЭНИЙ ЛАВЛАХ</h3>
          <span className="phone">7016-2222</span>
          <h4 className="company-name">“УЛААНБААТАР БУЯН” ХХК</h4>
          <div className="tus">
            <hr />
            <div className="tus_img">
              <img src="/static/images/icon12.png" />
            </div>
          </div>
        </div>
        <div className="row">
          <p>
            ИРГЭН ГЭРТЭЭ ӨВЧИНИЙ УЛМААС НАС БАРСАН ТОХИОЛДОЛД ЭМНЭЛЭГИЙН
            ГЭРЧИЛГЭЭ /МАЯГТ АМ-7/ ХЭРХЭН АВАХ ВЭ?
          </p>
          <ol>
            <li>
              Түргэний эмчийн өгсөн бичгийг өрхийн эмнэлэгт авч очин өрхийн
              эмчийн тодорхойлолт болгож авах
            </li>
            <li>
              Өрхийн эмчийн өгсөн тодорхойлолтыг харъяа дүүргийн “Эрүүл мэндийн
              төв ” буюу Амбулатор дээр авч очин НАС БАРСАН ТУХАЙ эмнэлэгийн
              гэрчилгээ АМ-7 маягт авна.
            </li>
          </ol>
          <p>
            ИРГЭН ЭМНЭЛЭГИЙН БУС НӨХЦӨЛД БОЛОН ГАДНЫ НӨЛӨӨТЭЙ НАС БАРСАН
            ТОХИОЛДОЛД ЭМНЭЛЭГИЙН ГЭРЧИЛГЭЭ /МАЯГТ АМ-7/ ХЭРХЭН АВАХ ВЭ?
          </p>
          <ol>
            <li>
              Түргэний эмчийн өгсөн бичгийг ШҮҮХ эмнэлэгт авч очин НАС БАРСАН
              ТУХАЙ эмнэлэгийн гэрчилгээ АМ-7 маягт авна.
            </li>
          </ol>
          <p>
            Та доор Холбоо барих маягтыг бөглөнө үү. Бид тантай тун удахгүй
            холбогдох болно.
          </p>
        </div>
        <div className="col-md-4">
          <p></p>
          <figure>
            <iframe
              allowFullScreen
              frameBorder="0"
              src="//www.youtube.com/embed/9s32DTTLNMA"
              style={{
                height: "281px",
                width: "500px",
              }}
            />
          </figure>
          <p />
        </div>

        <div className="col-md-6 col-md-offset-2 holboo">
          <img className="full_img" src="" />
        </div>
      </section>
      <section className="container">
        <ErxesForm />
      </section>
    </div>
  );
}
