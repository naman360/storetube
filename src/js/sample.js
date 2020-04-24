const teaserProd=document.getElementsByClassName('teaserProd')[0];
const url=`./src/data/prod.json`;
fetch(url)
.then(response => response.json())
.then((data) =>{
    for(let key = 0; key < 5;key++){
      teaserProd.innerHTML +=`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data[key].src}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data[key].name}</h5>
          <h5 class="card-title">&#8377;${data[key].price}</h5>
          <a href="#" data-toggle="modal" data-target="#myModal" class="shopBtn">Add to Cart</a>
        </div>
      </div>
      `;
    }
});

const products=document.getElementsByClassName('products')[0];
fetch(url)
.then(response => response.json())
.then((data) =>{
    for(let key = 5; key < data.length;key++){
      products.innerHTML +=`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data[key].src}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data[key].name}</h5>
          <h5 class="card-title">&#8377;${data[key].price}</h5>
          <a href="#" data-toggle="modal" data-target="#myModal" class="shopBtn">Add to Cart</a>
        </div>
      </div>
      `;
    }
});

