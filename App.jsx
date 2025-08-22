import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const rows = Array.from({ length: 7 });

  return (
    <section className="w-[360px] h-[360px] rounded-[20px] shadow-[inset_0_0_20px_0_rgba(255,255,255,0.25)] relative overflow-hidden transition-[box-shadow] duration-400 ease-in-out hover:shadow-[inset_0_0_150px_0_rgba(255,255,255,0.4)]">
      <article className="absolute left-0 top-0 flex flex-col w-full h-full overflow-hidden z-[-1] rotate-[30deg] scale-[1.4]">
        {rows.map((_, i) => (
          <aside
            key={i}
            className="w-full flex-grow relative top-[-4px] bg-[url('assets/band.png')] bg-repeat-x overflow-hidden animate-move"
            style={{ "--d": i }}
          ></aside>
        ))}
      </article>
      <style>
        {`
          @keyframes move {
            0% { background-position-x: 0; }
            100% { background-position-x: -837px; }
          }
          .animate-move {
            animation: move 20s linear infinite;
            animation-delay: calc(var(--d) * -3.5s);
          }
        `}
      </style>
    </section>
  );
};

const rootEl = document.getElementById("root") || (() => {
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  return el;
})();

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
