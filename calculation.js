// Triangle calculation
function calculationTriangle() {
  //   base
  const base = inputId("base");

  //   height
  const height = inputId("height");

  //   calculation
  const areaTotal = 0.5 * base * height;

  //   area
  const triangleArea = getArea("area", areaTotal);

  // entry
  addToCalculationEntry("Triangle", areaTotal);
}

// Rectangle calculation
function calculationRectangle() {
  //   width
  const width = inputId("width");

  //   length
  const length = inputId("length");

  //   calculation
  const areaTotal = width * length;

  //   area
  const rectangleArea = getArea("area2", areaTotal);

  // entry
  addToCalculationEntry("Rectangle", areaTotal);
}

// Parallelogram
function calculationParallelogram() {
  //   base
  const paraBase = inputId("para-base");

  //   Height
  const paraHeight = inputId("para-height");

  //   calculation
  const areaTotal = paraBase * paraHeight;

  //   area
  const paraArea = getArea("para-area", areaTotal);

  // entry
  addToCalculationEntry("Parallelogram", areaTotal);
}

// Rhombus
function calculationRhombus() {
  //   base
  const romBase = inputId("rom-base");

  //   Height
  const romHeight = inputId("rom-height");

  //   calculation
  const areaTotal = 0.5 * romBase * romHeight;

  //   area
  const romArea = getArea("rom-area", areaTotal);

  // entry
  addToCalculationEntry("Rhombus", areaTotal);
}

// Pentagon
function calculationPentagon() {
  //   base
  const penBase = inputId("pen-base");

  //   Height
  const penHeight = inputId("pen-height");

  //   calculation
  const areaTotal = 0.5 * penBase * penHeight;

  //   area
  const penArea = getArea("pen-area", areaTotal);

  // entry
  addToCalculationEntry("Pentagon", areaTotal);
}

// Ellipse
function calculationEllipse() {
  //   base
  const ellBase = inputId("ell-base");

  //   Height
  const ellHeight = inputId("ell-height");

  //   calculation
  const areaTotal = Math.PI * ellBase * ellHeight;
  const areaTwoDecimal = areaTotal.toFixed(2);

  //   area
  const ellArea = getArea("ell-area", areaTwoDecimal);

  // entry
  addToCalculationEntry("Ellipse", areaTwoDecimal);
}

// adding to area
function addToCalculationEntry(areaType, area) {
  const areaEntry = document.getElementById("area-entry");

  // create child
  const h1 = document.createElement("h1");

  // create class on chile
  h1.classList.add("my-4");
  h1.classList.add("mx-4");

  // count elements
  const count = areaEntry.childElementCount;

  // set value
  h1.innerHTML = `${
    count + 1
  }. ${areaType} : ${area} cm<sup>2</sup> <button onclick="remove()" class="btn btn-sm btn-success">Remove All</button> `;

  // append child
  areaEntry.appendChild(h1);
}
function remove() {
  const areaEntry = document.getElementById("area-entry");
  areaEntry.innerText = "";
}
