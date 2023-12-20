import React, { useState } from "react";
import "./stylee.css";

const GuessGame = () => {
  const [hariult, setHariult] = useState("");

  const asuult1 = {
    name: "One piece",
    emoji: "🏴‍☠️👒🍖🐒⛵️",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Demon slayer",
      "Attack on titan",
      "Death note",
      "Jujutsu Kaisen",
      "One Punch man",
      "Hunter x Hunter",
    ],
  };
  const asuult2 = {
    name: "Naruto",
    emoji: "🦊🍜🍥🌀",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Attack on titan",
      "Demon slayer",
      "Death note",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "One Punch man",
    ],
  };
  const asuult3 = {
    name: "Demon slayer",
    emoji: "👺🌊⚔️⚡️👹🌀",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Attack on titan",
      "Demon slayer",
      "Death note",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "One Punch man",
    ],
  };
  const asuult4 = {
    name: "Attack on titan",
    emoji: "⚔️🔰🐎🗝🧣",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Attack on titan",
      "Demon slayer",
      "Death note",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "One Punch man",
    ],
  };
  const asuult5 = {
    name: "Death note",
    emoji: "📓🍎📝⚰️💀",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Attack on titan",
      "Demon slayer",
      "Death note",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "One Punch man",
    ],
  };
  const asuult6 = {
    name: "Jujutsu Kaisen",
    emoji: "👹🔨🐼⛩🦹🏼‍♂️",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Attack on titan",
      "Demon slayer",
      "Death note",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "One Punch man",
    ],
  };
  const asuult7 = {
    name: "One Punch man",
    emoji: "1️⃣👊🏻💢👨🏻‍🦲💯",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Attack on titan",
      "Demon slayer",
      "Death note",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "One Punch man",
    ],
  };
  const asuult8 = {
    name: "Hunter x Hunter",
    emoji: "🎣⛓🃏🌃🐜",
    hariuultuud: [
      "Naruto",
      "One piece",
      "Attack on titan",
      "Demon slayer",
      "Death note",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "One Punch man",
    ],
  };
  const asuultuud = [
    asuult1,
    asuult2,
    asuult3,
    asuult4,
    asuult5,
    asuult6,
    asuult7,
    asuult8,
  ];
  const [asuultiindugaar, setasuultiindugaar] = useState(0);
  const asuult = asuultuud[asuultiindugaar];
  const [togloomDuuslaa, settogloomDuuslaa] = useState(false);
  const [Onoo, setOnoo] = useState(0);

  const handleClick = (hariult) => {
    console.log("hariult", hariult);
    setHariult(hariult);
    if (hariult === asuult.name) {
      setOnoo((umnuhOnoo) => umnuhOnoo + 1);
    }
    setTimeout(() => {
      setasuultiindugaar((asuultiindugaar) => {
        const daraagiinDugaar = asuultiindugaar + 1;
        if (daraagiinDugaar >= asuultuud.length) {
          settogloomDuuslaa(true);
          return 0;
        } else return daraagiinDugaar;
      });
      setHariult("");
    }, 1500);
  };
  const dahijTogloh = () => {
    setasuultiindugaar(0);
    settogloomDuuslaa(false);
    setOnoo(0);
  };
  return (
    <div className="container">
      {togloomDuuslaa && (
        <div className="main">
          <h1>Game over</h1>
          <h1>Avah onoo: {asuultuud.length}</h1>
          <h1>avsan onoo: {Onoo}</h1>
          <button onClick={() => dahijTogloh()}>Return</button>
        </div>
      )}
      {!togloomDuuslaa && (
        <div className="main">
          <h1 className="title">Guess the emoji: </h1>
          <h2 className="emoji"> {asuult.emoji} </h2>
          <div className="answers">
            {asuult.hariuultuud.map((songolt, i) => (
              <button
                className={
                  hariult === songolt &&
                  (asuult.name === hariult ? "zuv" : "buruu")
                }
                disabled={hariult}
                onClick={() => handleClick(songolt)}
              >
                {songolt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GuessGame;
