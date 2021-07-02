const activeClass = "active";
var typewriter;
var currentPage = "home";

var siteDictionary =
{
  "gamejolt.com" : "Game Jolt", 
  "thematiaz0.itch.io" : "Itch.io",
  "cyberevolver-studios.itch.io" : "Itch.io",
  "cyberevolver_studios.indie.af" : "Game Website",
  "github.com" : "GitHub (+ Source Code)"
} 

var EXTRAS = "<br /><br /><i>Loading all choices</i>";
var HINT = `(<i>Choose an answer by typing the number below, you can also use buttons.</i>)`
var BREAK = "<hr />"

var HOME_PROMPT_0 = `<h1>Hello World!</h1><hr />`;
var HOME_PROMPT_1 = `I'm <b>Mateusz Kusionowicz</b>, a passionate game developer who loves to <b>plan out</b> ideas, <b>code</b> them and then <b>prototype</b> a lot.`;
var HOME_PROMPT_2 = `<br /><br />Got an interesting project? Send me a message at <a class='hyperlink' rel='noopener noreferrer' href='mailto:TheMatiaz0@protonmail.com'>TheMatiaz0@protonmail.com</a>.<br />`;
var HOME_CHOICE_0 = `<a href="#" onclick="ChangeWebsiteTo('about')"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Check information about my persona,`;
var HOME_CHOICE_1 = `<br /><a href="#" onclick="ChangeWebsiteTo('work')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - See my work,`;
var HOME_CHOICE_2 = `<br /><a href="#" onclick="ChangeWebsiteTo('contact')"><img src="images/numberthree.png" width="50px" height="50px" class="img-rounded" alt="Option number three"></a> - Find out how to contact me.<hr />`;

var ABOUT_PROMPT_0 = `<h1>About Me:</h1><hr />`;
var ABOUT_PROMPT_1 = `I'm an independent game developer with 2 year experience, currently based in Cracow (Poland). I can work either stationary or remotely. <b>I'm always looking forward for new offers to work on, so if you got something, non-commercial or commercial send me an email</b>.<br />`;
var ABOUT_PROMPT_2 = `<br /><br /><h4>Skills:</h4><hr />`;
var ABOUT_PROMPT_3 = `<div class="container">
<div class="row">
<div class="col">
<strong class="listHeader">LANGUAGES</strong>
<ul>
  <li>
  C#
  </li>
  <li>
  HTML5
  </li>
  <li>
  CSS3
  </li>
  <li>
  Python 3
  </li>
  <li>
  JavaScript
  </li>
  <li>
  Dart
  </li>
  <li>
  Lua
  </li>
  <li>
  English (B2 level) / Polish (native speaker)
  </li>
</ul>
</div>
<div class="col">
<strong class="listHeader">FRAMEWORKS</strong>
<ul>
  <li>
  Unity
  </li>
  <li>
  Clickteam Fusion 2.5
  </li>
  <li>
  WPF/WinForms
  </li>
  <li>
  Flutter
  </li>
</ul>
</div>
<div class="col">
<strong class="listHeader">FIELDS</strong>
<ul>
  <li>
  Gameplay
  </li>
  <li>
  User Interface
  </li>
  <li>
  Scripting
  </li>
  <li>
  Storytelling
  </li>
  <li>
  Marketing
  </li>
</ul>
</div>
</div>
</div>`;
var ABOUT_CHOICE_0 = `<a href="#" onclick="ChangeWebsiteTo('home')"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Go back to the beginning,`;
var ABOUT_CHOICE_1 = `<br /><a href="#" onclick="ChangeWebsiteTo('work')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - Check how I used skills in the work,`;
var ABOUT_CHOICE_2 = `<br /><a href="#" onclick="ChangeWebsiteTo('contact')"><img src="images/numberthree.png" width="50px" height="50px" class="img-rounded" alt="Option number three"></a> - Find out how you can contact me.<hr />`;

