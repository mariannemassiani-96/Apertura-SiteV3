"use client";

import { useState } from "react";
import ProNav from "./ProNav";

const PANELS = ["Catalogue", "Tarifs", "Stock", "Commandes", "SAV"];

const panelContent: Record<string, string[]> = {
  Catalogue: [
    "Fiches techniques par gamme et configuration.",
    "Bibliothèque de finitions et teintes.",
    "Documents d'intégration architecturale."
  ],
  Tarifs: [
    "Grilles tarifaires actualisées par gamme.",
    "Options vitrage et quincailleries.",
    "Remises contractuelles et conditions."
  ],
  Stock: [
    "Disponibilités immédiates en Seconda Vita.",
    "Délais prévisionnels atelier.",
    "Alertes de réapprovisionnement."
  ],
  Commandes: [
    "Suivi des projets en cours.",
    "Historique des échanges et documents.",
    "Statut de livraison et pose."
  ],
  SAV: [
    "Ouverture de tickets et suivi.",
    "Guides d'entretien et réglage.",
    "Support technique prioritaire."
  ]
};

export default function ProDashboard() {
  const [active, setActive] = useState(PANELS[0]);

  return (
    <div className="space-y-6">
      <ProNav items={PANELS} active={active} onChange={setActive} />
      <div className="grid gap-4 md:grid-cols-2">
        {panelContent[active].map((text) => (
          <article key={text} className="rounded-3xl border border-ink/10 bg-white/70 p-6">
            <p className="text-sm text-ink/70 md:text-base">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
