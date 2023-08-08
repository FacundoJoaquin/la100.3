import { useEffect, useState } from "react";
import la100 from "../../assets/la100.png";
import "./locutor.css";
import messiImage from "../../assets/messi.png";
import cristianRoldan from "../../assets/cristianRoldan.png";
import christianDevia from "../../assets/christianDevia.png";
import diegoCastro from "../../assets/diegoCastro.png";
import fabioZapata from "../../assets/fabioZapata.png";
import paolaBrossy from "../../assets/paolaBrossy.png";
import robertoSuárez from "../../assets/robertoSuárez.png";

const Locutor = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [imageToShow, setImageToShow] = useState("");
  const [titleToShow, setTitleToShow] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

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
    console.log(currentDay);
  }, [currentTime, currentDay]);

  useEffect(() => {
    const currentHour = currentTime.getHours();

    if (currentDay && currentDay !== "Sábado" && currentDay !== "Domingo") {
      switch (true) {
        case currentHour >= 7 && currentHour < 10:
          setImageToShow(christianDevia);
          setTitleToShow("EL QUINTO PODER");
          break;
        case currentHour >= 10 && currentHour < 13:
          setImageToShow(cristianRoldan);
          setTitleToShow("LA SEGUNDA MAÑANA");
          break;
        case currentHour >= 13 && currentHour < 16:
          setImageToShow(robertoSuárez);
          setTitleToShow("COTIDIANO");
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
          setImageToShow(paolaBrossy);
          setTitleToShow("LA NOCHE DEL SUR");
          break;
        default:
          setImageToShow(diegoCastro); //FALTA ASSET DE RADIO MITRE
          setTitleToShow("RADIO MITRE");
          break;
      }
    } else if (currentDay === "Sábado") {
      switch (true) {
        case currentHour >= 9 && currentHour < 13:
          setImageToShow(diegoCastro);
          setTitleToShow("LA GRAN MAÑANA");
          break;
        case currentHour >= 13 && currentHour < 14:
          setImageToShow(messiImage); //VA RAUL PASARIN, NO ESTA SU FOTO
          setTitleToShow("LA VOZ DE LA MESETA");
          break;
        case currentHour >= 14 && currentHour < 21:
          setImageToShow(messiImage); //VA IMAGEN DE FUTBOL EN LA17
          setTitleToShow("FUTBOL EN #LA17");
          break;
        case currentHour >= 21 && currentHour < 24:
          setImageToShow(messiImage);
          setTitleToShow("RADIO MITRE");
          break;
        default:
          setImageToShow(diegoCastro); //FALTA ASSET DE RADIO MITRE
          setTitleToShow("RADIO MITRE");
          break;
      }
    } else if (currentDay === "Domingo") {
      switch (true) {
        case currentHour >= 9 && currentHour < 12:
          setImageToShow(messiImage); //VA IMAGEN DE JULIO BALDA
          setTitleToShow("ASÍ ES LA VIDA");
          break;
        case currentHour >= 12 && currentHour < 13:
          setImageToShow(messiImage); //DICE RESUMEN
          setTitleToShow("PASAN COSAS");
          break;
        case currentHour >= 13 && currentHour < 14:
          setImageToShow(fabioZapata);
          setTitleToShow("LA HORA DE ESPAÑA");
          break;
        case currentHour >= 14 && currentHour < 21:
          setImageToShow(fabioZapata); //IMAGEN DE FUTBOL
          setTitleToShow("FUTBOL EN #LA17");
          break;
        default:
          setImageToShow(diegoCastro); //FALTA ASSET DE RADIO MITRE
          setTitleToShow("RADIO MITRE");
          break;
      }
    }
  }, [currentTime, currentDay]);

  return (
    <div className="locutor-container">
      <div className="radio-programa">
        <img src={la100} alt="" />
        <h2>{titleToShow}</h2>
      </div>
      <img src={imageToShow} className="locutor-img" alt="locutor" />
    </div>
  );
};

export default Locutor;
