
        if (type[i].priceLevel === 1) {

            bahtdiv = document.createElement('div');
            fcicon = document.createElement('img');
            fcicon.classList.add('cardicon', 'mr-1');
            fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
            bahtdiv.appendChild(fcicon);
            // for(let i = 0;i < 3;i++) {
            //     fcicon = document.createElement('img');
            //     fcicon.classList.add('cardicon', 'mr-1','bahtopa')
            //     fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
            //     bahtdiv.appendChild(fcicon);
            // }
           
        }
        else if (type[i].priceLevel === 2) {
            
            bahtdiv = document.createElement('div');
            for (let i = 0;i <2;i++) {
                fcicon = document.createElement('img')
                fcicon.classList.add('cardicon', 'mr-1');
                fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                bahtdiv.appendChild(fcicon);
           }
           for(let i = 0;i < 2;i++) {
                fcicon = document.createElement('img');
                fcicon.classList.add('cardicon', 'mr-1','bahtopa');
                fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                bahtdiv.appendChild(fcicon);
           }
          
        }
        else if (type[i].priceLevel === 3) {
           bahtdiv = document.createElement('div');
            for (let i = 0;i <3;i++) {
                fcicon = document.createElement('img')
                fcicon.classList.add('cardicon', 'mr-1');
                fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                bahtdiv.appendChild(fcicon);
           }
           for(let i = 0;i < 1;i++) {
                fcicon = document.createElement('img');
                fcicon.classList.add('cardicon', 'mr-1','bahtopa');
                fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                bahtdiv.appendChild(fcicon);
           }
        }
        else {
            bahtdiv = document.createElement('div');
            for (let i = 0;i <4;i++) {
                fcicon = document.createElement('img')
                fcicon.classList.add('cardicon', 'mr-1');
                fcicon.setAttribute('src','https://www.flaticon.com/svg/static/icons/svg/32/32632.svg');
                bahtdiv.appendChild(fcicon);
           }
        }
      