const activeClass = "active";
var typewriter;
var currentPage = "home";

var contentArray = {"home" : `<h1>Hello, world!</h1><hr />
I'm <b>Mateusz Kusionowicz</b>, a passionate game developer who loves to <b>plan out</b> ideas, <b>code</b> them and then <b>prototype</b> a lot.
<br /><br />Got an interesting project? Send me a message at <a class='hyperlink' rel="noopener noreferrer" href='mailto:TheMatiaz0@protonmail.com'>TheMatiaz0@protonmail.com</a>.
<br /><br />
========================================================================
<br /><a href="#" onclick="ChangeWebsiteTo('about')"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Check information about my persona,
<br /><a href="#" onclick="ChangeWebsiteTo('work')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - See my work,
<br /><a href="#" onclick="ChangeWebsiteTo('contact')"><img src="images/numberthree.png" width="50px" height="50px" class="img-rounded" alt="Option number three"></a> - Find out how to contact me.
<br />========================================================================<br /><br />
<i>(Choose an answer by typing the number below, you can also use buttons.)</i>`, 
"about" : 
`<h1>About Me:</h1><hr />
I'm an independent game developer with 2 year experience, currently based in Cracow (Poland). I can work either stationary or remotely. <b>I'm always looking forward for new offers to work on, so if you got something, non-commercial or commercial send me an email</b>.<br />
<br /><br /><h4>Skills:</h4><hr />
<div class="container">
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
      </div>
	  <br />====================================================================
	  <br /><a href="#" onclick="ChangeWebsiteTo('home')"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Go back to the beginning,
      <br /><a href="#" onclick="ChangeWebsiteTo('work')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - Check how I used skills in the work,
      <br /><a href="#" onclick="ChangeWebsiteTo('contact')"><img src="images/numberthree.png" width="50px" height="50px" class="img-rounded" alt="Option number three"></a> - Find out how you can contact me.
      <br />====================================================================<br /><br />
`, "work" : `<h1>Featured projects:</h1><hr />
<div class="container">
<div class="row">
  <a href="#" onclick="ViewFirstProject()" class="col projectSquare projectSquare-center">
    <div class="projectHeader imgGroup">
      <img class="img-fluid img-rounded imgGroupProject" width="600" height="350" src="images/tt-thumbnail.png">
    </div>
  </a>
  <a href="#" onclick="ViewSecondProject()" class="col projectSquare projectSquare-center">
  <div class="projectHeader imgGroup">
    <img class="img-fluid img-rounded imgGroupProject" width="600" height="350" src="images/tgib-thumbnail.png">
  </div>
</a>
</div>
<div class="row">
  <a href="#" onclick="ViewThirdProject()" class="col projectSquare projectSquare-center">
    <div class="projectHeader imgGroup">
      <img class="img-fluid img-rounded imgGroupProject" width="600" height="200" src="images/bp-thumbnail.png">
    </div>
  </a>
</div>
<div class="row">
<a href="#" onclick="ViewFourthProject()" class="col projectSquare projectSquare-center">
  <div class="projectHeader imgGroup">
    <img class="img-fluid img-rounded imgGroupProject" width="600" height="350" src="images/lc-thumbnail.png">
  </div>
</a>
</div>
</div>
</div>`, "contact" : `<h1>Contact Info:</h1><hr />
Feel free to reach me at: <a rel="noopener noreferrer" href="mailto:TheMatiaz0@protonmail.com" class="hyperlink">TheMatiaz0@protonmail.com</a> or through LinkedIn at: <a class="hyperlink" target="_blank" rel="noopener" href="https://www.linkedin.com/in/mateusz-kusionowicz">https://www.linkedin.com/in/mateusz-kusionowicz</a>.
<br /><br />=========================================================
<br /><a rel="noopener noreferrer" href="mailto:TheMatiaz0@protonmail.com"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Send me an email,
<br /><a href="#" onclick="ChangeWebsiteTo('home')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - Return back to the beginning.
<br />=========================================================<br /><br />`, "firstProject" : `<h1>The Towerer</h1><br />
<h4>Videos:</h4><hr />
<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item video" src="https://www.youtube.com/embed/dXxaLjlUU6M" frameborder="0" allowfullscreen></iframe>
    </div><br />
    <h4>Details:</h4><hr/>
    <div class="container">
      <div class="row">
        <div class="col">
          <strong class="listHeader">ENGINE/LANGUAGE:</strong>
          <ul>
          <li>
            Unity (C# language)
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PLATFORMS:</strong>
          <ul>
          <li>
            Windows, Linux
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PROJECT LENGTH:</strong>
          <ul>
          <li>
            7 months
          </li>
          </ul>
        </div>
        <div class="col">
        <strong class="listHeader">PROJECT TYPE:</strong>
        <ul>
        <li>
          Non-commercial, 5 people team
        </li>
        </ul>
        </div>
      </div>
    </div><br />
    <h4>What I did:</h4><hr />
    <p>Programmed as a second programmer, mainly content and secondary mechanics. Designed majority of User Interface and some of the enemies (for ex. boss named Smiley Guy). Planned the approach to marketing, made all marketing assets (video, screenshots, etc), and wrote all the lore (including the ending monologue and story for possible prequels).</p>
    <br /><h4>Images:</h4><hr />

    <div class="container">
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/1.webp">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/2.webp">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/3.webp">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/4.webp">
        </div>
      </div>
    </div><br /><br />
    <h4>Published on:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col footer-links">
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://gamejolt.com/games/the-towerer/513680"><span class="text">Game Jolt</span></a> |</span>
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://cyberevolver-studios.itch.io/the-towerer"><span class="text">Itch.io</span></a><span> |</span>
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://cyberevolver_studios.indie.af/the-towerer"><span class="text">Game Website</span></a>
        </div>
      </div>
      <hr /><br /><br />
      <div class="row">
        <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
      </div>
    </div>
</div>`, "secondProject" : `<h1>This Game Is Broken</h1><br />
<h4>Videos:</h4><hr />
<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item video" src="https://www.youtube.com/embed/BC3UiNOp7Wc" frameborder="0" allowfullscreen></iframe>
</div><br />
<h4>Details:</h4><hr/>
<div class="container">
  <div class="row">
    <div class="col">
      <strong class="listHeader">ENGINE/LANGUAGE:</strong>
      <ul>
      <li>
        Unity (C# language)
      </li>
      </ul>
    </div>
    <div class="col">
      <strong class="listHeader">PLATFORMS:</strong>
      <ul>
      <li>
        Windows
      </li>
      </ul>
    </div>
    <div class="col">
      <strong class="listHeader">PROJECT LENGTH:</strong>
      <ul>
      <li>
        1 month (made initially on KrakJam during 48 hours)
      </li>
      </ul>
    </div>
    <div class="col">
    <strong class="listHeader">PROJECT TYPE:</strong>
    <ul>
    <li>
      Non-commercial, 4 people team
    </li>
    </ul>
    </div>
  </div>
</div><br />
<h4>What I did:</h4><hr />
<p>Programmed huge amount of content to the game. Implemented post-processing. Managed the team in effective way and improved the design of the game.</p>
<br /><h4>Images:</h4><hr />
<div class="container">
  <div class="row">
    <div class="col">
      <img class="img-fluid gameImg" src="images/tgib-screenshots/1.webp">
    </div>
    <div class="col">
      <img class="img-fluid gameImg" src="images/tgib-screenshots/2.webp">
    </div>
  </div>
</div><br /><br />
<h4>Published on:</h4><hr />
<div class="container">
  <div class="row">
    <div class="col footer-links">
      <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://gamejolt.com/games/this_game_is_broken/470676"><span class="text">Game Jolt</span></a> |</span>
      <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://thematiaz0.itch.io/this-game-is-broken"><span class="text">Itch.io</span></a><span> |</span>
      <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://github.com/TheMatiaz0/This-Game-Is-Broken"><span class="text">Source Code (GitHub)</span></a>
    </div>
  </div>
  <hr /><br /><br />
  <div class="row">
    <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
  </div>
</div>
</div>`, "thirdProject" : `<h1>BluePlayer</h1><br />
<h4>Details:</h4><hr/>
<div class="container">
  <div class="row">
    <div class="col">
      <strong class="listHeader">ENGINE/LANGUAGE:</strong>
      <ul>
      <li>
        WPF (C# language)
      </li>
      </ul>
    </div>
    <div class="col">
      <strong class="listHeader">PLATFORMS:</strong>
      <ul>
      <li>
        Windows
      </li>
      </ul>
    </div>
    <div class="col">
      <strong class="listHeader">PROJECT LENGTH:</strong>
      <ul>
      <li>
        2 months
      </li>
      </ul>
    </div>
    <div class="col">
    <strong class="listHeader">PROJECT TYPE:</strong>
    <ul>
    <li>
      Non-commercial, one man team
    </li>
    </ul>
    </div>
  </div>
</div><br />
<h4>What I did:</h4><hr />
<p>Programmed/designed/created entire software from beginning to the end, thanks to WPF and Material Design.</p>
<br /><h4>Images:</h4><hr />
<div class="container">
  <div class="row">
    <div class="col">
      <img class="img-fluid gameImg" src="images/bp-screenshots/1.gif">
    </div>
    <div class="col">
      <img class="img-fluid gameImg" src="images/bp-screenshots/2.gif">
    </div>
  </div>
  <div class="row">
    <div class="col">
      <img class="img-fluid gameImg" src="images/bp-screenshots/3.gif">
    </div>
    <div class="col">
      <img class="img-fluid gameImg" src="images/bp-screenshots/4.gif">
    </div>
  </div>
</div><br /><br />
<h4>Published on:</h4><hr />
<div class="container">
  <div class="row">
    <div class="col footer-links">
      <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://github.com/TheMatiaz0/BluePlayer"><span class="text">GitHub (+ Source Code)</span></a>
    </div>
  </div>
  <hr /><br /><br />
  <div class="row">
    <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
  </div>
</div>
</div>`, "fourthProject" : `<h1>Light Checkers</h1><br />
<h4>Details:</h4><hr/>
<div class="container">
  <div class="row">
    <div class="col">
      <strong class="listHeader">ENGINE/LANGUAGE:</strong>
      <ul>
      <li>
        Unity (C# language)
      </li>
      </ul>
    </div>
    <div class="col">
      <strong class="listHeader">PLATFORMS:</strong>
      <ul>
      <li>
        Windows, WebGL
      </li>
      </ul>
    </div>
    <div class="col">
      <strong class="listHeader">PROJECT LENGTH:</strong>
      <ul>
      <li>
        3 months
      </li>
      </ul>
    </div>
    <div class="col">
    <strong class="listHeader">PROJECT TYPE:</strong>
    <ul>
    <li>
      Non-commercial, one man team
    </li>
    </ul>
    </div>
  </div>
</div><br />
<h4>What I did:</h4><hr />
<p>Programmed/designed/created entire game from beginning to the end (based on the Checkers game).</p>
<br /><h4>Images:</h4><hr />
<div class="container">
  <div class="row">
    <div class="col">
      <img class="img-fluid gameImg" src="images/lc-screenshots/1.gif">
    </div>
    <div class="col">
      <img class="img-fluid gameImg" src="images/lc-screenshots/2.png">
    </div>
  </div>
  <div class="row">
    <div class="col">
      <img class="img-fluid gameImg" src="images/lc-screenshots/3.gif">
    </div>
    <div class="col">
      <img class="img-fluid gameImg" src="images/lc-screenshots/4.png">
    </div>
  </div>
</div><br /><br />
<h4>Published on:</h4><hr />
<div class="container">
  <div class="row">
    <div class="col footer-links">
      <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://gamejolt.com/games/Light_Checkers/579087"><span class="text">Game Jolt</span></a> |</span>
      <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://github.com/TheMatiaz0/Light-Checkers"><span class="text">Source Code (GitHub)</span></a>
    </div>
  </div>
  <hr /><br /><br />
  <div class="row">
    <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
  </div>
</div>
</div>`};