var WORK_PROMPT_0 = `<h1>Featured projects:</h1><hr />`;
var WORK_PROMPT_1 = `
<div class="row">
<div class="col-sm-6">
<div class="card game-card" style="width: 35rem;">
<a href="#" onclick="ViewFirstProject()">
<div class="projectHeader">
<img id="animated" class="img-fluid img-rounded imgGroupProject animated card-img-top" src="./images/tt-preview.gif" alt="">
<img id="static" class="img-fluid img-rounded static card-img-top" src="./images/tt-thumbnail.png" alt="">
</div>
</a>
<div class="card-body">
<p class="card-text">The Towerer is rogue-like, bullet-hell shooter based in sci-fi universe.</p>
</div>
</div>
</div>

<div class="col-sm-6">
<div class="card game-card" style="width: 35rem;">
<a href="#" onclick="ViewSecondProject()">
<div class="projectHeader">
<img id="animated" class="img-fluid img-rounded imgGroupProject animated card-img-top" src="./images/tgib-preview.gif" alt="">
<img id="static" class="img-fluid img-rounded static card-img-top" src="./images/tgib-thumbnail.png" alt="">
</div>
</a>
<div class="card-body">
<p class="card-text">This Game Is Broken is infinite walking platformer, where you have to run from the Deadly Wall Of Bugs.</p>
</div>
</div>
</div>

</div>

<div class="row">
<div class="col-sm-6">
<div class="card game-card" style="width: 35rem;">
<a href="#" onclick="ViewThirdProject()">
<div class="projectHeader">
<img id="animated" class="img-fluid img-rounded imgGroupProject animated card-img-top" src="./images/bp-preview.gif" alt="">
<img id="static" class="img-fluid img-rounded static card-img-top" src="./images/bp-thumbnail.png" alt="">
</div>
</a>
<div class="card-body">
<p class="card-text">BluePlayer is an audio listening software with ability to export and import playlists.</p>
</div>
</div>
</div>

<div class="col-sm-6">
<div class="card game-card" style="width: 35rem;">
<a href="#" onclick="ViewFourthProject()">
<div class="projectHeader">
<img id="animated" class="img-fluid img-rounded imgGroupProject animated card-img-top" src="./images/lc-preview.gif" alt="">
<img id="static" class="img-fluid img-rounded static card-img-top" src="./images/lc-thumbnail.png" alt="">
</div>
</a>
<div class="card-body">
<p class="card-text">Light Checkers is like a classical Checkers game, but you can control all the rules behind it.</p>
</div>
</div>
</div>

</div>
`;

var CONTACT_PROMPT_0 = `<h1>Contact Info:</h1><hr />`;
var CONTACT_PROMPT_1 = `Feel free to reach me at: <a rel="noopener noreferrer" href="mailto:TheMatiaz0@protonmail.com" class="hyperlink">TheMatiaz0@protonmail.com</a> or through LinkedIn at: <a class="hyperlink" target="_blank" rel="noopener" href="https://www.linkedin.com/in/mateusz-kusionowicz">https://www.linkedin.com/in/mateusz-kusionowicz</a>.<br />`;
var CONTACT_CHOICE_0 = `<a rel="noopener noreferrer" href="mailto:TheMatiaz0@protonmail.com"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Send me an email,`;
var CONTACT_CHOICE_1 = `<br /><a href="#" onclick="ChangeWebsiteTo('home')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - Return back to the beginning.<hr />`;

var HOME_FINAL = HOME_PROMPT_0 + HOME_PROMPT_1 + HOME_PROMPT_2 + BREAK + HOME_CHOICE_0 + HOME_CHOICE_1 + HOME_CHOICE_2 + HINT;
var ABOUT_FINAL = ABOUT_PROMPT_0 + ABOUT_PROMPT_1 + ABOUT_PROMPT_2 + ABOUT_PROMPT_3 + BREAK + ABOUT_CHOICE_0 + ABOUT_CHOICE_1 + ABOUT_CHOICE_2; 
var WORK_FINAL = WORK_PROMPT_0 + WORK_PROMPT_1;
var CONTACT_FINAL = CONTACT_PROMPT_0 + CONTACT_PROMPT_1 + BREAK + CONTACT_CHOICE_0 + CONTACT_CHOICE_1;

