<script>
const gloves=[
{id:1,brand:'Nike',model:'Vapor Grip 3',overall:4.6,grip:4.8,durability:4.5,comfort:4.5,price:89.99,palm_thickness:'5mm',latex_type:'Synthetic',closure:'Rolled Cuff',weight:'180g',use_cases:['Wet Weather','Training','Match Play'],description:'The Nike Vapor Grip 3 offers excellent grip and comfort for dynamic keepers. Soft palm material provides natural ball feel with reliable contact in wet conditions.',pros:['Excellent grip retention','Comfortable fit','Good durability','Value for money'],cons:['Can compress over time','Latex may wear quickly in training']},
{id:2,brand:'Adidas',model:'Predator Pro',overall:4.2,grip:4.0,durability:4.3,comfort:4.2,price:94.99,palm_thickness:'4.5mm',latex_type:'Natural',closure:'Velcro Strap',weight:'175g',use_cases:['Match Play','Amateur'],description:'Professional-grade glove with natural latex for authentic grip feel. Designed for keepers who value touch and ball control.',pros:['Natural latex grip','Lightweight','Classic design'],cons:['Latex durability concerns','Lower grip in very wet conditions']},
{id:3,brand:'Uhlsport',model:'Hyperact',overall:4.8,grip:4.9,durability:4.8,comfort:4.7,price:119.99,palm_thickness:'6mm',latex_type:'Advanced Grip Latex',closure:'Soft Elastic Band',weight:'185g',use_cases:['All Weather','Professional','Wet Conditions'],description:'Uhlsport\'s flagship glove with advanced latex technology for ultimate grip. Perfect for keepers playing in demanding conditions.',pros:['Exceptional grip','Durable latex','Comfortable support band','Excellent wet performance'],cons:['Premium price','May feel stiff initially']},
{id:4,brand:'Nike',model:'Phantom Shadow',overall:3.9,grip:3.8,durability:4.0,comfort:3.9,price:74.99,palm_thickness:'4mm',latex_type:'Synthetic',closure:'Rolled Cuff',weight:'170g',use_cases:['Training','Budget-Friendly'],description:'Budget-friendly option from Nike. Basic synthetic latex provides decent grip for training and amateur matches.',pros:['Affordable','Lightweight','Good for beginners'],cons:['Lower grip consistency','Durability concerns','Less comfortable']},
{id:5,brand:'Puma',model:'Future Z Grip 1.2',overall:4.5,grip:4.6,durability:4.4,comfort:4.5,price:84.99,palm_thickness:'5.5mm',latex_type:'Hybrid Latex',color:'Black/Gold',weight:'182g',use_cases:['Training','Match Play','Intermediate'],description:'Puma\'s hybrid latex formula offers great balance between grip and comfort. Modern design appeals to younger keepers.',pros:['Good grip consistency','Fashion-forward design','Decent durability','Great value'],cons:['Less padding','May need break-in period']},
{id:6,brand:'Reusch',model:'Attrakt Freegel G3',overall:4.7,grip:4.9,durability:4.6,comfort:4.6,price:139.99,palm_thickness:'6mm',latex_type:'Premium Latex Blend',closure:'Support Strap',weight:'188g',use_cases:['Professional','All Weather','Wet Conditions'],description:'Premium German engineering. Attrakt Freegel G3 combines grip with comfort for professional goalkeepers.',pros:['Exceptional grip','Premium feel','Great support','Professional quality'],cons:['High price','Overkill for amateurs']},
{id:7,brand:'Adidas',model:'Predator Match',overall:4.4,grip:4.5,durability:4.3,comfort:4.4,price:79.99,palm_thickness:'5mm',latex_type:'Natural Latex',closure:'Velcro Strap',weight:'177g',use_cases:['Match Play','Training','General Use'],description:'Mid-range Predator model offering solid performance. Good balance between price and quality.',pros:['Good grip','Reasonable price','Trusted brand','Decent comfort'],cons:['Average durability','Natural latex concerns']},
{id:8,brand:'Uhlsport',model:'Speed Up Now',overall:4.3,grip:4.4,durability:4.2,comfort:4.3,price:69.99,palm_thickness:'5mm',latex_type:'Standard Latex',closure:'Elastic Band',weight:'180g',use_cases:['Training','Budget','Beginners'],description:'Entry-level Uhlsport glove for developing keepers. Provides reliable grip at an affordable price.',pros:['Budget-friendly','Uhlsport quality','Easy to use'],cons:['Basic features','Average durability','Limited comfort padding']},
{id:9,brand:'Puma',model:'Ultra Grip 1',overall:4.2,grip:4.3,durability:4.0,comfort:4.2,price:64.99,palm_thickness:'4.5mm',latex_type:'Synthetic',closure:'Rolled Cuff',weight:'172g',use_cases:['Training','Budget','Dry Conditions'],description:'Ultra affordable Puma option. Great for casual play and training sessions.',pros:['Very affordable','Lightweight','Good for dry conditions'],cons:['Low durability','Poor wet weather grip','Basic comfort']},
{id:10,brand:'Reusch',model:'Pure Contact Silver',overall:4.6,grip:4.7,durability:4.6,comfort:4.6,price:129.99,palm_thickness:'5.5mm',latex_type:'Premium Silver Latex',closure:'Soft Strap',weight:'186g',use_cases:['Match Play','Professional','Training'],description:'Silver series gloves from Reusch offer premium performance. Excellent all-around choice for serious keepers.',pros:['Excellent grip','Beautiful design','Good durability','Comfortable support'],cons:['Premium price','Less specialized']},
{id:11,brand:'Nike',model:'Goalkeeper Gloves NK-GK',overall:4.1,grip:4.2,durability:4.0,comfort:4.1,price:59.99,palm_thickness:'4mm',latex_type:'Basic Synthetic',closure:'Rolled Cuff',weight:'168g',use_cases:['Training','Beginners','Budget'],description:'Basic Nike goalkeeper gloves. Perfect entry point for new keepers.',pros:['Very affordable','Nike reliability','Lightweight'],cons:['Basic construction','Lower grip','Limited features']},
{id:12,brand:'Adidas',model:'ACE Pro Manuel Neuer',overall:4.9,grip:5.0,durability:4.8,comfort:4.9,price:159.99,palm_thickness:'6.5mm',latex_type:'Elite Natural Latex',closure:'Premium Support Band',weight:'190g',use_cases:['Professional','Elite','All Weather'],description:'Signature model of world-class keeper. The pinnacle of goalkeeper glove technology.',pros:['Unmatched grip','Premium comfort','Exceptional durability','Professional quality'],cons:['Very expensive','May be overkill for amateurs']},
{id:13,brand:'Reusch',model:'Attrakt Grip Evolution',overall:4.5,grip:4.6,durability:4.4,comfort:4.5,price:99.99,palm_thickness:'5mm',latex_type:'Advanced Grip Latex',closure:'Wrist Support',weight:'184g',use_cases:['Match Play','Training','Intermediate'],description:'Previous generation Attrakt model. Still offers great performance at reasonable price.',pros:['Excellent grip','Good durability','More affordable than G3','Trusted brand'],cons:['Superseded by newer models','Less padding']},
{id:14,brand:'Nike',model:'GK Match',overall:4.3,grip:4.4,durability:4.2,comfort:4.3,price:79.99,palm_thickness:'5mm',latex_type:'Synthetic Grip',closure:'Rolled Cuff',weight:'179g',use_cases:['Match Play','Training','General'],description:'Solid mid-range Nike option. Good for regular match and training use.',pros:['Reliable performance','Good grip','Nike quality','Fair price'],cons:['Average durability','Not specialized']},
{id:15,brand:'Puma',model:'evoPOWER 2.2',overall:4.4,grip:4.5,durability:4.3,comfort:4.4,price:94.99,palm_thickness:'5.5mm',latex_type:'Hybrid Latex',closure:'Support Strap',weight:'183g',use_cases:['Match Play','Training','All Levels'],description:'Puma\'s power series combines grip with innovative design. Great for keepers seeking modern technology.',pros:['Modern design','Good grip','Decent padding','Value option'],cons:['Newer brand in GK space','Less track record']},
{id:16,brand:'Adidas',model:'Predator Elite',overall:4.3,grip:4.4,durability:4.2,comfort:4.3,price:119.99,palm_thickness:'5.5mm',latex_type:'Premium Natural Latex',closure:'Elite Band',weight:'185g',use_cases:['Match Play','Professional Training'],description:'Premium version of Predator line. For keepers wanting Adidas quality at high level.',pros:['Natural latex','Premium construction','Good comfort'],cons:['High price','Natural latex durability concerns']},
{id:17,brand:'Uhlsport',model:'Dynamic Impulse',overall:4.6,grip:4.7,durability:4.5,comfort:4.6,price:109.99,palm_thickness:'5.5mm',latex_type:'Dynamic Latex',closure:'Support Strap',weight:'186g',use_cases:['Match Play','Professional','Training'],description:'Uhlsport dynamic series designed for explosive keepers. Great balance of grip and responsiveness.',pros:['Exceptional grip','Dynamic feel','Good durability','Professional quality'],cons:['Premium price','Specific style']},
{id:18,brand:'Reusch',model:'Attrakt Solid',overall:4.4,grip:4.5,durability:4.3,comfort:4.4,price:84.99,palm_thickness:'5mm',latex_type:'Standard Latex',closure:'Basic Strap',weight:'180g',use_cases:['Training','Intermediate','Regular Use'],description:'Affordable Reusch option. Good German quality without premium price.',pros:['Good grip','Affordable','Reusch reliability'],cons:['Basic features','Average comfort padding']},
{id:19,brand:'Nike',model:'Premier SGT',overall:4.7,grip:4.8,durability:4.7,comfort:4.7,price:139.99,palm_thickness:'6mm',latex_type:'Premium Synthetic',closure:'Premium Support',weight:'187g',use_cases:['Professional','Elite','Match Play'],description:'Nike\'s premium line for elite goalkeepers. Combines tradition with modern performance.',pros:['Exceptional quality','Great grip','Durable construction','Professional feel'],cons:['High price','Niche market']},
{id:20,brand:'Puma',model:'ultraCEST Pro',overall:4.6,grip:4.7,durability:4.5,comfort:4.6,price:124.99,palm_thickness:'5.5mm',latex_type:'Elite Hybrid',closure:'Pro Support Strap',weight:'185g',use_cases:['Professional','Match Play','Elite'],description:'Puma\'s professional series. Designed for keepers demanding elite performance.',pros:['Modern technology','Good grip','Professional quality','Fashion design'],cons:['Less established brand history','Newer product']},
{id:21,brand:'Adidas',model:'Predator Training',overall:4.1,grip:4.2,durability:4.0,comfort:4.1,price:59.99,palm_thickness:'4.5mm',latex_type:'Basic Synthetic',closure:'Basic Band',weight:'175g',use_cases:['Training Only','Budget','Beginners'],description:'Basic training gloves from Adidas. For casual practice and developing skills.',pros:['Very affordable','Adidas brand','Lightweight'],cons:['Low durability','Basic grip','Training only']},
{id:22,brand:'Uhlsport',model:'Eliminator Pro Elite',overall:4.8,grip:4.9,durability:4.8,comfort:4.7,price:149.99,palm_thickness:'6.5mm',latex_type:'Elite Grip Latex',closure:'Elite Support System',weight:'189g',use_cases:['Elite','Professional','All Weather'],description:'Top of Uhlsport\'s line. For professional goalkeepers who demand the absolute best.',pros:['Phenomenal grip','Premium construction','Elite durability','Exceptional comfort'],cons:['Extremely expensive','Specialized for elite keepers']},
{id:23,brand:'Reusch',model:'G3 Fusion',overall:4.8,grip:4.9,durability:4.7,comfort:4.8,price:144.99,palm_thickness:'6mm',latex_type:'Fusion Latex Technology',closure:'Advanced Support',weight:'187g',use_cases:['Professional','Elite','Match Play'],description:'Reusch\'s fusion technology glove. Cutting edge materials for top performance.',pros:['Advanced technology','Exceptional grip','Beautiful design','Professional quality'],cons:['Very expensive','Less traditional feel']},
{id:24,brand:'Nike',model:'Phantom Elite',overall:4.8,grip:4.9,durability:4.8,comfort:4.8,price:149.99,palm_thickness:'6mm',latex_type:'Elite Synthetic',closure:'Elite Support System',weight:'188g',use_cases:['Elite','Professional','All Conditions'],description:'Nike\'s elite tier glove. For keepers at the highest levels of the game.',pros:['Exceptional quality','Outstanding grip','Professional durability','Comfortable support'],cons:['Premium price','Overkill for most players']},
{id:25,brand:'Puma',model:'Future Z Grip Elite',overall:4.7,grip:4.8,durability:4.6,comfort:4.7,price:134.99,palm_thickness:'6mm',latex_type:'Elite Hybrid Latex',closure:'Elite Support Strap',weight:'186g',use_cases:['Professional','Elite Players'],description:'Puma\'s top-tier offering. Modern design meets professional performance.',pros:['Elite grip technology','Modern aesthetic','Professional construction'],cons:['Expensive for newer brand','Less heritage']},
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
<a href='glove.html?id=${g.id}' class='card-link'>View Details</a>
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
