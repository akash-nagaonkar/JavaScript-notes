// Data
var data = [
  {
    name: "Dark Women",
    image: "./assets/image.jpg",
  },
  {
    name: "Dark Man",
    image: "./assets/image2.jpg",
  },
  {
    name: "Exquisite",
    image: "./assets/image3.jpg",
  },
  {
    name: "Wolverine",
    image: "./assets/image4.jpg",
  },
  {
    name: "Blue Tech City",
    image: "./assets/Sketch.jpg",
  },
  {
    name: "Blue Design",
    image: "./assets/BlueDesign.jpg",
  },
];

const showTheCards = () => {
  var clutter = "";
  data.forEach((obj) => {
    clutter += `
    <div class="box">
    <img class="cursor-pointer" src="${obj.image}" alt="image" />
    </div>
    <div class="caption">${obj.name}</div>
    `;
  });

  const container = document.querySelector(".container");
  container.innerHTML = clutter;
};

const handleSearch = () => {
  const input = document.querySelector("#searchinput");
  const overlay = document.querySelector(".overlay");

  input.addEventListener("focus", () => {
    overlay.style.display = "block";
  });
  input.addEventListener("blur", () => {
    overlay.style.display = "none";
  });

  input.addEventListener("input", (e) => {
    const filteredArray = data.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );

    var clutter = "";
    const searchData = document.querySelector(".searchdata");

    filteredArray.forEach((obj) => {
      clutter += `
        <div class="res flex px-8 py-3">
        <i class="ri-search-line font-semibold mr-5"></i>
        <h3 class="font-semibold">${obj.name}</h3>
        </div>
        `;
    });

    searchData.style.display = "block"
    searchData.innerHTML = clutter;
  });
};

handleSearch();
showTheCards();
