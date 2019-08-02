const formatiranje = new Intl.NumberFormat('sr-SR', {
  minimumFractionDigits: 2
});

const korpa = {
  niz: [],

  dodaj: function(id){
    const cena = podaci[id].cena;
    
    if(this.niz.length === 0) {
      this.niz.push({ id: id, kolicina: 1, cena: cena});
    } else {
      let postoji = false, tmpId;
      for (let i = 0; i < this.niz.length; i++){
        if (this.niz[i].id === id) {
          postoji = true; 
          tmpId = i;
        }
      }
      (postoji) ? this.niz[tmpId].kolicina++ : this.niz.push({ id: id, kolicina: 1, cena: cena});
    }
    this.snimi_u_session();
  },

  ukupna_vr: function() {
    return this.niz.map(proizvod =>  ({id: proizvod.id, ukupnaVrednost: proizvod.kolicina*proizvod.cena }));
  },
  
  obrisi: function(id)  {
    for (let i = 0; i < this.niz.length; i++){
      if (this.niz[i].id === id) {
        this.niz.splice(this.niz.indexOf(this.niz[i]), 1);
      }
    }
    this.snimi_u_session();
  }, 
  
  snimi_u_session: function() { 
    sessionStorage.setItem('korpa', JSON.stringify(this.niz));
  },

  ucitaj_iz_session: function(){ 
    this.niz = sessionStorage.getItem('korpa') === null ? [] : JSON.parse(sessionStorage.getItem('korpa'));
  },

  prikaziKorpu: function(){
    this.ucitaj_iz_session();

    let tmpNizKorpa = [], nizKorpa = [];

    podaci.map((clanPodataka) => {
      for (let clanNiza of this.niz) {
        if (clanPodataka.id === clanNiza.id){
          tmpNizKorpa.push({ id: clanPodataka.id, ime: clanPodataka.naziv, kolicina: clanNiza.kolicina, slika: clanPodataka.mala_slika, cena: clanPodataka.cena });
        }
      }
    });

    tmpNizKorpa.map((clan) => {
      for (let clanKorpe of this.ukupna_vr()){
        if (clan.id === clanKorpe.id){
          nizKorpa.push({ id: clan.id, ime: clan.ime, kolicina: clan.kolicina, slika: clan.slika, vrednost: clanKorpe.ukupnaVrednost });
        }
      }
    });

    // console.log(nizKorpa);
    return nizKorpa;
  },

  ukupanIznos: function(){
    let tmp = this.prikaziKorpu().map(vr => vr.vrednost);
    return tmp.reduce((acc, clan) => acc += clan, 0);
  },

  napraviTabelu: function(){

    const div = document.querySelector('#proizvodi');

    const tabelaKorpa = document.createElement('table');
    tabelaKorpa.className = "tabela tablea-korpa";

    const tr = document.createElement('tr');

    const thIme = document.createElement('th');
    thIme.textContent = "Naziv proizvoda";
    
    const thSlika = document.createElement('th');
    thSlika.textContent = "Slika";
    
    const thKolicina = document.createElement('th');
    thKolicina.className = "kolicina-centar";
    thKolicina.textContent = "Količina";
    
    const thUkVrednost = document.createElement('th');
    thUkVrednost.textContent = "Vrednost";
    
    const thBrisanje = document.createElement('th');
    thBrisanje.textContent = "Brisanje";

    tr.append(thIme, thSlika, thKolicina, thUkVrednost, thBrisanje);
    tabelaKorpa.append(tr);
    
    for (let clan of this.prikaziKorpu()){
      const tr = document.createElement('tr');

      const tdIme = document.createElement('td');
      tdIme.className = "ime-korpa";
      tdIme.textContent = clan.ime;

      const tdSlika = document.createElement('td');
      tdSlika.innerHTML = `<img src="images/${clan.slika}" alt="${clan.ime}" class="slika-korpa">`;

      const tdKolicina = document.createElement('td');
      tdKolicina.className = "kolicina-centar";
      tdKolicina.textContent = clan.kolicina;
      
      const tdVrednost = document.createElement('td');
      tdVrednost.innerHTML = `${formatiranje.format(clan.vrednost)} din`;
      
      const tdtdObrisi = document.createElement('td');
      const btnObrisi = document.createElement('button');
      btnObrisi.className = "btnObrisi";
      btnObrisi.textContent = "Obriši";
      btnObrisi.addEventListener('click', () => {
        tr.remove();
        this.obrisi(clan.id);
        poruke.poruka('Proizvod je uklonjen iz korpe!', 'crveno');
        document.querySelector('#korpaTotal').innerHTML = `Ukupan iznos: ${formatiranje.format(korpa.ukupanIznos())} dinara`;
      });
      tdtdObrisi.append(btnObrisi);


      tr.append(tdIme, tdSlika, tdKolicina, tdVrednost, tdtdObrisi);
      tabelaKorpa.append(tr);
    }

    const trTotal = document.createElement('tr');
    const tdTotal = document.createElement('td');
    tdTotal.innerHTML= `Ukupan iznos: ${formatiranje.format(korpa.ukupanIznos())} dinara`;
    tdTotal.id = 'korpaTotal';
    tdTotal.colSpan = 5;
    tdTotal.style = 'text-align: right; font-weight:700; font-size: 18px;';
    trTotal.append(tdTotal);
    tabelaKorpa.append(trTotal);
    
    const btnNaruci = document.createElement('button');
    btnNaruci.className = "btnNaruci";
    btnNaruci.textContent = "Naruči";
    btnNaruci.addEventListener('click', () => {
      sessionStorage.removeItem('korpa');
      poruke.poruka('Narudžbina je uspošno prosleđena! Hvala!', 'zeleno');
      document.querySelector('#proizvodi').innerHTML = '';
      this.napraviTabelu();
    });


    div.append(tabelaKorpa, btnNaruci);
  }
}

korpa.ukupanIznos();