const poruke = {
  poruka: function(poruka, boja) {
  const div = document.createElement('div');
  div.className = `msg ${boja}`;
  div.append(document.createTextNode(poruka));
  document.body.append(div);

  setTimeout(function(){
    document.querySelector('.msg').remove();
  }, 3000);
  }
}