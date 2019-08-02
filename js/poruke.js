const poruke = {
  poruka: function(poruka, boja) {
  const div = document.createElement('div');
  div.className = `msg ${boja}`;
  div.append(document.createTextNode(poruka));
  const forma_rod = document.querySelector('.container');
  const el_ispod = document.querySelector('.proizvodi');
  forma_rod.insertBefore(div, el_ispod);

  setTimeout(function(){
    document.querySelector('.msg').remove();
  }, 3000);
  }
}