var FIRST_PROJECT = SetupGamePage("The Towerer", "https://www.youtube.com/embed/dXxaLjlUU6M", "Unity (C# language)", "Windows, Linux", "7 months", "Non-commercial, 5 people team", 
"Programmed as a second programmer, mainly content and secondary mechanics. Designed majority of User Interface and some of the enemies (for ex. boss named Smiley Guy). Planned the approach to marketing, made all marketing assets (video, screenshots, etc), and wrote all the lore (including the ending monologue and story for possible prequels).", 
["images/tt-screenshots/1.webp", "images/tt-screenshots/2.webp", "images/tt-screenshots/3.webp", "images/tt-screenshots/4.webp"], 
["https://gamejolt.com/games/the-towerer/513680", "https://cyberevolver-studios.itch.io/the-towerer", "https://cyberevolver_studios.indie.af/the-towerer"]);

var SECOND_PROJECT = SetupGamePage("This Game Is Broken", "https://www.youtube.com/embed/BC3UiNOp7Wc", "Unity (C# language)", "Windows, Android", "1 month (made initially on KrakJam during 48 hours)", "Non-commercial, 4 people team", 
"Programmed huge amount of content to the game. Implemented post-processing. Managed the team in effective way and improved the design of the game.", 
["images/tgib-screenshots/1.webp", "images/tgib-screenshots/2.webp"], 
["https://gamejolt.com/games/this_game_is_broken/470676", "https://thematiaz0.itch.io/this-game-is-broken", "https://github.com/TheMatiaz0/This-Game-Is-Broken"]);

var THIRD_PROJECT = SetupGamePage("BluePlayer", null, "WPF (C# language)", "Windows", "2 months", "Non-commercial, solo", 
"Programmed/designed/created entire software from beginning to the end, based on WPF and Material Design.", 
["images/bp-screenshots/1.gif", "images/bp-screenshots/2.gif", "images/bp-screenshots/3.gif", "images/bp-screenshots/4.gif"], 
["https://github.com/TheMatiaz0/BluePlayer"]);

var FOURTH_PROJECT = SetupGamePage("Light Checkers", null, "Unity (C# language)", "Windows, WebGL", "3 months", "Non-commercial, solo", 
"Programmed/designed/created entire game from beginning to the end (based on classical Checkers game).", 
["images/lc-screenshots/1.gif", "images/lc-screenshots/2.png", "images/lc-screenshots/3.gif", "images/lc-screenshots/4.png"], 
["https://gamejolt.com/games/Light_Checkers/579087", "https://github.com/TheMatiaz0/Light-Checkers"]);


var contentArray = 
{"home" : HOME_FINAL, 
"about" : ABOUT_FINAL, 
"work" : WORK_FINAL,
"contact" : CONTACT_FINAL, 
"firstProject" : FIRST_PROJECT,
"secondProject" : SECOND_PROJECT,
"thirdProject" : THIRD_PROJECT, 
"fourthProject" : FOURTH_PROJECT};

$(document).ready(function()
{
  ViewHomeText();
});


$(function()
{
  $('.projectHeader').on('mouseenter',function()
  {
    $(this).toggleClass('animated', 'static');
  })
});


