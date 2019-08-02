korpa.ucitaj_iz_session();

const proizvodi = {
    prikaziProizvod: function(proizvod){
        const div = document.createElement('div');
        
        const link = document.createElement('a');
        link.className = "linkovi";
        link.href =`detaljnije.html?id=${proizvod.id}`;
        div.className = "proizvod";

        const img = document.createElement('img');
        img.src = `images/${proizvod.mala_slika}`;
        img.alt = `${proizvod.naziv}`;
        img.className = 'img-mala';
        link.append(img);
        div.append(link);

        const naziv = document.createElement('p');
        naziv.innerHTML = `<strong>${proizvod.naziv}</strong>`;
        div.append(naziv);

        const cena = document.createElement('p');
        cena.innerHTML = `Cena: <strong>${formatiranje.format(proizvod.cena)}</strong> dinara`;
        const detaljnije = document.createElement('button');
        detaljnije.className = "btnDetaljnije";
        detaljnije.textContent = 'Detaljnije';
        div.append(naziv, cena);

        const linkDetaljnije = document.createElement('a');
        linkDetaljnije.className = "linkovi";
        linkDetaljnije.href =`detaljnije.html?id=${proizvod.id}`;
        linkDetaljnije.append(detaljnije);
        div.append(linkDetaljnije);
        
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

    prikaziSve: function(nizProizvoda) {
        this.getInput('proizvodi').innerHTML = '';
        for (let proizvod of nizProizvoda){
            const el = this.prikaziProizvod(proizvod);
            this.getInput('proizvodi').append(el);
        }
    },

    pretragaPoNazivu: function(inpProizvod) {
        this.getInput('minCena').value = '';
        this.getInput('maxCena').value = '';
        const niz = podaci.filter((proizvod => proizvod.naziv.toLowerCase().includes(inpProizvod.toLowerCase())));
        this.prikaziSve(niz);
        if (niz.length === 0) {
            this.nePostoji("Traženi proizvod ne postoji!");
        }
    },

    pretragaPoCeni: function(inpCena, nacin){
        let niz = [];
        if (nacin === 'max') {
            this.getInput('minCena').value = '';
            this.getInput('inp').value = '';
            niz = podaci.filter((proizvod => proizvod.cena <= inpCena));
        }
        if (nacin === 'min'){
            this.getInput('maxCena').value = '';
            this.getInput('inp').value = '';
            niz = podaci.filter((proizvod => proizvod.cena >= inpCena));
        }
        if (niz.length === 0){
            this.getInput('proizvodi').innerHTML = '';
            this.nePostoji("Nema proizvoda u tom cenovnom rasponu!");
        } else {
            this.prikaziSve(niz); 
        }
    },

    sortiranje: function(polje, sort) {
        this.getInput('inp').value = '';
        this.getInput('minCena').value = '';
        this.getInput('maxCena').value = '';
        podaci.sort((p1, p2) => p1[polje] > p2[polje] ? sort : -sort);
        this.prikaziSve(podaci);
    },

    nePostoji: function(msg){
        const div = document.createElement('div');
        div.className = "proizvod-nema";
        div.innerHTML = msg;
        this.getInput('proizvodi').append(div);
    },

    getInput: function(trazeniId) {
        return document.querySelector(`#${trazeniId}`);
    }
}

// proizvodi.prikaziSve(podaci);

proizvodi.getInput('inp').addEventListener('keyup', () => {
    const inp = proizvodi.getInput('inp').value;
    proizvodi.pretragaPoNazivu(inp);
});

proizvodi.getInput('btnMaxCena').addEventListener('click', () => {
    let inp = Number(proizvodi.getInput('maxCena').value);
    if (!inp) inp = Infinity;
    proizvodi.pretragaPoCeni(inp, 'max')
});

proizvodi.getInput('btnMinCena').addEventListener('click', () => {
    let inp = Number(proizvodi.getInput('minCena').value);
    if (!inp) inp = -Infinity;
    proizvodi.pretragaPoCeni(inp, 'min')
});

proizvodi.getInput('polje').addEventListener('change', () => {
    const polje = proizvodi.getInput('polje').value;
    const sortiranje = proizvodi.getInput('sort').value;
    proizvodi.sortiranje(polje, sortiranje);
});

proizvodi.getInput('sort').addEventListener('change', () => {
    const polje = proizvodi.getInput('polje').value;
    const sortiranje = proizvodi.getInput('sort').value;
    proizvodi.sortiranje(polje, sortiranje);
});