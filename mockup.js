const positionData = {
  novo: {
    name: "Novo Nordisk",
    statusText: "Review trigger",
    statusClass: "status-pill status-pill-attention",
    thesis: "Drifting",
    thesisClass: "metric-value metric-value-drift",
    decisions: "3 decisions",
    decisionClass: "metric-value metric-value-action",
    concentration: "Needs action",
    concentrationClass: "metric-value metric-value-risk",
    change:
      "Pricing pressure weakened part of the original margin case and triggered a policy review.",
    action:
      "Re-underwrite the case, resolve the review, and decide whether sizing still fits.",
  },
  googl: {
    name: "Alphabet",
    statusText: "Drift review",
    statusClass: "status-pill status-pill-drift",
    thesis: "Drifting",
    thesisClass: "metric-value metric-value-drift",
    decisions: "2 decisions",
    decisionClass: "metric-value metric-value-action",
    concentration: "Within range",
    concentrationClass: "metric-value",
    change:
      "Ad-cycle recovery is weaker than the original review expected and now qualifies as thesis drift.",
    action:
      "Run the drift review and confirm whether capital still belongs here.",
  },
  tsmc: {
    name: "TSMC",
    statusText: "Sizing review",
    statusClass: "status-pill status-pill-risk",
    thesis: "Holding",
    thesisClass: "metric-value",
    decisions: "1 decision",
    decisionClass: "metric-value metric-value-action",
    concentration: "High",
    concentrationClass: "metric-value metric-value-risk",
    change:
      "Position quality remains strong, but sizing and related overlap moved close to the policy limit.",
    action:
      "Review whether sizing should be trimmed before the breach becomes a higher-priority action.",
  },
};

const detailName = document.getElementById("detail-name");
const detailStatus = document.getElementById("detail-status");
const detailThesis = document.getElementById("detail-thesis");
const detailDecisions = document.getElementById("detail-decisions");
const detailConcentration = document.getElementById("detail-concentration");
const detailChange = document.getElementById("detail-change");
const detailAction = document.getElementById("detail-action");

function setActivePosition(key) {
  const data = positionData[key];
  if (!data) return;

  detailName.textContent = data.name;
  detailStatus.textContent = data.statusText;
  detailStatus.className = data.statusClass;
  detailThesis.textContent = data.thesis;
  detailThesis.className = data.thesisClass;
  detailDecisions.textContent = data.decisions;
  detailDecisions.className = data.decisionClass;
  detailConcentration.textContent = data.concentration;
  detailConcentration.className = data.concentrationClass;
  detailChange.textContent = data.change;
  detailAction.textContent = data.action;

  document.querySelectorAll(".portfolio-row-button").forEach((button) => {
    button.classList.toggle("portfolio-row-active", button.dataset.position === key);
  });
}

document.querySelectorAll(".toolbar-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const view = tab.dataset.view;
    document.querySelectorAll(".toolbar-tab").forEach((button) => {
      button.classList.toggle("toolbar-tab-active", button === tab);
    });
    document.querySelectorAll(".mock-view").forEach((panel) => {
      panel.classList.toggle("mock-view-active", panel.dataset.viewPanel === view);
    });
  });
});

document.querySelectorAll(".portfolio-row-button").forEach((button) => {
  button.addEventListener("click", () => {
    setActivePosition(button.dataset.position);
  });
});

setActivePosition("novo");
