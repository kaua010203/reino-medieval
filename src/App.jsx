import medieval11 from "./assets/medieval11.jpg";
import medieval2 from "./assets/medieval2.jpg";
import medieval3 from "./assets/medieval3.jpg";
import medieval4 from "./assets/medieval4.jpg";
import medieval5 from "./assets/medieval5.jpg";
import medieval6 from "./assets/medieval6.jpg";
import golden from "./assets/golden.mp3";

import vampire1 from "./assets/vampire1.jpg";
import vampire2 from "./assets/vampire2.jpg";
import vampire3 from "./assets/vampire3.jpg";
import vampire4 from "./assets/vampire4.jpg";
import vampire5 from "./assets/vampire5.jpg";
import vampire6 from "./assets/vampire6.jpg";
import sleep from "./assets/sleep.mp3";

import React from "react";
export default function MedievalInvitation() {
  const [step, setStep] = React.useState(0);
  const [accepted, setAccepted] = React.useState(false);
  const [rejected, setRejected] = React.useState(false);
  const [theme, setTheme] = React.useState(null);
  const playMusic = () => {
  const selectedMusic =
    theme === "vampire"
      ? sleep
      : golden;

  const audio = new Audio(selectedMusic);

  audio.volume = 1;

  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 13000);
};
  const resetJourney = () => {
  setTheme(null);
  setStep(0);
  setAccepted(false);
  setRejected(false);
};