function SetupGamePage(title, ytURL, engine, platform, length, type, done, imgSrcs, downloads)
{
  final0 = `<h1>${title}</h1><br />
  `
  if (ytURL == null)
  {
    video1 = "";
  }

  else
  {
    video1 = `
    <h4>Videos:</h4><hr />
    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item video" src="${ytURL}" frameborder="0" allowfullscreen></iframe>
        </div><br />`;
  }

      final1 = `
      <h4>Details:</h4><hr/>
      <div class="container">
        <div class="row">
          <div class="col">
            <strong class="listHeader">ENGINE/LANGUAGE:</strong>
            <ul>
            <li>
              ${engine}
            </li>
            </ul>
          </div>
          <div class="col">
            <strong class="listHeader">PLATFORMS:</strong>
            <ul>
            <li>
              ${platform}
            </li>
            </ul>
          </div>
          <div class="col">
            <strong class="listHeader">PROJECT LENGTH:</strong>
            <ul>
            <li>
              ${length}
            </li>
            </ul>
          </div>
          <div class="col">
          <strong class="listHeader">PROJECT TYPE:</strong>
          <ul>
          <li>
            ${type}
          </li>
          </ul>
          </div>
        </div>
      </div><br />
      <h4>What I did:</h4><hr />
      <p>${done}</p>
      <br /><h4>Images:</h4><hr />
  
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="img-fluid gameImg" src="${imgSrcs[0]}">
          </div>
          <div class="col">
            <img class="img-fluid gameImg" src="${imgSrcs[1]}">
          </div>
        </div>
        `

      if (imgSrcs.length > 2)
      {
        imgArr2 = 
        `
        <div class="row">
          <div class="col">
            <img class="img-fluid gameImg" src="${imgSrcs[2]}">
          </div>
          <div class="col">
            <img class="img-fluid gameImg" src="${imgSrcs[3]}">
          </div>
        </div>
      `
      }
      else
      {
        imgArr2 = "";
      }

      final3 = 
      `
      </div><br /><br />
      <h4>Published on:</h4><hr />
      <div class="container">
        <div class="row">
          <div class="col footer-links">
          `
          links = ""
          i = 0
          while (i < downloads.length)
          {
            let domain = (new URL(downloads[i]))
            let domainHost = domain.hostname.replace('www.', '')
            let trueHost = siteDictionary[domainHost];

            if (i + 1 == downloads.length)
            {
              links += `<a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="${domain}"><span class="text">${(trueHost)}</span></a></span>`;
              break;
            }

            links += `<a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="${domain}"><span class="text">${(trueHost)}</span></a> | </span>`;
            i++;
          }

          final4 = 
          `
          </div>
        </div>
        <hr /><br /><br />
        <div class="row">
          <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
        </div>
      </div>
  </div>`;

  return final0 + video1 + final1 + imgArr2 + final3 + links + final4;
}

function PickChoice(text, dict)
{
  num = parseInt(text);

  for (var key in dict)
  {
    if (num == key)
    {
      dict[key]();
      break;
    }
  }
}

function ChangeWebsiteTo (id)
{
  $(`.downInput`).val("");

  var finalText = $(`#${id}`).prop('href')

  if (typeof finalText === 'undefined')
  {
    return;
  }

  changeActivePage($(`.active`).attr('id'), id);

  SetupWebpage(id);
}

function toggleImage()
{
  document.querySelector('#closeOpenImage').classList.toggle('hidden');
}

function changeActivePage(previousID, newID)
{
  $(`#${previousID}`).removeClass(activeClass);
  $(`#${newID}`).addClass(activeClass);
}

function ViewHomeText()
{
  $(".artColumn").css('visibility', 'visible');
  $(".typeColumn").addClass('col');
  $(".artColumn").addClass('col');
  $(".downInput").attr('oninput', 'PickChoice($(".downInput").val(), { 1: function() { ChangeWebsiteTo("about"); }, 2: function() { ChangeWebsiteTo("work"); }, 3: function() { ChangeWebsiteTo("contact"); } });')

  currentPage = "home";
  var thisPage = currentPage;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 13,
    deleteSpeed: 3
  });


  $(`.ascii-art`).text(`
lllllllllllllllloodoc;,'....               'cdoollllcccccccc
ccclllloooooddddxkOxc,''.',,,'...           ,oooollllcloooll
llloooooooddooddxxdc'...,:clcllc:;'.        'lddooooolllllll
oooooooddxxxxxkko,....',;::;;::::::;;,'..  .:odddddddddooolo
ddddddodxxxxxkkx;........';;,,''',;ccccc:,':dkxddoodooddddoo
ooddxxxxkkOOO0Ox;...... ..'',,,,'..';cllllldkxxxddddddxxxxxx
dxxxxxxxxxxkkko:;..''.  ...   ...... .,;:clxOkxxxxxxxxxxxddd
dxxxkOOOOOOO0Ol,;c:::'  ....      ....';::ccldkOOkkkOO00OOkx
dxxdxxkkkkOO00o;cloc:;'..    ....  ....'';cl;;x0kkxdooolllc:
kkkkkO00000KKKkl:lol:::::,.....  .  .........':c::,;,'''..';
xxkkkkkkOOOO0K0ocoolcc:col:,...':l;... ...   .'',,';:;';c,;o
OOOO0OOO000Oo:looooolcccllll:,';lol:,........:o;od,dKKl;kl,k
xkxxkkkOO0Kk' ;doooollllc::::::ccllodccl,:c'oK0:lO:cKXk;lk:l
OOkxkOO00KKo..cxoclllllc;,,',,;;loookcck:okcxXKxo0kxKXK0kKKO
xkkOOO0KK0x;,oxxoc:cllllllc:::::cldOX0kK00NKXXXNKKNKXK0K0kkx
xkkkOO0Oo,..lOxddl:::clolllooodddxOOO0kkkxxoolclcccccccc::::
OOO0KXKl...cxxdddolc:::cllodxxdl;,''.........':odxxkkOO0OOOO
kkkO0Ko.   'coddxxollccclodxoccll:;;;;:clooolcd0XK00OOOOOOOO
0OOOxl.      .:oddddolloodkk;.,ckOkxxxxdlloollox0XXX0KKKKKK0
c::;,'..      ..;oddddoodxOl.   :0NNNNNXKkolllllodOK000OOOOO
,;;;'.,;.        .:dkOkxxko.    .;oox0NWWWKxlccllcldOKK000Ok
...','....         .;okOO0l  ....'.  .cx0KXKkl::cccclx0KKK0O
,'.  ....             .;cOx. .....     .,xKXXKxc:::cccox0K0O
  `);

