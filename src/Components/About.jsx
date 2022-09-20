import React, { Fragment } from "react";
import HeaderImg from "../image/HeaderLeftImg.png";
import "../css/MySkills.css";
function About() {
  let items = document.querySelectorAll(".progress-item");
  const counters = Array(items.length);
  const intervals = Array(items.length);
  counters.fill(0);
  items.forEach((number, index) => {
    intervals[index] = setInterval(() => {
      if (counters[index] == parseInt(number.dataset.num)) {
        clearInterval(intervals[index]);
      } else {
        counters[index] += 1;
        number.style.background =
          "conic-gradient(red calc(" + counters[index] + "%), gray 0deg)";
        number.setAttribute("data-value", counters[index] + "%");
        number.innerHTML = counters[index] + "%";
      }
    }, 15);
  });

  return (
    <Fragment>
      <div className="about" id="about">
        <div className="LeftAboutAndRightAbo">
          <div className="LeftAbout">
            <img src={HeaderImg} alt="" />
          </div>
          <div className="RightAbout">
            <h3>Ilhomjon Iskandarov</h3>
            <p>
              Salom! Mening ismim{" "}
              <a href="https://t.me/IlhomjonIskandarov">Ilhomjon.</a>
              Men 2006-yilning 1-noyabrida Andijon viloyati Jalaquduq tumanida
              tug'ulganman. <br />
              2 yildan buyon frontend dasturlash bilan shug;ullanaman. Menda
              frontend bo'yicha 2 ta va fullstack o'quv kursi bo'yicha bitta
              sertifikatim bor. IT ga qiziqishim 3yil oldin boshlangan. Hozirda
              frontend dasturchiman va backend bo'yicha o'qimoqdaman. <br />
              IT fullstack yo'nalishi mening eng sevimli yo'nalishim. 2022 yil
              maktabni tugatdim ya'ni 9-sinfni. Hozirgi kunda mening{" "}
              <a href="https;//t.me/Ilhomjon_Blog">telegram kanalim</a> orqali
              barcha web saytlarimni ko'rishingiz mumkin. Sevimli ishim kod
              yozish va musiqa eshitish musiqasiz cod yozish man uchun qiyin😊
            </p>
          </div>
        </div>
      </div>

      <div className="Skills">
        <div className="skills">
          <h1 className="skl"></h1>
          <p className="skl sklLine">_________</p>
          <div className="htmlProg ProgWidth">
            <div className="p">
              <p>html</p>
              <p>95%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar htmlBar"></span>
              </div>
            </div>
          </div>
          <div className="cssProg ProgWidth">
            <div className="p">
              <p>Css3</p>
              <p>85%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar cssBar"></span>
              </div>
            </div>
          </div>
          <div className="jsProg ProgWidth">
            <div className="p">
              <p>JavaScript</p>
              <p>75%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar jsBar"></span>
              </div>
            </div>
          </div>
          <div className="javaProg ProgWidth">
            <div className="p">
              <p>Bootstrap</p>
              <p>75%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar javaBar"></span>
              </div>
            </div>
          </div>
          <div className="c/c++Prog ProgWidth">
            <div className="p">
              <p>Reactjs</p>
              <p>60%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar ccpBar"></span>
              </div>
            </div>
          </div>
          <div className="reactProg ProgWidth">
            <div className="p">
              <p>Nodejs</p>
              <p>60%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar reactBar"></span>
              </div>
            </div>
          </div>
          <div className="nodeProg ProgWidth">
            <div className="p">
              <p>SCSS</p>
              <p>55%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar nodeBar"></span>
              </div>
            </div>
          </div>
          <div className="sqlProg ProgWidth">
            <div className="p">
              <p>MOngoDB</p>
              <p>75%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar sqlBar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default About;