const themes = {
  medieval: {
    backgrounds: [
      medieval11,
      medieval2,
      medieval3,
      medieval4,
      medieval5

    ],

    title: "⚔️ Reino Medieval",

    description:
      "Castelos, auroras douradas e jornadas de um cavaleiro."
  },

  vampire: {
    backgrounds: [
      vampire1,
      vampire2,
      vampire3,
      vampire4,
      vampire5
    ],

    title: "🩸 Reino Sombrio",

    description:
      "Salões escarlates, noites eternas e mistérios antigos."
  }
};

  const screens = {
  medieval: [
    {
      title: "Uma nova jornada",
      text: "Em meio aos reinos dourados... um cavaleiro encontrou alguém capaz de transformar simples manhãs em memórias especiais.",
      button: "Prosseguir"
    },

    {
      title: "Entre auroras e castelos",
      text: "Entre auroras douradas e palavras capazes de aquecer até as noites mais frias... este cavaleiro passou a enxergar luz até mesmo nas almas que se dizem obscuras.",
      button: "Continuar jornada"
    },

    {
      title: "Talvez não seja por acaso",
      text: "Talvez algumas presenças sejam como fogo e calor em meio aos dias frios. E talvez certos encontros mereçam continuar além das histórias e pergaminhos.",
      button: "Última missão"
    }
  ],

  vampire: [
    {
      title: "O Reino Sombrio",
      text: "Sob noites estreladas, o luar vermelho e corredores silenciosos... surgiu uma presença capaz de transformar até mesmo a escuridão em algo belo.",
      button: "Adentrar"
    },

    {
      title: "Noite Estrelada",
      text: "Como estrelas que cintilam na noite lunar... certos olhares parecem atravessar até as almas mais fechadas.",
      button: "Continuar"
    },

    {
      title: "Nem toda escuridão é vazia",
      text: "Algumas almas aparecem como luz em meio ao sombrio. Talvez certos encontros estejam destinados a desafiar até a própria noite.",
      button: "Último portal"
    }
  ]
};

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-6">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
    backgroundImage: `url('${
  accepted
    ? theme === "vampire"
      ? vampire5
      : medieval5

    : rejected
    ? theme === "vampire"
      ? vampire6
      : medieval6

    : theme
    ? themes[theme].backgrounds[
        step >= themes[theme].backgrounds.length
          ? themes[theme].backgrounds.length - 1
          : step
      ]
    : medieval11
}')`
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <div className="relative z-10 max-w-2xl w-full">
        <div className="backdrop-blur-none bg-black/5 border border-white/10 rounded-3xl p-6 md:p-12 shadow-lg text-center animate-fadeIn">

          {!theme ? (
  <>
    <h1 className="text-3xl md:text-6xl font-serif mb-8 text-amber-100 leading-tight">
      Escolha vosso reino
    </h1>

    <p className="text-zinc-300 text-lg leading-8 mb-12">
      Antes desta jornada começar... escolha qual reino deseja atravessar.
    </p>

    <div className="grid md:grid-cols-2 gap-6">

      <button
        onClick={() => setTheme("medieval")}
        className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-3xl p-6 text-left transition-all duration-300 hover:scale-[1.02]"
      >
        <h2 className="text-2xl font-serif text-amber-100 mb-3">
          {themes.medieval.title}
        </h2>

        <p className="text-zinc-300 leading-7">
          {themes.medieval.description}
        </p>
      </button>

      <button
        onClick={() => setTheme("vampire")}
        className="bg-red-950/30 border border-red-500/20 hover:bg-red-900/20 rounded-3xl p-6 text-left transition-all duration-300 hover:scale-[1.02]"
      >
        <h2 className="text-2xl font-serif text-red-200 mb-3">
          {themes.vampire.title}
        </h2>

        <p className="text-zinc-300 leading-7">
          {themes.vampire.description}
        </p>
      </button>

    </div>
  </>
) : !accepted && !rejected ? (
  <>
    {step < screens[theme].length ? (
      <>
        <h1 className="text-3xl md:text-5xl font-serif mb-8 tracking-wide text-amber-100">
          {screens[theme][step].title}
        </h1>

        <p className="text-lg md:text-xl leading-9 text-zinc-200 mb-10 font-light">
          {screens[theme][step].text}
        </p>

        <button
          onClick={() => setStep((prev) => prev + 1)}
          className="px-8 py-4 rounded-2xl bg-amber-100 text-black font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
        >
          {screens[theme][step].button}
        </button>
      </>
    ) : (
      <>
        <h1 className="text-5xl md:text-6xl font-serif text-amber-100 mb-8">
          E então...
        </h1>

        <p className="text-xl md:text-2xl leading-8 md:leading-10 text-zinc-100 mb-12">
          {theme === "vampire"
  ? "Aceitaria continuar esta história em um primeiro encontro além das telas e reinos sombrios?"
  : "Aceitaria transformar nossas conversas em um primeiro encontro fora das muralhas digitais?"}
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <button
            onClick={() => setAccepted(true)}
            className="px-8 py-4 rounded-2xl bg-amber-100 text-black font-bold text-lg hover:scale-105 transition-all duration-300"
          >
            {theme === "vampire"
  ? "Aceitar o pacto 🩸"
  : "Aceito a missão ⚔️"}
          </button>

          <button
            onClick={() => setRejected(true)}
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            {theme === "vampire"
  ? "Temo a escuridão 🌙"
  : "Preciso pensar 👀"}
          </button>
        </div>
      </>
    )}
  </>
) : rejected ? (

  <div className="animate-fadeIn">

    {theme === "vampire" ? (

      <>
        <div className="text-7xl mb-6">
          🌙
        </div>

        <h1 className="text-3xl font-serif text-red-200 mb-6">
          Oh... tudo bem.
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 leading-8 md:leading-9 max-w-xl mx-auto">
          Nem todos estão prontos para atravessar os corredores da noite.
          <br /><br />
          Ainda assim... esta criatura sombria agradece por ter chegado até aqui.
        </p>
        <p className="text-sm text-zinc-400 mt-8">
  Se desejar revelar qual destino escolhestes... 
  envie a este ser sombrio um fragmento de vossa decisão (um print da sua escolha kk). 🩸
</p>
        <button
  onClick={resetJourney}
  className="mt-10 px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
>
  Retornar ao início 👑
</button>


      </>

    ) : (

      <>
        <div className="text-7xl mb-6">
          ⚔️
        </div>

        <h1 className="text-5xl font-serif text-amber-100 mb-6">
          Compreendo, princesa.
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 leading-8 md:leading-9 max-w-xl mx-auto">
          Nem toda jornada precisa começar imediatamente.
          <br /><br />
          Ainda assim... este cavaleiro agradece por ter caminhado até aqui.
        </p>
        <p className="text-sm text-zinc-400 mt-8">
  E caso deseje revelar ao autor desta jornada o desfecho escolhido...
  envie-lhe um pequeno fragmento desta história (um print da sua escolha kk). 📜
</p>
        <button
  onClick={resetJourney}
  className="mt-10 px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
>
  Retornar ao início 👑
</button>

      </>

    )}

  </div>

) : (

  <div className="animate-fadeIn">
              <div className="text-7xl mb-6">🌹</div>

              <h1 className="text-5xl font-serif text-amber-100 mb-6">
                {theme === "vampire"
  ? "O pacto foi selado."
  : "Aceito."}
              </h1>

              <p className="text-lg md:text-xl text-zinc-200 leading-8 md:leading-9 px-2">
                {theme === "vampire"
  ? "Talvez este seja apenas o começo de uma história além dos reinos sombrios digitais."
  : "Então que esta seja apenas a primeira página de uma bela história."}
              </p>
              <p className="text-sm text-zinc-400 mt-8">
  E caso deseje revelar ao autor desta jornada o desfecho escolhido...
  envie-lhe um pequeno fragmento desta história (um print da sua escolha kk). 📜
</p>
              <div className="flex flex-col items-center gap-4 mt-10">

  <button
    onClick={resetJourney}
    className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
  >
    Retornar ao início 👑
  </button>

  <button
    onClick={playMusic}
    className="px-8 py-4 rounded-2xl border border-red-500/20 hover:bg-white/10 transition-all duration-300"
  >
    Clique aqui e aumente um pouco o volume do celular 🎵
  </button>

</div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease;
        }
      `}</style>
    </div>
  );
}