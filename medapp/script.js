

// DOM elements
const moleculeSelect = document.getElementById("molecule");
const parameterSelect = document.getElementById("parameter");
const valueTypeSelect = document.getElementById("valueType");
const valueSelect = document.getElementById("value");
const resultDiv = document.getElementById("result");

// Populate molecules dropdown
const molecules = [...new Set(rules.map(r => r.molecule))];
molecules.forEach(m => {
  let opt = document.createElement("option");
  opt.value = m;
  opt.textContent = m;
  moleculeSelect.appendChild(opt);
});



// Update parameters when molecule changes
moleculeSelect.addEventListener("change", () => {
  parameterSelect.innerHTML = "";
  const selectedMol = moleculeSelect.value;
  const params = [...new Set(rules.filter(r => r.molecule === selectedMol).map(r => r.parameter))];
  params.forEach(p => {
    let opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    parameterSelect.appendChild(opt);
  });
  parameterSelect.dispatchEvent(new Event("change"));
  
  
});



// Update value types when parameter changes
parameterSelect.addEventListener("change", () => {
  valueTypeSelect.innerHTML = "";
  const selectedMol = moleculeSelect.value;
  const selectedParam = parameterSelect.value;
  const vals = [...new Set(rules.filter(r => r.molecule === selectedMol && r.parameter === selectedParam).map(r => r.value_condition))];
  vals.forEach(v => {
    let opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    valueTypeSelect.appendChild(opt);
  });
});

valueTypeSelect.addEventListener("change", () => {
  valueSelect.innerHTML = "";
  const selectedMol = moleculeSelect.value;
  const selectedParam = parameterSelect.value;
  const selectedValueType = valueTypeSelect.value;
  const valsnum = [...new Set(rules.filter(r => r.molecule === selectedMol && r.parameter === selectedParam && r.value_condition === selectedValueType ).map(r => r.check))];
  valsnum.forEach(v => {
    let opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    valueSelect.appendChild(opt);
  });
});

// Handle form submission
document.getElementById("protocolForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const mol = moleculeSelect.value;
  const param = parameterSelect.value;
  const valType = valueTypeSelect.value;
  const valNum = valueSelect.value;

  // Find matching rule
  let matchingRule = rules.find(r => 
    r.molecule === mol && 
    r.parameter === param && 
    r.value_condition === valType && 
    r.check === valNum
  );

  if (matchingRule) {
    // Choose color based on protocol
    let colorClass = "neutral";
    if (/ok cure/i.test(matchingRule.protocol) || /full dose/i.test(matchingRule.protocol)) {
      colorClass = "green";
    } else if (/pas de cure/i.test(matchingRule.protocol)) {
      colorClass = "red";
    } else if (/%/.test(matchingRule.protocol)) {
      colorClass = "yellow";
    }

    resultDiv.innerHTML = `
      <h3>Protocol</h3>
      <p class="${colorClass}">${matchingRule.protocol}</p>
      <h3>Toxicities</h3>
      <p>${matchingRule.toxicity || "Not specified"}</p>
      <h3>Remarks</h3>
      <p>${matchingRule.remarks || "None"}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p>No matching protocol found for this input.</p>";
  }
  resultDiv.classList.remove("hidden");
});

