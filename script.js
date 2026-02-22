<script>
const gloves=[
{brand:'Nike',model:'Vapor Grip 3',overall:4.6,grip:4.8,durability:4.5,comfort:4.5,price:89.99},
{brand:'Adidas',model:'Predator Pro',overall:4.2,grip:4.0,durability:4.3,comfort:4.2,price:94.99},
{brand:'Uhlsport',model:'Hyperact',overall:4.8,grip:4.9,durability:4.8,comfort:4.7,price:119.99},
{brand:'Nike',model:'Phantom Shadow',overall:3.9,grip:3.8,durability:4.0,comfort:3.9,price:74.99},
{brand:'Puma',model:'Future Z Grip 1.2',overall:4.5,grip:4.6,durability:4.4,comfort:4.5,price:84.99},
{brand:'Reusch',model:'Attrakt Freegel G3',overall:4.7,grip:4.9,durability:4.6,comfort:4.6,price:139.99},
{brand:'Adidas',model:'Predator Match',overall:4.4,grip:4.5,durability:4.3,comfort:4.4,price:79.99},
{brand:'Uhlsport',model:'Speed Up Now',overall:4.3,grip:4.4,durability:4.2,comfort:4.3,price:69.99},
{brand:'Puma',model:'Ultra Grip 1',overall:4.2,grip:4.3,durability:4.0,comfort:4.2,price:64.99},
{brand:'Reusch',model:'Pure Contact Silver',overall:4.6,grip:4.7,durability:4.6,comfort:4.6,price:129.99},
{brand:'Nike',model:'Goalkeeper Gloves NK-GK',overall:4.1,grip:4.2,durability:4.0,comfort:4.1,price:59.99},
{brand:'Adidas',model:'ACE Pro Manuel Neuer',overall:4.9,grip:5.0,durability:4.8,comfort:4.9,price:159.99}
];


const grid=document.getElementById('gloveGrid');
const brandFilter=document.getElementById('brandFilter');
const ratingFilter=document.getElementById('ratingFilter');
const searchInput=document.getElementById('searchInput');
const sortSelect=document.getElementById('sortSelect');

function renderStars(rating){
const fullStars=Math.floor(rating);
const hasHalf=rating%1>=0.5;
let stars='★'.repeat(fullStars);
if(hasHalf) stars+='½';
return stars;
}

function render(){
if(!grid) return;
grid.innerHTML='';
const brand=brandFilter.value;
const rating=ratingFilter.value;
const search=(searchInput.value||'').toLowerCase();
const sort=sortSelect.value;

let filtered=gloves.filter(g=>{
const matchBrand=(brand==='all'||g.brand===brand);
const matchRating=(rating==='all'||g.overall>=parseFloat(rating));
const matchSearch=search===''||(g.brand.toLowerCase().includes(search)||g.model.toLowerCase().includes(search));
return matchBrand&&matchRating&&matchSearch;
});

if(sort==='rating') filtered.sort((a,b)=>b.overall-a.overall);
if(sort==='price-low') filtered.sort((a,b)=>a.price-b.price);
if(sort==='price-high') filtered.sort((a,b)=>b.price-a.price);
if(sort==='grip') filtered.sort((a,b)=>b.grip-a.grip);
if(sort==='newest') filtered.reverse();

filtered.forEach(g=>{
const card=document.createElement('div');
card.className='card';
card.innerHTML=`
<h3>${g.brand} ${g.model}</h3>
<div class='rating'>Overall: ${renderStars(g.overall)} ${g.overall}</div>
<div class='sub-ratings'>
<div>Grip: ${renderStars(g.grip)} ${g.grip}</div>
<div>Durability: ${renderStars(g.durability)} ${g.durability}</div>
<div>Comfort: ${renderStars(g.comfort)} ${g.comfort}</div>
</div>
<div class='price'>$${g.price}</div>
`;
grid.appendChild(card);
});
}

if(brandFilter){
brandFilter.onchange=render;
ratingFilter.onchange=render;
if(searchInput) searchInput.oninput=render;
if(sortSelect) sortSelect.onchange=render;
render();
}
</script>
