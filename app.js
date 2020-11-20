

let shoptype = {}
// GET DATA FROM JSON
const getjson = async () => {
    try {
        const res = await axios.get('https://panjs.com/ywc18.json')
        return res
    }
    catch (e) {
        console.log("ERROR!", e)
    }
}
// GET SHOP NAME
const info = getjson().then(async res => {
    let kind = res.data.categories
    let array = []
    for(let i = 0; i <kind.length; i++) {
        array.push(kind[i].name);
    }
    console.log("GET THE DATA");
    radiotype = document.querySelector('#shop')
    getselect(array,radiotype);
});
// GET TYPE 
const shopanddrink = getjson().then(async res => {
    let type = res.data.categories[0].subcategories;
    console.log("GET TYPE");
    radiotype = document.querySelector('#subcategories')
    type.splice(13,1);
    getselect(type,radiotype);
   
});

//getselect for price range

const price = getjson().then(async res => {
    let range = res.data.priceRange;
    console.log(range);
    option = document.querySelector('#optionprice');
    getoption(range,option);
})

const card = getjson().then(async res => {
    let card = res.data.merchants;
    cardinfo = document.querySelector('#card');
    getCard(card,cardinfo);
    
})

//Use for loop select option
function getoption(type,id) {
    for (let i =0;i < type.length; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', type[i]);
        option.innerText = type[i];
        id.appendChild(option);
    }
}


//Use for creating a select option
function getselect(type,id) {
    for (let i= 0; i<type.length;i++) {
        let choicediv = document.createElement('div');
        let choiceinput = document.createElement('input');
        let choicelabel = document.createElement('label');
        choicediv.classList.add('form-check');
        choiceinput.classList.add('form-check-input',"fs-6");
        choicelabel.classList.add('form-check-label','pointer');
        choiceinput.setAttribute('type', 'radio')
        choiceinput.setAttribute('name','type');
       
        choiceinput.setAttribute('id',type[i])
        choicelabel.setAttribute('for',type[i])      
        choicelabel.innerText = type[i];
        
        choicediv.appendChild(choiceinput);
        choicediv.appendChild(choicelabel);

        id.appendChild(choicediv);
    }
};