typewriter.typeString(HOME_PROMPT_0)
    .typeString(HOME_PROMPT_1)
    .pauseFor(90)
    .typeString(HOME_PROMPT_2)
    .pauseFor(20)
    .changeDelay(1)
    .typeString(EXTRAS)
    .pauseFor(6)
    .typeString(".")
    .pauseFor(7)
    .typeString(".")
    .pauseFor(3)
    .typeString(".")
    .deleteChars(23)
    .typeString(BREAK)
    .pauseFor(60)
    .typeString(HOME_CHOICE_0)
    .pauseFor(125)
    .typeString(HOME_CHOICE_1)
    .pauseFor(125)
    .typeString(HOME_CHOICE_2)
    .callFunction(() => {
        DownInputVisible(thisPage);
    })
    .changeDelay(1)
    .pauseFor(400)
    .typeString(HINT)
    .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewAboutMeText()
{
  typewriter.stop();

  $(".artColumn").css('visibility', 'visible');
  $(".typeColumn").addClass('col');
  $(".artColumn").addClass('col');
  $(".downInput").attr('oninput', 'PickChoice($(".downInput").val(), { 1: function() { ChangeWebsiteTo("home"); }, 2: function() { ChangeWebsiteTo("work"); }, 3: function() { ChangeWebsiteTo("contact"); } });')

  $(`.ascii-art`).text
  (``);

  currentPage = "about";
  var thisPage = currentPage;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 6,
    deleteSpeed: 1
});

  typewriter.typeString(ABOUT_PROMPT_0)
      .typeString(ABOUT_PROMPT_1)
      .pauseFor(30)
      .typeString(ABOUT_PROMPT_2)
      .typeString(ABOUT_PROMPT_3)
      .changeDelay(1)
      .typeString(EXTRAS)
      .pauseFor(6)
      .typeString(".")
      .pauseFor(7)
      .typeString(".")
      .pauseFor(3)
      .typeString(".")
      .deleteChars(23)
      .typeString(BREAK)
      .pauseFor(60)
      .callFunction(() => {
        DownInputVisible(thisPage);
      })
      .typeString(ABOUT_CHOICE_0)
      .pauseFor(125)
      .typeString(ABOUT_CHOICE_1)
      .pauseFor(125)
      .typeString(ABOUT_CHOICE_2)
      .changeDelay(1)
      .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewWorkText()
{
    typewriter.stop();

    $(".artColumn").css('visibility', 'hidden');
    $(".typeColumn").removeClass('col');
    $(".artColumn").removeClass('col');

    currentPage = "work";
    var thisPage = currentPage;

    $(`.ascii-art`).text(``);

    typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 0.0001,
    cursor: ''
    });

    typewriter.start();

    typewriter.typeString(WORK_PROMPT_0)
    .typeString(WORK_PROMPT_1)
    .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewFirstProject()
{
  typewriter.stop();
  $('#skipButton').css('visibility', 'visible');

  currentPage = "firstProject";
  var thisPage = currentPage;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 1
  });

    typewriter.typeString(FIRST_PROJECT)
    .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewSecondProject()
{
  typewriter.stop();
  $('#skipButton').css('visibility', 'visible');

  currentPage = "secondProject";
  var thisPage = currentPage;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 1
  });

    typewriter.typeString(SECOND_PROJECT)
    .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewThirdProject()
{
  typewriter.stop();
  $('#skipButton').css('visibility', 'visible');

  currentPage = "thirdProject";
  var thisPage = currentPage;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 1
  });

    typewriter.typeString(THIRD_PROJECT)
    .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewFourthProject()
{
  typewriter.stop();
  $('#skipButton').css('visibility', 'visible');

  currentPage = "fourthProject";
  var thisPage = currentPage;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 1
  });

    typewriter.typeString(FOURTH_PROJECT)
    .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewContactText()
{
  typewriter.stop();
  $(".artColumn").css('visibility', 'visible');
  $(".typeColumn").addClass('col');
  $(".artColumn").addClass('col');

  currentPage = "contact";
  var thisPage = currentPage;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 13
});


