<script>
const gloves=[
{brand:'Nike',model:'Vapor Grip 3',rating:4.6},
{brand:'Adidas',model:'Predator Pro',rating:4.2},
{brand:'Uhlsport',model:'Hyperact',rating:4.8},
{brand:'Nike',model:'Phantom Shadow',rating:3.9}
];


const grid=document.getElementById('gloveGrid');
const brandFilter=document.getElementById('brandFilter');
const ratingFilter=document.getElementById('ratingFilter');


function render(){
if(!grid) return;
grid.innerHTML='';
const brand=brandFilter.value;
const rating=ratingFilter.value;


gloves.filter(g=>{
return (brand==='all'||g.brand===brand) && (rating==='all'||g.rating>=rating);
}).forEach(g=>{
const card=document.createElement('div');
card.className='card';
card.innerHTML=`<h3>${g.brand} ${g.model}</h3><div class='rating'>★★★★★ ${g.rating}</div><div class='meta'>Placeholder review data</div>`;
grid.appendChild(card);
});
}


if(brandFilter){brandFilter.onchange=render;ratingFilter.onchange=render;render();}
</script>