function getCard(type, id) {
   
    for (let i = 0;i < type.length;i++) {
        
        let choicerow = document.createElement('div');
        let choicetitle = document.createElement('h5');
        let choiceimg = document.createElement('div');
        let image = document.createElement('img');
        let choicebodycard = document.createElement('div');
        let choicecardbody = document.createElement('div');
        let choicecard = document.createElement('div');
        let cardtext = document.createElement('p');
        let bahtdiv = document.createElement('span');
        let hr = document.createElement('hr');
        let hlcardtext = document.createElement('p');
        let rccardtext = document.createElement('p');
        let rclist = type[i].recommendedItems;
        let fclist = type[i].facilities;
        let fclink = document.createElement('a');
        let fcicon = document.createElement('img');
        let choiceicon = document.createElement('p');
        let button = document.createElement('button');
        let spanbut = document.createElement('span');

        choicecard.classList.add('card', 'mb-3');
        choicerow.classList.add('row');
        choiceimg.classList.add('col-md-2', 'mr-3');
        image.classList.add('imgshop');
        choicebodycard.classList.add('col-md-9','ml-5')
        choicetitle.classList.add("card-title");
        choicecardbody.classList.add('card-body');
        cardtext.classList.add('card-text', 'text-muted');
        hlcardtext.classList.add('card-text', 'text-muted');
        rccardtext.classList.add('card-text', 'text-muted');
        
        
       
        if(type[i].categoryName === 'ร้านอาหาร') {
            if (type[i].priceLevel === 1) {

                bahtdiv = document.createElement('span');
                fcicon = document.createElement('img');
                fcicon.classList.add('bahticon');
                fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                bahtdiv.appendChild(fcicon);
                for(let i = 0;i < 3;i++) {
                    fcicon = document.createElement('img');
                    fcicon.classList.add('bahticon','bahtopa')
                    fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                    bahtdiv.appendChild(fcicon);
                }
               
            }  
            else if (type[i].priceLevel === 2) {
            
                bahtdiv = document.createElement('span');
                for (let i = 0;i <2;i++) {
                    fcicon = document.createElement('img')
                    fcicon.classList.add('bahticon');
                    fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                    bahtdiv.appendChild(fcicon);
               }
               for(let i = 0;i < 2;i++) {
                    fcicon = document.createElement('img');
                    fcicon.classList.add('bahticon','bahtopa');
                    fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                    bahtdiv.appendChild(fcicon);
               }
              
            }
            else if (type[i].priceLevel === 3) {
                bahtdiv = document.createElement('span');
                 for (let i = 0;i <3;i++) {
                     fcicon = document.createElement('img')
                     fcicon.classList.add('bahticon');
                     fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                     bahtdiv.appendChild(fcicon);
                }
                for(let i = 0;i < 1;i++) {
                     fcicon = document.createElement('img');
                     fcicon.classList.add('bahticon','bahtopa');
                     fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                     bahtdiv.appendChild(fcicon);
                }
             }
             else {
                 bahtdiv = document.createElement('span');
                 for (let i = 0;i <4;i++) {
                     fcicon = document.createElement('img')
                     fcicon.classList.add('bahticon');
                     fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                     bahtdiv.appendChild(fcicon);
                }
             }
             image.setAttribute('src',type[i].coverImageId)

            choicetitle.innerText = type[i].shopNameTH;
            cardtext.innerText = `${type[i].subcategoryName} |`;
            cardtext.appendChild(bahtdiv);
            cardtext.innerHTML += ` | ${type[i].addressDistrictName} ${type[i].addressProvinceName}`;
            hlcardtext.innerHTML= type[i].highlightText;
            
        
            rccardtext.innerHTML = '<strong>เมนูแนะนำ: </strong>'
            rclist.forEach( (item) => rccardtext.innerText += `${item}, `)
        
            for (e of fclist) {
            
                fclink = document.createElement('a');
                fcicon = document.createElement('img');
                if (e === 'ที่จอดรถ') {
                    fcicon.setAttribute('src', 'https://www.pinclipart.com/picdir/big/399-3997659_car-insurance-for-your-mini-vw-golf-car.png');
                   
                }
                else if (e === "สามารถนำสัตว์เลี้ยงเข้าได้") {
                    fcicon.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3209/3209928.svg');
                }
                else if (e === 'รับจองล่วงหน้า') {
                    fcicon.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/2037/2037790.svg')
                }
                else {
                    fcicon.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/290/290029.svg');
                }
                fclink.setAttribute('href','#');
                fcicon.classList.add('cardicon', 'mr-2')
                fclink.appendChild(fcicon);
                choiceicon.appendChild(fclink);
            }
    
            choiceimg.appendChild(image);
            choicerow.appendChild(choiceimg);
            if (type[i].isOpen === "Y") {
                button.classList.add('btn','btn-success','btn-sm','ml-3')
                button.innerText = 'เปิดอยู่';
                spanbut.appendChild(button)
                choicetitle.appendChild(spanbut)
            }
            if (type[i].isOpen === "N") {
                button.classList.add('btn','btn-secondary', 'btn-sm','ml-3');
                button.innerText = 'ปิดแล้ว';
                spanbut.appendChild(button);
                choicetitle.appendChild(spanbut);
            }
            choicecardbody.appendChild(choicetitle);
            
            choicecardbody.appendChild(cardtext);
            choicecardbody.appendChild(hr);
            choicecardbody.appendChild(hlcardtext)
            choicecardbody.appendChild(rccardtext);
            choicecardbody.appendChild(choiceicon);
            choicebodycard.appendChild(choicecardbody);
            choicerow.appendChild(choicebodycard);
            choicecard.appendChild(choicerow);
        
            id.appendChild(choicecard);
        }
       
        
      

        
       

    }
}