$(`.ascii-art`).text(
`
    .(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*   
  *(%%%%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&%%%%/*
  %%%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&%%%
  %%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@&%%%%##%%%&&@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@&#(((((((((((((#%&@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@&%(((((((((((((((((#%@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@&#((((((((###((((((((%@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@&#(((((#%&@@&#(((((((%@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@@@@@&#(((((((#%&@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@@@&%((((((((%&@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@@&#(((((((%@@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@@&#(((((#&@@@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@@@&&&&&&@@@@@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@&%((((((#%&@@@@@@@@@@@@@@@@@@&%%%
  %%&@@@@@@@@@@@@@@@@@@@%(((((((((%@@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@%#(((((((#&@@@@@@@@@@@@@@@@@@&%%%
  %%%@@@@@@@@@@@@@@@@@@@@&%####%&@@@@@@@@@@@@@@@@@@@@&%%%
  %%%&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&%%%
  (#%%%&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&%%%#(
   .*#%%%%%%%%%%%%%%&@@@@@@@@@@@@@@@@&&%%%%%%%%%%%%%%(,  
                                                  
`);

typewriter.typeString(CONTACT_PROMPT_0)
          .typeString(CONTACT_PROMPT_1)
          .changeDelay(1)
          .typeString(EXTRAS)
          .pauseFor(6)
          .typeString(".")
          .pauseFor(7)
          .typeString(".")
          .pauseFor(3)
          .typeString(".")
          .deleteChars(23)
          .typeString(BREAK)
          .pauseFor(60)
          .callFunction(() => {
            DownInputVisible(thisPage);
          })
          .typeString(CONTACT_CHOICE_0)
          .pauseFor(125)
          .typeString(CONTACT_CHOICE_1)
          .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function hideTextAfterWrite(id)
{
  if (currentPage !== id)
  {
    return;
  }

  $('#skipButton').css('visibility', 'hidden');
}

function DownInputVisible(id)
{
  if (currentPage !== id)
  {
    return;
  }

  if (currentPage === "firstProject" || currentPage === "secondProject" || currentPage === "thirdProject" || currentPage === "fourthProject" || currentPage === "work")
  {
    return;
  }

  $('.downInput').css('visibility', 'visible');
}

function skipText()
{
  typewriter.stop();
  DownInputVisible(currentPage);
  $(`.typewriter`).html(contentArray[currentPage]);
  hideTextAfterWrite(currentPage);
}

function SetupWebpage(id)
{
  typewriter.stop();
  $(`.downInput`).css('visibility', 'hidden');
  $('#skipButton').css('visibility', 'visible');

  switch (id)
  {
    case "home":
      ViewHomeText();
      break;

    case "about":
      ViewAboutMeText();
      break;

    case "work":
      ViewWorkText();
      break;

    case "contact":
      ViewContactText();
      break;
  }
}
