import { useState } from "react";
import "./ProductDescription.css";

const tabs = ["Descrição", "Especificações", "Avaliações (12E)", "Perguntas"];

export default function ProductTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={active === i ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {active === 0 && (
          <>
            <p>
              O Fone de Ouvido Bluetooth Wave oferece som de alta qualidade, conforto e bateria de longa
              duração para o Bluetooth 5.3, NC, compatível com multimídia, bateria com 30h de duração.
              Microfone integrado. Dobrável e portátil.
            </p>
            <p>- Bateria com até 30% de duração</p>
          </>
        )}
      </div>
    </div>
  );
}