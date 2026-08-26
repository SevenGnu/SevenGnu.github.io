"use client";

import { useState } from "react";

const modes = [
  {
    id: "context",
    label: "Context",
    kicker: "Context layer",
    title: "Ground the model",
    copy: "Raw engineering activity becomes a traceable source packet before a prompt is ever assembled.",
    stats: [
      ["Source", "REST / WIQL"],
      ["Boundary", "On-prem"],
      ["Output", "Ticket context"],
    ],
  },
  {
    id: "reasoning",
    label: "Reasoning",
    kicker: "Reasoning layer",
    title: "Constrain the model",
    copy: "Local inference works inside a prompt contract: concise, repeatable, business-readable, and free of employee names.",
    stats: [
      ["Model", "Llama 3.2"],
      ["Runtime", "Ollama"],
      ["Control", "Prompt rules"],
    ],
  },
  {
    id: "trust",
    label: "Trust",
    kicker: "Control layer",
    title: "Keep proof attached",
    copy: "Security, evidence links, deterministic checks, and human approval surround the generated result.",
    stats: [
      ["Secrets", "Key Vault"],
      ["Evidence", "Linked"],
      ["Decision", "Human"],
    ],
  },
];

const nodes = [
  ["Azure DevOps", "context", "node-one"],
  ["Deterministic logic", "context", "node-two"],
  ["Local LLM", "reasoning", "node-three"],
  ["Prompt contract", "reasoning", "node-four"],
  ["Key Vault", "trust", "node-five"],
  ["Human review", "trust", "node-six"],
];

export function SystemLab() {
  const [activeId, setActiveId] = useState("context");
  const [bent, setBent] = useState(false);
  const active = modes.find((mode) => mode.id === activeId) ?? modes[0];

  return (
    <section className="lab-shell section-shell" aria-labelledby="lab-title">
      <div className="lab-heading">
        <div>
          <p className="eyebrow">Interactive system lab</p>
          <h2 id="lab-title">Pull the architecture apart.</h2>
        </div>
        <p>Switch layers to see what surrounds a useful enterprise AI result. Then bend the system just because you can.</p>
      </div>

      <div className="material-lab" data-mode={activeId} data-bent={bent ? "true" : "false"}>
        <div className="lab-toolbar">
          <div className="mode-group" role="group" aria-label="Architecture layer">
            {modes.map((mode) => (
              <button
                type="button"
                key={mode.id}
                className={activeId === mode.id ? "is-active" : undefined}
                aria-pressed={activeId === mode.id}
                onClick={() => {
                  setActiveId(mode.id);
                  setBent(false);
                }}
              >
                <i aria-hidden="true" />
                {mode.label}
              </button>
            ))}
          </div>
          <button className="flux-button" type="button" aria-pressed={bent} onClick={() => setBent((value) => !value)}>
            <span aria-hidden="true">✦</span>
            {bent ? "Settle the system" : "Bend the system"}
          </button>
        </div>

        <div className="signal-stage">
          <div className="stage-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="system-core" aria-live="polite">
            <span>{active.kicker}</span>
            <strong>{active.title}</strong>
            <p>{active.copy}</p>
          </div>
          {nodes.map(([label, layer, className]) => (
            <div className={`system-node ${className}`} data-layer={layer} key={label}>
              <i aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
          <div className="stage-spark spark-one" aria-hidden="true">✦</div>
          <div className="stage-spark spark-two" aria-hidden="true">✦</div>
          <div className="stage-spark spark-three" aria-hidden="true">✦</div>
        </div>

        <div className="lab-readout">
          {active.stats.map(([label, value]) => (
            <div key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
        </div>
      </div>
    </section>
  );
}
