import { useEffect, useState } from "react";
import la100 from "../../assets/la100.png";
import "./locutor.css";
import diegoCastro from "../../assets/diegoCastro.png";
import fabioZapata from "../../assets/fabioZapata.png";
import elQuintoPoder from "../../assets/elQuintoPoder.png";
import segundaManana from "../../assets/segundaManana.png";
import lorre from "../../assets/lorre.png";
import laNocheDelSur from "../../assets/laNocheDelSur.png";
import laGranManana from "../../assets/laGranManana.png";
import fondoMitre from "../../assets/fondoMitre.jpg";
import fondoFutbol from "../../assets/fondoFutbol.jpg";
import la17Parche from "../../assets/la17Parche.png";


const Locutor = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [imageToShow, setImageToShow] = useState("");
  const [titleToShow, setTitleToShow] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const daysOfWeek = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const dayOfWeekName = daysOfWeek[currentTime.getDay()];
    setCurrentDay(dayOfWeekName);
  }, [currentTime, currentDay]);

  useEffect(() => {
    const currentHour = currentTime.getHours();

    if (currentDay && currentDay !== "Sábado" && currentDay !== "Domingo") {
      switch (true) {
        case currentHour >= 7 && currentHour < 10:
          setImageToShow(elQuintoPoder);
          setTitleToShow("EL QUINTO PODER");
          break;
        case currentHour >= 10 && currentHour < 13:
          setImageToShow(segundaManana);
          setTitleToShow("LA SEGUNDA MAÑANA");
          break;
        case currentHour >= 13 && currentHour < 16:
          setImageToShow(lorre);
          setTitleToShow("MODO17");
          break;
        case currentHour >= 16 && currentHour < 18:
          setImageToShow(diegoCastro);
          setTitleToShow("TODO PASA");
          break;
        case currentHour >= 18 && currentHour < 21:
          setImageToShow(fabioZapata);
          setTitleToShow("CRÓNICA DE LA TARDE");
          break;
        case currentHour >= 21 && currentHour < 23:
          setImageToShow(laNocheDelSur);
          setTitleToShow("LA NOCHE DEL SUR");
          break;
        default:
          setImageToShow(fondoMitre);
          setTitleToShow("RADIO MITRE");
          break;
      }
    } else if (currentDay === "Sábado") {
      switch (true) {
        case currentHour >= 9 && currentHour < 13:
          setImageToShow(laGranManana);
          setTitleToShow("LA GRAN MAÑANA");
          break;
        case currentHour >= 13 && currentHour < 14:
          setImageToShow(la17Parche); //VA RAUL PASARIN, NO ESTA SU FOTO
          setTitleToShow("LA VOZ DE LA MESETA");
          break;
        case currentHour >= 14 && currentHour < 21:
          setImageToShow(fondoFutbol);
          setTitleToShow("FUTBOL EN #LA17");
          break;
        default:
          setImageToShow(fondoMitre);
          setTitleToShow("RADIO MITRE");
          break;
      }
    } else if (currentDay === "Domingo") {
      switch (true) {
        case currentHour >= 9 && currentHour < 12:
          setImageToShow(la17Parche); //VA IMAGEN DE JULIO BALDA
          setTitleToShow("ASÍ ES LA VIDA");
          break;
        case currentHour >= 12 && currentHour < 13:
          setImageToShow(la17Parche); //DICE RESUMEN
          setTitleToShow("PASAN COSAS");
          break;
        case currentHour >= 13 && currentHour < 14:
          setImageToShow(fabioZapata);
          setTitleToShow("LA HORA DE ESPAÑA");
          break;
        case currentHour >= 14 && currentHour < 21:
          setImageToShow(fondoFutbol);
          setTitleToShow("FUTBOL EN #LA17");
          break;
        default:
          setImageToShow(fondoMitre);
          setTitleToShow("RADIO MITRE");
          break;
      }
    }
  }, [currentTime, currentDay, imageToShow]);    

  return (
    <div className="locutor-container">
      <div className="radio-programa">
        <img src={la100} alt="" />
        <h2>{titleToShow}</h2>
      </div>
      <img
        src={imageToShow}
        className={`locutor-img ${imageToShow.includes("la17Parche") ? 'special-width' : ''}`}
        alt="locutor"
        style={{
          width:
            imageToShow.includes("fondoFutbol") ||
            imageToShow.includes("fondoMitre")
              ? "100%"
              : "auto",
          objectFit: "cover",
          
        }}
      />
    </div>
  );
};

export default Locutor;
