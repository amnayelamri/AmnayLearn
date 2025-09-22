// Extracted from your Excel (Bléomycine rules + toxicities + remarks)
const rules = [

  { 
    molecule: "---", 
    parameter: "---", 
    value_condition: "---", 
    check: "---", 
    protocol: "---",
    toxicity: "---",
    remarks: "---"
  },
{ 
    molecule: "Bléomycine", 
    parameter: "---", 
    value_condition: "---", 
    check: "---", 
    protocol: "---",
    toxicity: "---",
    remarks: "---"
  },
  { 
    molecule: "Bléomycine", 
    parameter: "NFS", 
    value_condition: "---", 
    check: "---", 
    protocol: "---",
    toxicity: "---",
    remarks: "---"
  },
    
  { 
    molecule: "Bléomycine", 
    parameter: "NFS", 
    value_condition: "HB", 
    check: "<8", 
    protocol: "Pas de cure - transfusion",
    toxicity: "Syndrome pseudo-grippal (fièvre à 24h), Nausées/Vomissements, Réactions cutanées",
    remarks: "Fibrose pulmonaire possible: surveiller EFR et radios thoraciques"
  },
  { 
    molecule: "Bléomycine", 
    parameter: "NFS", 
    value_condition: "PNN", 
    check: "<1500", 
    protocol: "Pas de cure",
    toxicity: "Risque infectieux élevé si neutropénie",
    remarks: "Surveiller NFS régulièrement"
  },
  { 
    molecule: "Bléomycine", 
    parameter: "NFS", 
    value_condition: "PQT", 
    check: ">100000", 
    protocol: "OK cure",
    toxicity: "Toxicité pulmonaire cumulative",
    remarks: "Bilan avant 1ère cure : NFS, EFR, bilan rénal"
  },
  { 
    molecule: "Bléomycine", 
    parameter: "Bilan hépathique", 
    value_condition: "ASAT", 
    check: "No adjustment required", 
    protocol: "OK cure",
    toxicity: "Pas de toxicité hépatique spécifique",
    remarks: "Fibrose pulmonaire: PNP interstitielle = BIP Dose cumulative de 300mg  Fièvre/tachypnée/cyanose/crépitants des bases Rétraction costale/frottement pleural "
  },
  { 
    molecule: "Bléomycine", 
    parameter: "Bilan hépathique", 
    value_condition: "BT", 
    check: "No adjustment required", 
    protocol: "OK cure",
    toxicity: "Pas de toxicité hépatique spécifique",
    remarks: "Fibrose pulmonaire: PNP interstitielle = BIP Dose cumulative de 300mg  Fièvre/tachypnée/cyanose/crépitants des bases Rétraction costale/frottement pleural "
  },
  { 
    molecule: "Bléomycine", 
    parameter: "Bilan hépathique", 
    value_condition: "ALAT", 
    check: "No adjustment required", 
    protocol: "OK cure",
    toxicity: "Pas de toxicité hépatique spécifique",
    remarks: "Fibrose pulmonaire: PNP interstitielle = BIP Dose cumulative de 300mg  Fièvre/tachypnée/cyanose/crépitants des bases Rétraction costale/frottement pleural "
  },
  { 
    molecule: "Bléomycine", 
    parameter: "Bilan rénal: Clairance", 
    value_condition: "---", 
    check: "", 
    protocol: "---",
    toxicity: "---",
    remarks: "---"
  },
  { 
    molecule: "Bléomycine", 
    parameter: "Bilan rénal: Clairance", 
    value_condition: "CC", 
    check: ">50", 
    protocol: "Full dose",
    toxicity: "Risque néphrotoxicité en cas d’insuffisance",
    remarks: "Adapter la dose si clairance <50"
  },
  { 
    molecule: "Bléomycine", 
    parameter: "Bilan rénal: Clairance", 
    value_condition: "CC", 
    check: "40-50", 
    protocol: "70% de la dose",
    toxicity: "Risque accru d’accumulation rénale",
    remarks: "Réduire la dose selon clairance"
  }
];