$(document).ready(function()
{
  ViewHomeText();
});


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

typewriter.typeString(`<h1>Hello, world!</h1><hr />`)
    .typeString(
        `I'm <b>Mateusz Kusionowicz</b>, a passionate game developer who loves to <b>plan out</b> ideas, <b>code</b> them and then <b>prototype</b> a lot.`
        )
    .pauseFor(90)
    .typeString(
        "<br /><br />Got an interesting project? Send me a message at <a class='hyperlink' rel='noopener noreferrer' href='mailto:TheMatiaz0@protonmail.com'>TheMatiaz0@protonmail.com</a>."
        )
    .pauseFor(20)
    .changeDelay(1)
    .typeString("<br /><br /><i>Loading all choices</i>")
    .pauseFor(6)
    .typeString(".")
    .pauseFor(7)
    .typeString(".")
    .pauseFor(3)
    .typeString(".")
    .deleteChars(23)
    .typeString(`<br /><br />==========================================================================`)
    .typeString(
        `<br /><a href="#" onclick="ChangeWebsiteTo('about')"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Check information about my persona,`
        )
    .pauseFor(125)
    .typeString(
        `<br /><a href="#" onclick="ChangeWebsiteTo('work')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - See my work,`
        )
    .pauseFor(125)
    .typeString(
        `<br /><a href="#" onclick="ChangeWebsiteTo('contact')"><img src="images/numberthree.png" width="50px" height="50px" class="img-rounded" alt="Option number three"></a> - Find out how to contact me.`
        )
    .callFunction(() => {
        DownInputVisible(thisPage);
    })
    .changeDelay(1)
    .typeString(`<br />==========================================================================<br /><br />`)
    .pauseFor(400)
    .typeString(
        `(<i>Choose an answer by typing the number below, you can also use buttons.</i>)`)
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
  (`                                                                          
  ....******...............******....  
......*******.............*******....  
......********...........********....  
......****.,***.........***..****....  
......****...***,......***...****....  
......****....****...,***....****....  
......****.....****.****.....****....  
......****......*******......****....  
  ....****.......****........****....  
......****...................****....  
 .....****...................****....  
  ....****...................****......
  ....****...................****....  
  `);

  currentPage = "about";
  var thisPage = currentPage;
  
  // typewriter = null;

  typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 6,
    deleteSpeed: 1
});

  // typewriter.start();

  typewriter.typeString(`<h1>About Me:</h1><hr />`)
      .typeString(`I'm an independent game developer with 2 year experience, currently based in Cracow (Poland). I can work either stationary or remotely. <b>I'm always looking forward for new offers to work on, so if you got something, non-commercial or commercial send me an email</b>.<br />`)
      .pauseFor(30)
      .typeString(`<br /><br /><h4>Skills:</h4><hr />`)
      .typeString(`<div class="container">
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
      </div>`)
      .changeDelay(1)
      .typeString("<br /><br /><i>Loading all choices</i>")
      .pauseFor(6)
      .typeString(".")
      .pauseFor(7)
      .typeString(".")
      .pauseFor(3)
      .typeString(".")
      .deleteChars(23)
      .typeString(`<br />=================================================================`)
      .callFunction(() => {
        DownInputVisible(thisPage);
      })
      .typeString(
          `<br /><a href="#" onclick="ChangeWebsiteTo('home')"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Go back to the beginning,`
          )
      .pauseFor(125)
      .typeString(
          `<br /><a href="#" onclick="ChangeWebsiteTo('work')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - Check how I used skills in the work,`
          )
      .pauseFor(125)
      .typeString(
          `<br /><a href="#" onclick="ChangeWebsiteTo('contact')"><img src="images/numberthree.png" width="50px" height="50px" class="img-rounded" alt="Option number three"></a> - Find out how you can contact me.`
          )
      .changeDelay(1)
      .typeString(`<br />=================================================================<br /><br />`)
      .callFunction(() => hideTextAfterWrite(thisPage)).start();
}

