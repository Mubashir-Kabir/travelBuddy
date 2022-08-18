const bike = {
  name: "KTM-RC",
  capacity: 2,
  fare: 2,
  imgUrl: "./images/card-bike.jpg",
  description:
    "This is a wider card with supporting text below as a   natural lead in to additional content. This content is a little bit longer",
};
const bus = {
  name: "Hanif-Volvo",
  capacity: 36,
  fare: 3,
  imgUrl: "./images/card-bus.jpg",
  description:
    "This is a wider card with supporting text below as a   natural lead in to additional content. This content is a little bit longer",
};
const car = {
  name: "BMW-m100",
  capacity: 4,
  fare: 4,
  imgUrl: "./images/card-car.jpg",
  description:
    "This is a wider card with supporting text below as a   natural lead in to additional content. This content is a little bit longer",
};
const vehicles = [bike, bus, car];

function displayCard(obj) {
  const srobj = JSON.stringify(obj);
  const card = document.createElement("div");
  card.innerHTML = `
        <div class="col card mb-3 mx-auto" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${obj.imgUrl}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Transport Type: ${obj.name} </h5>
                  <p class="card-text">
                    ${obj.description}
                  </p>
                  <p class="card-text">
                    Capacity:
                    <small class="text-muted">${obj.capacity}</small>
                  </p>
                  <p class="card-text">
                    Fare per kilo:
                    <small class="text-muted">${obj.fare}</small>
                  </p>
                  <p class="card-text text-end">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onclick='modalBody(${srobj})'
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Book Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        `;

  document.getElementById("mainContainer").appendChild(card);
}
for (const vehicle of vehicles) {
  displayCard(vehicle);
}

// ===================================================

function modalBody(obj) {
  document.getElementById("modalBody").innerHTML = "";
  const mbody = document.createElement("div");
  mbody.innerHTML = `
    <div class="card text-bg-dark">
                <img
                  src="${obj.imgUrl}"
                  class="card-img"
                  style="filter: brightness(0.3)"
                  alt="..."
                />
                <div
                  class="card-img-overlay d-flex flex-column justify-content-center align-items-center"
                >
                  <h5 class="card-title">${obj.name}</h5>
                  <p class="card-text">
                    ${obj.description}
                  </p>
                  <div class="d-flex">
                    <p class="card-text me-3">
                      Capacity:
                      <small class="">${obj.capacity} </small>
                    </p>
                    <p class="card-text">
                      Fare per kilo:
                      <small class="">${obj.fare}</small>
                    </p>
                  </div>

                  <p class="card-text">
                    <input
                      type="text"
                      placeholder="Distance"
                      class="rounded"
                      id="dInput"
                    />
                  </p>
                  <p class="card-text">
                    <input
                      type="text"
                      placeholder="Required vehicle"
                      class="rounded"
                      id="rInput"
                    />
                  </p>
                  <p class="card-text" >Total Fare: <span id="totalFare"></span> </p>
                  <p class="card-text w-100 mt-5 d-flex justify-content-evenly">
                    <button class="btn btn-outline-light" onclick='estimate(${JSON.stringify(
                      obj
                    )})' >Estimate</button>
                    <button class="btn btn-outline-light" onclick='book(${JSON.stringify(
                      obj
                    )})' >Book</button>
                  </p>
                </div>
              </div>
    `;
  document.getElementById("modalBody").appendChild(mbody);
}

function estimate(obj) {
  const fare =
    parseFloat(document.getElementById("dInput").value) *
    parseFloat(document.getElementById("rInput").value) *
    obj.fare;
  document.getElementById("totalFare").innerText = fare;
}
function book(obj) {
  const fare =
    parseFloat(document.getElementById("dInput").value) *
    parseFloat(document.getElementById("rInput").value) *
    obj.fare;
  document.getElementById("modalBody").innerHTML = `
    <div class="card text-bg-dark">
                <img
                  src="${obj.imgUrl}"
                  class="card-img"
                  style="filter: brightness(0.3)"
                  alt="..."
                />
                <div
                  class="card-img-overlay d-flex flex-column justify-content-center align-items-center"
                >
                  <h5 class="card-title">${obj.name}</h5>
                  <p class="card-text">
                    ${obj.description}
                  </p>
                  <div class="d-flex">
                    <p class="card-text me-3">
                      Capacity:
                      <small class="">${obj.capacity} </small>
                    </p>
                    <p class="card-text">
                      Fare per kilo:
                      <small class="">${obj.fare}</small>
                    </p>
                  </div>
                  <p class="card-text" >Total Fare: <span id="totalFare">${fare}</span> </p>
                  <p class="card-text" >Successfully Booked!!</p>
                  
                </div>
              </div>
    
    `;
}
