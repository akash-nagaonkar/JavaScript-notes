const products = [
  {
    name: "Fashion pack",
    headline: "Exquisite",
    image: "./assets/image2.jpg",
    price: "15,000",
  },
  {
    name: "Blue city sketch",
    headline: "Sketch",
    image: "./assets/Sketch.jpg",
    price: "20,000",
  },
  {
    name: "Blue design",
    headline: "Design",
    image: "./assets/BlueDesign.jpg",
    price: "10,000",
  },
];

const popular = [
  {
    name: "Fashion pack",
    headline: "Exquisite",
    image: "./assets/image2.jpg",
    price: "15,000",
  },
  {
    name: "Blue city sketch",
    headline: "Sketch",
    image: "./assets/Sketch.jpg",
    price: "20,000",
  },
  {
    name: "Blue design",
    headline: "Design",
    image: "./assets/BlueDesign.jpg",
    price: "10,000",
  },
];

var cart = [];

const addProducts = () => {
  var clutter = "";
  products.forEach((item, index) => {
    clutter += `
    <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${item.image}" alt="image"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${item.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${item.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377;${item.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
                            <i data-index="${index}" class="add ri-add-line"></i></button>
                        </div>
                </div>
            </div>
    `;

    document.querySelector(".products").innerHTML = clutter;
  });
};

const addPopularProducts = () => {
  var clutter = "";
  popular.forEach((item) => {
    clutter += `
    <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
      <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
            src="${item.image}"
            alt="">
      </div>
      <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${item.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${item.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${item.price}</h4>
      </div>
    </div>
        `;
    document.querySelector(".populars").innerHTML = clutter;
  });
};

const addToCart = () => {
  document.querySelector(".products").addEventListener("click", (details) => {
    if (details.target.classList.contains("add")) {
      cart.push(products[details.target.dataset.index]);
      console.log(cart);
    }
  });
};

addPopularProducts();
addProducts;
addToCart();
