korpa.ucitaj_iz_session();

const proizvod = {
  nadji_ID: function(){
    let svi_par = {}, loc = window.location.href;
    let a1 = loc.split('?');
    if(a1.length > 1){  //imamo parametre
      let a2 = a1[1].split('&');
      for(let i = 0; i < a2.length; i++){
          var a3 = a2[i].split('='); //delimo na prom i vrednost
          svi_par[a3[0]] = decodeURIComponent(a3[1]);
      }
    }  
    return svi_par.id;
  },

  odabranProizvod: function(proizvod){
    const div = document.createElement('div');
    div.className = "proizvod-detaljnije";

    const img = document.createElement('img');
    img.src = `images/${proizvod.velika_slika}`;
    img.alt = `${proizvod.naziv}`;
    img.className = 'slika-velika';
    div.append(img);

    const tabela = document.createElement('table');
    tabela.className = "tabela";
    
    for (let ime in proizvod) {
      if (ime !== 'id' && ime !== 'mala_slika' && ime !== 'velika_slika'){
        const tr = document.createElement('tr');
        const tdKey = document.createElement('td');
        const tdValue = document.createElement('td');

        tdKey.textContent = `${ime}:`;
        tdKey.className = "tdKey";
        (ime === 'cena') ? tdValue.innerHTML = `<strong>${formatiranje.format(Number(proizvod[ime]))} dinara</strong>` : tdValue.innerHTML = `<strong>${proizvod[ime]}</strong>`;

        tr.append(tdKey);
        tr.append(tdValue)
        tabela.append(tr);
      }      
    }

    div.append(tabela);
    
    const kupi = document.createElement('button');
    kupi.className = "btnKupi";
    kupi.textContent = "Kupi";
    kupi.addEventListener('click', ()=>{
      korpa.dodaj(proizvod.id);
      poruke.poruka('Proizvod je uspešno dodat u korpu!', 'zeleno');
      document.querySelector('#korpa').innerHTML = `Korpa: ${formatiranje.format(korpa.ukupanIznos())} din`;
    });
    div.append(kupi);

    return div;
  },

  prikazi: function(id){
    for (let jedanProizvod of podaci){
      if (jedanProizvod.id == id) {
        const el = this.odabranProizvod(jedanProizvod);
        document.querySelector('#proizvodi').append(el);
      }
    }
  }
}

// proizvod.prikazi(proizvod.nadji_ID());