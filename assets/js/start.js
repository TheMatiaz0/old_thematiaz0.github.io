languages = ['pl/'];

function getLang()
{
  if (navigator.languages != undefined)
  {
    return navigator.languages[0];
  }
  return navigator.language;
}

function setLangBasedOnBrowser()
{
  var k = getLang().substring(0, 2);
  if (k === 'en')
  {
    return;
  }

  if (window.location.pathname.substring(1, 3) === k)
  {
    return;
  }
  changeLang(k);
}

window.onload = function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) 
  {
      setLangBasedOnBrowser();
      localStorage.setItem("hasCodeRunBefore", true);
  }
}


function changeLang(replacement)
{
  if (replacement != null)
  {
    window.location = replacement; 
    return;
  }
  
  for (let i = 0; i < languages.length; i++)
  {
    window.location = window.location.href.replace(languages[i], '');
  }
}