const poruke = {
  poruka: function(poruka, boja) {
  if (document.querySelector('.msg')) document.querySelector('.msg').remove();
  const div = document.createElement('div');
  div.className = `msg ${boja}`;
  div.append(document.createTextNode(poruka));
  document.body.append(div);

  if(document.querySelector('.msg')){
    setTimeout(function(){
      document.querySelector('.msg').remove();
    }, 3000);
    }
  }
}