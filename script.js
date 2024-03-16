var ws = new WebSocket((window.location.href.startsWith("https")?"wss":"ws") + "://" + window.location.host + "/");

//BLOOK DEFINITIONS START
var blooks = ["Old Boot","Jellyfish","Clownfish","Frog","Crab","Pufferfish","Blobfish","Octopus","Narwhal","Dolphin","Baby Shark","Megalodon","Snowy Owl","Polar Bear","Arctic Fox","Baby Penguin","Penguin","Arctic Hare","Seal","Walrus","Snow Globe","Holiday Gift","Hot Chocolate","Holiday Wreath","Stocking","Gingerbread Man","Gingerbread House","Reindeer","Snowman","Santa Claus","Lil Bot","Lovely Bot","Angry Bot","Happy Bot","Watson","Buddy Bot","Brainy Bot","Mega Bot","Toast","Cereal","Yogurt","Breakfast Combo","Orange Juice","Milk","Waffle","Pancakes","French Toast","Pizza","Light Blue","Black","Red","Purple","Pink","Orange","Lime","Green","Teal","Tan","Maroon","Gray","Mint","Salmon","Burgandy","Baby Blue","Dust","Brown","Dull Blue","Yellow","Blue","Amber","Dino Egg","Dino Fossil","Stegosaurus","Velociraptor","Brontosaurus","Triceratops","Tyrannosaurus Rex","Chick","Chicken","Cow","Goat","Horse","Pig","Sheep","Duck","Alpaca","Bear","Moose","Fox","Raccoon","Squirrel","Owl","Hedgehog","Deer","Wolf","Beaver","Rainbow Jellyfish","Blizzard Clownfish","Lovely Frog","Lucky Frog","Spring Frog","Poison Dart Frog","Lucky Hamster","Chocolate Rabbit","Lemon Crab","Pirate Pufferfish","Donut Blobfish","Crimson Octopus","Rainbow Narwhal","Frost Wreath","Tropical Globe","New York Snow Globe","London Snow Globe","Japan Snow Globe","Egypt Snow Globe","Paris Snow Globe","Red Sweater Snowman","Blue Sweater Snowman","Elf Sweater Snowman","Santa Claws","Cookies Combo","Chilly Flamingo","Snowy Bush Monster","Nutcracker Koala","Sandwich","Ice Slime","Frozen Fossil","Ice Crab","Rainbow Panda","White Peacock","Tiger Zebra","Teal Platypus","Red Astronaut","Orange Astronaut","Yellow Astronaut","Lime Astronaut","Green Astronaut","Cyan Astronaut","Blue Astronaut","Pink Astronaut","Purple Astronaut","Brown Astronaut","Black Astronaut","Lovely Planet","Lovely Peacock","Haunted Pumpkin","Pumpkin Cookie","Ghost Cookie","Red Gummy Bear","Blue Gummy Bear","Green Gummy Bear","Chick Chicken","Chicken Chick","Raccoon Bandit","Owl Sheriff","Vampire Frog","Pumpkin King","Anaconda Wizard","Spooky Pumpkin","Spooky Mummy","Agent Owl","Master Elf","Party Pig","Wise Owl","Spooky Ghost","Phantom King","Tim the Alien","Rainbow Astronaut","Hamsta Claus","Ice Bat","Ice Bug","Ice Elemental","Rock Monster","Dink","Donk","Bush Monster","Yeti","Witch","Wizard","Elf","Fairy","Slime Monster","Jester","Dragon","Queen","Unicorn","King","Dingo","Echidna","Koala","Kookaburra","Platypus","Joey","Kangaroo","Crocodile","Sugar Glider","Dog","Cat","Rabbit","Goldfish","Hamster","Turtle","Kitten","Puppy","Panda","Sloth","Tenrec","Flamingo","Zebra","Elephant","Lemur","Peacock","Chameleon","Lion","Earth","Meteor","Stars","Alien","Planet","UFO","Spaceship","Astronaut","Pumpkin","Swamp Monster","Frankenstein","Vampire","Zombie","Mummy","Caramel Apple","Candy Corn","Werewolf","Ghost","Tiger","Orangutan","Cockatoo","Parrot","Anaconda","Jaguar","Macaw","Toucan","Panther","Capuchin","Gorilla","Hippo","Rhino","Giraffe","Two of Spades","Eat Me","Drink Me","Alice","Queen of Hearts","Dormouse","White Rabbit","Cheshire Cat","Caterpillar","Mad Hatter","King of Hearts","Deckhand","Buccaneer","Swashbuckler","Treasure Map","Seagull","Jolly Pirate","Pirate Ship","Kraken","Captain Blackbeard"];
//BLOOK DEFINITIONS END
var botinfo = {};
var gameobject = {};
var cheats = {"Hack":[{
type:"button",name:"Crash host(crypto)",action:function(a){setUserVal("cr/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Crypto",action:function(amt){setUserVal("cr",amt);}
},{
type:"input",name:"Set Password",action:function(val){setUserVal("p",val);}
},{
type:"select",name:"Steal Crypto From",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("How much crypto do you want to steal?")}`);}
}],"Gold":[{
type:"button",name:"Crash host(gold)",action:function(a){setUserVal("g/t","t");a.innerText="Crashing";}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"select",name:"Steal Gold From",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("How much gold do you want to steal?")}`);}
},
{
type:"select",name:"Set Player's Gold",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:swap:${prompt("What do you want to set it to?")}`);}
},{
type:"input",name:"Set Gold",action:function(amt){setUserVal("g",amt);}
}],"Defense2":[{
type:"button",name:"Crash host(defense2)",action:function(a){setUserVal("d/t","t");a.innerText="Crashing";}
},{
type:"input",name:"Set Damage",action:function(amt){setUserVal("d",amt);}
},{
type:"input",name:"Set Round",action:function(round){setUserVal("r",round);}
}],"Fish":[{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("f/t","t");}else{setUserVal("f","Old Boot");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
},{
type:"input",name:"Set Weight",action:function(amt){setUserVal("w",amt);}
},{
type:"input",name:"Set Caught Fish",action:function(fish){setUserVal("f",fish);}
},{
type:"input",name:"Send Distraction",action:function(d){setUserVal("s",true);setUserVal("f",d);}
}],"Pirate":[{
type:"button",name:"Crash host(pirate)",action:function(a){setUserVal("d/t","t");a.innerText="Crashing";}
},{
type:"select",name:"Steal Doubloons From",computed:function(sel){if(Object.keys(gameobject.c).length===Array.from(sel.children).length){return false;}return Object.keys(gameobject.c);},action:function(d){setUserVal("tat",`${d}:${prompt("How many doubloons do you want to steal?")}`);}
},{
type:"input",name:"Set Doubloons",action:function(d){setUserVal("d",d);}
}],"Dino":[{
type:"button",name:"Crash host(dino)",action:function(a){setUserVal("f/t","t");a.innerText="Crashing";}
},{
type:"input",name:"Set Fossils",action:function(d){setUserVal("f",d);}
},{
type:"staticsel",name:"Set Cheating",values:["true","false"],action:function(d){setUserVal("ic",d);}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
}],"Cafe":[{
type:"input",name:"Set Cash",action:function(d){setUserVal("ca",d);}
},{
type:"input",name:"Set Upgrade(ex. Cereal:1)",action:function(d){setUserVal("up",d);}
},{
type:"button",name:"Freeze Scoreboard",action:function(a){if(a.frozen!=undefined){a.frozen=!a.frozen;}else{a.frozen=true;}if(a.frozen){setUserVal("tat/t","t");}else{setUserVal("tat","t");}a.innerText=a.frozen?"Unfreeze Scoreboard":"Freeze Scoreboard";}
}],"Brawl":[{
type:"button",name:"Crash host(brawl)",action:function(a){setUserVal("xp/t","t");a.innerText="Crashing";}
},{
type:"input",name:"Set XP",action:function(a){setUserVal("xp",a);}
},,{
type:"input",name:"Set Upgrade(upgrade:level)",action:function(a){setUserVal("up",a);}
}]};
var global = [{
type:"staticsel",name:"Set Blook",values:blooks,action:function(val){setUserVal("b",val);}
},{
type:"input",name:"Set Banner",action:function(b){setUserVal("bg",b);}
},{
type:"button",name:"Leave Game",action:function(a){leaveGame();finishG();a.innerText="Leaving";}
}];
ws.onmessage = function(m){
    var msg = JSON.parse(m.data);
    switch(msg.c){
        case "con":
        console.log("Connected!");
        break;
         case "log":
        console.log("["+ msg.l +"]" + "[LOG] "+msg.v);
	if(msg.l==="error"){errorBar(msg.v);}
	switch(msg.l){
	case "error":
	errorBar(msg.v);
	break;
	case "id":
	document.querySelector("#gcode").value=msg.v;
	break;
	case "sdisp":
	document.querySelector("#ostatus").style.display=msg.v;
	break;
	case "status":
	document.querySelector("#ostatus").innerText="OCR Progress: "+msg.v;
	break;
      }
        break;
        case "bc":
	botinfo.connected = msg.v;
	if(msg.v){gameobject={};updateStatus("Connected to game");}else{updateStatus("Connected");}
	msg.v?onJoin(botinfo.gc,botinfo.name):onLeave(botinfo.gc,botinfo.name);
        console.log(msg.v?"Bot Connected!":"Bot Disconnected!");
        break;
	case "update":
	if(!gameobject.s){
	onFirstData(msg.v);
	}
	onData(msg.v);
	mergeObjects(gameobject,msg.v);
	break;
    }
}
ws.onclose = function(){
errorBar("WebSocket disconnected! Refresh to try again!");
updateStatus("Disconnected");
}
ws.onopen = function(){
  updateStatus("Connected");
}
ws.sendJson = function(msg){this.send(JSON.stringify(msg));}
function joinGame(code,name){
    if(document.getElementById("fpswitch").getAttribute("checked")){name=String.fromCharCode(32)+name;}
    ws.send(JSON.stringify({c:"join",gc:code.toString(),name:name}));
    botinfo.gc = code.toString();botinfo.name = name;botinfo.connected = false;
}
function onFirstData(d){
console.log("Game type: " + d.s.t);
switch(d.s.t){case "Hack":renderCheats("Hack");break;case "Brawl":renderCheats("Brawl");break;case "Fish":renderCheats("Fish");break;case "Defense2":renderCheats("Defense2");break;case "Gold":renderCheats("Gold");break;case "Pirate":renderCheats("Pirate");break;case "Dino":renderCheats("Dino");break;default:errorBar("No Cheats are available for gamemode: " + d.s.t);break;}
}
function onData(d){
if(!d){console.log("Game disconnected!");errorBar("Game crashed!");leaveGame();finishG();return;}
if(d.stg==="fin"&&botinfo.connected){console.log("Game ended!");finishG();leaveGame();console.log("Time: " + getTime());}
}
function leaveGame(){
if(botinfo.connected){ws.sendJson({c:"leave"});}
}
//use setval like setVal({path:"c/name",val:{b:"Rainbow Astronaut"}});
function setUserVal(obj,val){
if(!botinfo.connected){alert("You must be connected to a game to set values!");return;}
console.log(obj,val);
setVal({path:"c/"+botinfo.name+"/"+obj,val:val});
}
function onJoin(gid,name){
//code
}
function onLeave(gid,name){
//your code here
}
function setVal(dval){
    dval.path = "/"+botinfo.gc+"/"+dval.path;
    ws.send(JSON.stringify({c:"sv",val:dval}));
}
function brosOcr(){
  ws.send(JSON.stringify({c:"brosocr"}));
}
function mergeObjects(e,t){for(var o in t)t.hasOwnProperty(o)&&(e.hasOwnProperty(o)&&"object"==typeof e[o]&&"object"==typeof t[o]?mergeObjects(e[o],t[o]):e[o]=t[o])}
function getTime(){var v = ((Date.now() - new Date(gameobject.s.d).getTime())/60000);return Math.floor(v) + ":" + Math.floor(v*60)%60;}


//DOM FUNCTIONS:

function createNormText(text){var a = document.createElement("div");a.className="normtext";a.innerText=text;return a;}
function createCheatContainer(){
var a = document.createElement("div");
a.className="cheatcontainer";
return a;
}
function updateStatus(text){var s = document.getElementById("status");s.innerText="Status: "+text;}
function createButton(text,clickaction){var button = document.createElement("button");button.innerText=text;button.addEventListener("click",function(){clickaction(button);});return button;}
function renderCheats(gm){
var c = document.getElementById("ctrlpanel");
var codep = document.getElementById("cc");
codep.style.display="none";c.appendChild(createNormText("Bot Successful! Type: " + gm));c.appendChild(createNormText("Cheats: ")); var chc = createCheatContainer();
cheats[gm].forEach(e=>{
switch(e.type){case "button":chc.appendChild(createButton(e.name,e.action));break;case "input":chc.appendChild(createInp(e.name,e.action));break;case "select":chc.appendChild(createSel(e.name,e.computed,e.action));break;case "staticsel":chc.appendChild(createSel(e.name,e.values,e.action));break;default:console.log("Unsupported!");break;}
});
c.appendChild(chc);
c.appendChild(createNormText("Global Cheats:"));
c.appendChild(createGlobalContainer());
}
function finishG(){var cp = document.getElementById("ctrlpanel");
var cc = document.getElementById("cc");
cp.innerHTML="";cc.style.display="block";errorBar("Game Ended!");}
function createInp(text,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("input");inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}
//cpval is computed value function, call it to compute select options in array form

function createSel(text,cpval,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("select");iv.innerHTML="<option>Click to update</option>";
iv.addEventListener("click",function(e){var rvals = cpval(iv);if(rvals){iv.innerHTML="";rvals.sort().forEach(e=>{var opt = document.createElement("option");opt.innerText=e;iv.appendChild(opt);});}});
inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}

function createGlobalContainer(){
var chc = createCheatContainer();
global.forEach(e=>{
switch(e.type){case "button":chc.appendChild(createButton(e.name,e.action));break;case "input":chc.appendChild(createInp(e.name,e.action));break;case "select":chc.appendChild(createSel(e.name,e.computed,e.action));break;case "staticsel":chc.appendChild(createStaticSel(e.name,e.values,e.action));break;default:console.log("Unsupported!");break;}
});
return chc;
}

function createStaticSel(text,vals,action){var inp = document.createElement("div");inp.className="inputcontainer";var ti = document.createElement("div");ti.innerText=text+":";inp.appendChild(ti);var iv = document.createElement("select");vals.sort().forEach(e=>{var opt = document.createElement("option");opt.innerText=e;iv.appendChild(opt);});inp.appendChild(iv);inp.addEventListener("click",function(e){if(e.target===iv){return;}action(iv.value);});return inp;}

//CHECKMARK CODE
document.querySelectorAll("checkbox").forEach(e=>{e.addEventListener("click",function(){if(e.getAttribute("checked")){e.removeAttribute("checked");}else{e.setAttribute("checked","true");}});});
//END OF CHECKMARK CODE