const features = ["mass", "block", "critical"];

function funcCalc() {
  let weight = 1;
  for (let step = 0; step < features.length; step++) {
    weight *= document.getElementById(features[step]).value;
  }
    document.getElementById("total").innerHTML = weight
}

const inputElements = document.querySelectorAll('[data-action="calculate"]');
inputElements.forEach((element) => {
    element.addEventListener('change', window.funcCalc)
});

function copyToClipboard() {
  let area = document.createElement('textarea');

  document.body.appendChild(area);
    area.value = document.getElementById("total").textContent;
    area.select();
    document.execCommand("copy");
  document.body.removeChild(area);
}

const copyElement = document.querySelectorAll('[data-action="copyElement"]');
copyElement.forEach((element) => {
    element.addEventListener('click', window.copyToClipboard)
});


// Description
function copyDescriptionToClipboard() {
  let description = "*Weight " + document.getElementById("total").textContent + "*\n";

  for (let step = 0; step < 3; step++) {
    let feature = document.getElementById(features[step]);
    description += "\n" + features[step] + ": " + feature.value;
  }

  let area = document.createElement('textarea');
  document.body.appendChild(area);
  area.value = description;
  area.select();

  document.execCommand("copy");
  document.body.removeChild(area);
}

const copyDescriprionElement = document.querySelectorAll('[data-action="copyDescription"]');
copyDescriprionElement.forEach((element) => {
    element.addEventListener('click', window.copyDescriptionToClipboard)
});