function ViewWorkText()
{
    typewriter.stop();

    $(".artColumn").css('visibility', 'hidden');
    $(".typeColumn").removeClass('col');
    $(".artColumn").removeClass('col');
    // $(".downInput").attr('oninput', 'PickChoice($(".downInput").val(), { 1: function() { ChangeWebsiteTo("firstProject"); }, 2: function() { ChangeWebsiteTo("secondProject"); }, 3: function() { ChangeWebsiteTo("thirdProject"); }, 4: function() {ChangeWebsiteTo("home");} });')

    currentPage = "work";
    var thisPage = currentPage;

    $(`.ascii-art`).text(``);

    // typewriter = null;

    typewriter = new Typewriter('.typewriter', {
    loop: false,
    delay: 0.0001
    });

    typewriter.start();

    typewriter.typeString(`<h1>Featured projects:</h1><hr />`)
    .typeString(`
    <div class="container">
    <div class="row">
      <a href="#" onclick="ViewFirstProject()" class="col projectSquare projectSquare-center">
        <div class="projectHeader imgGroup">
          <img class="img-fluid img-rounded imgGroupProject" width="600" height="350" src="./images/tt-thumbnail.png">
        </div>
      </a>
      <a href="#" onclick="ViewSecondProject()" class="col projectSquare projectSquare-center">
      <div class="projectHeader imgGroup">
        <img class="img-fluid img-rounded imgGroupProject" width="600" height="350" src="./images/tgib-thumbnail.png">
      </div>
    </a>
    </div>
    <div class="row">
      <a href="#" onclick="ViewThirdProject()" class="col projectSquare projectSquare-center">
        <div class="projectHeader imgGroup">
          <img class="img-fluid img-rounded imgGroupProject" width="600" height="200" src="./images/bp-thumbnail.png">
        </div>
      </a>
    </div>
    <a href="#" onclick="ViewFourthProject()" class="col projectSquare projectSquare-center">
      <div class="projectHeader imgGroup">
        <img class="img-fluid img-rounded imgGroupProject" width="600" height="350" src="./images/lc-thumbnail.png">
      </div>
    </a>
    </div>
    </div>
    `)
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

  //typewriter.start();

    typewriter.typeString(`<h1>The Towerer</h1><br />`)
    .typeString(`<h4>Videos:</h4><hr />`)
    .typeString(`<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item video" src="https://www.youtube.com/embed/dXxaLjlUU6M" frameborder="0" allowfullscreen></iframe>
    </div><br />
    <h4>Details:</h4><hr/>
    <div class="container">
      <div class="row">
        <div class="col">
          <strong class="listHeader">ENGINE/LANGUAGE:</strong>
          <ul>
          <li>
            Unity (C# language)
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PLATFORMS:</strong>
          <ul>
          <li>
            Windows, Linux
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PROJECT LENGTH:</strong>
          <ul>
          <li>
            7 months
          </li>
          </ul>
        </div>
        <div class="col">
        <strong class="listHeader">PROJECT TYPE:</strong>
        <ul>
        <li>
          Non-commercial, 5 people team
        </li>
        </ul>
        </div>
      </div>
    </div><br />
    <h4>What I did:</h4><hr />
    <p>Programmed as a second programmer, mainly content and secondary mechanics. Designed majority of User Interface and some of the enemies (for ex. boss named Smiley Guy). Planned the approach to marketing, made all marketing assets (video, screenshots, etc), and wrote all the lore (including the ending monologue and story for possible prequels).</p>
    <br /><h4>Images:</h4><hr />

    <div class="container">
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/1.webp">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/2.webp">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/3.webp">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/tt-screenshots/4.webp">
        </div>
      </div>
    </div><br /><br />
    <h4>Published on:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col footer-links">
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://gamejolt.com/games/the-towerer/513680"><span class="text">Game Jolt</span></a> |</span>
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://cyberevolver-studios.itch.io/the-towerer"><span class="text">Itch.io</span></a><span> |</span>
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://cyberevolver_studios.indie.af/the-towerer"><span class="text">Game Website</span></a>
        </div>
      </div>
      <hr /><br /><br />
      <div class="row">
        <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
      </div>
    </div>
    </div>
    `)
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

  //typewriter.start();

    typewriter.typeString(`<h1>This Game Is Broken</h1><br />`)
    .typeString(`<h4>Videos:</h4><hr />`)
    .typeString(`<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item video" src="https://www.youtube.com/embed/BC3UiNOp7Wc" frameborder="0" allowfullscreen></iframe>
    </div><br />
    <h4>Details:</h4><hr/>
    <div class="container">
      <div class="row">
        <div class="col">
          <strong class="listHeader">ENGINE/LANGUAGE:</strong>
          <ul>
          <li>
            Unity (C# language)
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PLATFORMS:</strong>
          <ul>
          <li>
            Windows
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PROJECT LENGTH:</strong>
          <ul>
          <li>
            1 month (made initially on KrakJam during 48 hours)
          </li>
          </ul>
        </div>
        <div class="col">
        <strong class="listHeader">PROJECT TYPE:</strong>
        <ul>
        <li>
          Non-commercial, 4 people team
        </li>
        </ul>
        </div>
      </div>
    </div><br />
    <h4>What I did:</h4><hr />
    <p>Programmed huge amount of content to the game. Implemented post-processing. Managed the team in effective way and improved the design of the game.</p>
    <br /><h4>Images:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/tgib-screenshots/1.webp">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/tgib-screenshots/2.webp">
        </div>
      </div>
    </div><br /><br />
    <h4>Published on:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col footer-links">
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://gamejolt.com/games/this_game_is_broken/470676"><span class="text">Game Jolt</span></a> |</span>
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://thematiaz0.itch.io/this-game-is-broken"><span class="text">Itch.io</span></a><span> |</span>
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://github.com/TheMatiaz0/This-Game-Is-Broken"><span class="text">Source Code (GitHub)</span></a>
        </div>
      </div>
      <hr /><br /><br />
      <div class="row">
        <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
      </div>
    </div>
    </div>
    `)
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

  //typewriter.start();

    typewriter.typeString(`<h1>BluePlayer</h1><br />`)
    .typeString(`
    <h4>Details:</h4><hr/>
    <div class="container">
      <div class="row">
        <div class="col">
          <strong class="listHeader">ENGINE/LANGUAGE:</strong>
          <ul>
          <li>
            WPF (C# language)
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PLATFORMS:</strong>
          <ul>
          <li>
            Windows
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PROJECT LENGTH:</strong>
          <ul>
          <li>
            2 months
          </li>
          </ul>
        </div>
        <div class="col">
        <strong class="listHeader">PROJECT TYPE:</strong>
        <ul>
        <li>
          Non-commercial, one man team
        </li>
        </ul>
        </div>
      </div>
    </div><br />
    <h4>What I did:</h4><hr />
    <p>Programmed/designed/created entire software from beginning to the end, thanks to WPF and Material Design.</p>
    <br /><h4>Images:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/bp-screenshots/1.gif">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/bp-screenshots/2.gif">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/bp-screenshots/3.gif">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/bp-screenshots/4.gif">
        </div>
      </div>
    </div><br /><br />
    <h4>Published on:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col footer-links">
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://github.com/TheMatiaz0/BluePlayer"><span class="text">GitHub (+ Source Code)</span></a>
        </div>
      </div>
      <hr /><br /><br />
      <div class="row">
        <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
      </div>
    </div>
    </div>
    `)
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

  //typewriter.start();

    typewriter.typeString(`<h1>Light Checkers</h1><br />`)
    .typeString(`
    <h4>Details:</h4><hr/>
    <div class="container">
      <div class="row">
        <div class="col">
          <strong class="listHeader">ENGINE/LANGUAGE:</strong>
          <ul>
          <li>
            Unity (C# language)
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PLATFORMS:</strong>
          <ul>
          <li>
            Windows, WebGL
          </li>
          </ul>
        </div>
        <div class="col">
          <strong class="listHeader">PROJECT LENGTH:</strong>
          <ul>
          <li>
            3 months
          </li>
          </ul>
        </div>
        <div class="col">
        <strong class="listHeader">PROJECT TYPE:</strong>
        <ul>
        <li>
          Non-commercial, one man team
        </li>
        </ul>
        </div>
      </div>
    </div><br />
    <h4>What I did:</h4><hr />
    <p>Programmed/designed/created entire game from beginning to the end (based on the Checkers game).</p>
    <br /><h4>Images:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/lc-screenshots/1.gif">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/lc-screenshots/2.png">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img class="img-fluid gameImg" src="images/lc-screenshots/3.gif">
        </div>
        <div class="col">
          <img class="img-fluid gameImg" src="images/lc-screenshots/4.png">
        </div>
      </div>
    </div><br /><br />
    <h4>Published on:</h4><hr />
    <div class="container">
      <div class="row">
        <div class="col footer-links">
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://gamejolt.com/games/Light_Checkers/579087"><span class="text">Game Jolt</span></a> |</span>
          <a class="hyperlink disableUnderline" rel="noopener" target="_blank" href="https://github.com/TheMatiaz0/Light-Checkers"><span class="text">Source Code (GitHub)</span></a>
        </div>
      </div>
      <hr /><br /><br />
      <div class="row">
        <a id="back" class="btn btn-success" onclick="ChangeWebsiteTo('work')" href="#">See more projects...</a> 
      </div>
    </div>
    </div>
    `)
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
// typewriter.start();

typewriter.typeString(`<h1>Contact Info:</h1><hr />`)
          .typeString(`Feel free to reach me at: <a rel="noopener noreferrer" href="mailto:TheMatiaz0@protonmail.com" class="hyperlink">TheMatiaz0@protonmail.com</a> or through LinkedIn at: <a class="hyperlink" target="_blank" rel="noopener" href="https://www.linkedin.com/in/mateusz-kusionowicz">https://www.linkedin.com/in/mateusz-kusionowicz</a>.`)
          .changeDelay(1)
          .typeString("<br /><br /><i>Loading all choices</i>")
          .pauseFor(6)
          .typeString(".")
          .pauseFor(7)
          .typeString(".")
          .pauseFor(3)
          .typeString(".")
          .deleteChars(23)
          .typeString(`<br />=========================================================`)
          .callFunction(() => {
            DownInputVisible(thisPage);
          })
          .typeString(
              `<br /><a rel="noopener noreferrer" href="mailto:TheMatiaz0@protonmail.com"><img src="images/numberone.png" width="50px" height="50px" class="img-rounded" alt="Option number one"></a> - Send me an email,`
              )
          .pauseFor(125)
          .typeString(
              `<br /><a href="#" onclick="ChangeWebsiteTo('home')"><img src="images/numbertwo.png" width="50px" height="50px" class="img-rounded" alt="Option number two"></a> - Return back to the beginning.`
              )
          .typeString(`<br />=========================================================<br /><br />`)
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
