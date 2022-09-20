import React, { Fragment } from "react";
import "../css/Home.css";
import HeaderImg from "../image/HeaderLeftImg.png";
import video  from '../video/Video.mp4'
function Home() {

  return (
    <Fragment>
      <div className="Headers">
        <div className="HeaderLeft">
          <h4>
            I'm <b style={{ color: "white" }}>Ilhomjon!</b>
          </h4>
          <p>
            Ilhomjon Iskandarov FrontEnd | Backend developer. Region: Uzbekistan
            Tashkent. Welcome to my personal website
          </p>
          <div className="HeaderButtons">
            <a href='#'  download={video}>
              <button>Download CV</button>
            </a>
            <a href="#">
              <button className="PortfolioButton">Portfolio</button>
            </a>
          </div>
          <div className="icons">
            <a href="https://t.me/IlhomjonIskandarov">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://www.instagram.com/ilhomjoniskandarov_2006/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCKMhF88HAoMRCSv0DyM8_xg">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="tel: +998990456773">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
        <div className="HeaderRight">
          <img src={HeaderImg} alt="Header img Error" />
        </div>
      </div>

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

      <div className="SkillsMySikll">
        <h1>Skill</h1>
        <div className="Skill">
          <div className="MySkills">
            <div className="html skillls">
              <div>
                <i class="fa-brands fa-html5"></i> <br />
                <h1>HTML</h1>
              </div>
            </div>
            <div className="css skillls">
              <div>
                <i class="fa-brands fa-css3-alt"></i> <br />
                <h1>Css</h1>
              </div>
            </div>
            <div className="js skillls">
              <div>
                <i class="fa-brands fa-js"></i> <br />
                <h1>JS</h1>
              </div>
            </div>
            <div className="bootstrap skillls">
              <div>
                <i class="fa-brands fa-bootstrap"></i> <br />
                <h1>Bootstrap</h1>
              </div>
            </div>
            <div className="reactjs skillls">
              <div>
                <i class="fa-brands fa-react"></i> <br />
                <h1>ReactJs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
