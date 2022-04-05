const menu = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "img/buttermilk_pancakes.jpg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "img/diner-double.jpg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 3,
      title: "Oreo Milkshake",
      category: "snakes",
      price: 18.99,
      img: "img/oreo-milkshake-4.jpg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 4,
      title: "American Classic",
      category: "lunch",
      price: 12.99,
      img: "img/american-classic-burger.jpg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 5,
      title: "chicken cordon bleu",
      category: "lunch",
      price: 18.99,
      img: "img/chicken-cordon-quesa-still-5-1521841408.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 6,
      title: "Egg Attack",
      category: "lunch",
      price: 12.99,
      img: "img/egg-attack.jpeg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 7,
      title: "godzilla milkshake",
      category: "snakes",
      price: 6.99,
      img: "img/milkshake.jpg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 8,
      title: "Sushi Boat",
      category: "dinner",
      price: 29.99,
      img: "img/sushi_boat.jpg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 9,
      title: "Steak",
      category: "dinner",
      price: 34.99,
      img: "img/steak.jpg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
    {
      id: 10,
      title: "Bacon and egg",
      category: "breakfast",
      price: 7.99,
      img: "img/Bacon_and_egg.jpeg",
      description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ullam eum officia maiores officiis suscipit ex. Quas error, et ab,optio sunt unde sit saepe eveniet id provident obcaecati expedita.",
    },
  ];


  const sectionCenter = document.querySelector(".section-center");
  const btnGroup = document.querySelector(".buttons-group");
  const filterBtns = document.querySelectorAll(".Btn");
  window.addEventListener('load',()=>{
    displayMenuItem(menu);
    displayMenuButtons();
  })


  function displayMenuItem(menuItem){
    let displayMenu = menuItem.map(function(item){
        return`
        <article class="menu-item">
          <div class="img">
            <img class="photo" src=${item.img} alt="" />
          </div>
          <div class="item-info">
            <header>
              <h5 class="title">${item.title}</h5>
              <h5 class="price">${item.price}$</h5>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }


  function displayMenuButtons(){
    const categores = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['all']);
    const categoresBtns = categores.map(function(category){
        return`<button data-id="${category}" 
        class="Btn snakes">${category}
        </button>`;
    }).join("");
    btnGroup.innerHTML = categoresBtns;

    const filterBtn = document.querySelectorAll(".Btn");
    filterBtn.forEach(function(btn){
        btn.addEventListener("click",(e)=>{
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === 'all'){
                displayMenuItem(menu);
            }else{
                displayMenuItem(menuCategory);
            }
        })
    })
  }

  /* Start side navbaar */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.display = "none";
}
/* End side navbaar */


/* Start scrollUp */
window.addEventListener("scroll",function(){
  let nav = document.getElementById("Navbar");
  let header = document.getElementById("header");
  let windowsPosistion = window.scrollY > 10;
  nav.classList.toggle("nav-onscroll" , windowsPosistion);
})
/* End scrollUp */