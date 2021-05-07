var addButton = document.getElementById("add-btn");
var getCount = document.getElementById("count");
var resetButton = document.getElementById("reset-btn");
var settingsButton = document.getElementById("settings-btn");
var subButton = document.getElementById("sub-btn");
var cookie_days = 14;

// Init Values
if (getCookie("id") == "") {
    setCookie("id", "1", cookie_days);
}
if (getCookie("name") == "") {
    setCookie("name", "bulbasaur", cookie_days);
}
if (getCookie("alt") == "") {
    setCookie("alt", "no", cookie_days);
}
if (getCookie("count") == "") {
    setCookie("count", "0", cookie_days);
}
if (getCookie("id") != "") {
    setPokemon(getCookie("id"), getCookie("name"), getCookie("alt"));
    document.querySelector("h3").innerHTML = getCookie("count");
}

// Event Listners
document.addEventListener("keypress", function(key){
    if (key.keyCode == 13) { // Enter
        getPokemon();
    }
    else if (event.target.type === "text") { // Block hot keys for + - r
        return;
    }
    else {
        // Hot key shortcuts
        if (key.keyCode == 43) {
            addCount();
        }
        else if (key.keyCode == 45) {
            subCount();
        }
        else if (key.keyCode == 97) {
            altForm();
            //console.log("altformtoggle");
        }
        else if (key.keyCode == 114) {
            resetCount();
        }
    }
})

// Functions
function addCount() {
    let count = parseInt(getCount.innerText);
    count++;
    document.querySelector("h3").innerHTML = count.toString();
    setCookie("count", count.toString(), cookie_days);
}
function subCount() {
    let count = parseInt(getCount.innerText);
    if (count > 0) {
        count--;
        document.querySelector("h3").innerHTML = count.toString();
        setCookie("count", count.toString(), cookie_days);
    }
}
function resetCount() {
    document.querySelector("h3").innerHTML = "0";
    setCookie("count", "0", cookie_days);
}
function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(type, value, days) {
    let cookie_type = type;
    let cookie_value = value;
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    let cookie_expiration = date.toUTCString();
    //console.log(cookie_type + "=" + cookie_value + "; expires=" + cookie_expiration + ";");
    document.cookie = cookie_type + "=" + cookie_value + "; expires=" + cookie_expiration + ";";
}
function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
function getPokemon() {
    let pokemon_list = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran♀","nidorina","nidoqueen","nidoran♂","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetch’d","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr. mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew","chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr","sentret","furret","hoothoot","noctowl","ledyba","ledian","spinarak","ariados","crobat","chinchou","lanturn","pichu","cleffa","igglybuff","togepi","togetic","natu","xatu","mareep","flaaffy","ampharos","bellossom","marill","azumarill","sudowoodo","politoed","hoppip","skiploom","jumpluff","aipom","sunkern","sunflora","yanma","wooper","quagsire","espeon","umbreon","murkrow","slowking","misdreavus","unown","wobbuffet","girafarig","pineco","forretress","dunsparce","gligar","steelix","snubbull","granbull","qwilfish","scizor","shuckle","heracross","sneasel","teddiursa","ursaring","slugma","magcargo","swinub","piloswine","corsola","remoraid","octillery","delibird","mantine","skarmory","houndour","houndoom","kingdra","phanpy","donphan","porygon2","stantler","smeargle","tyrogue","hitmontop","smoochum","elekid","magby","miltank","blissey","raikou","entei","suicune","larvitar","pupitar","tyranitar","lugia","ho-oh","celebi","treecko","grovyle","sceptile","torchic","combusken","blaziken","mudkip","marshtomp","swampert","poochyena","mightyena","zigzagoon","linoone","wurmple","silcoon","beautifly","cascoon","dustox","lotad","lombre","ludicolo","seedot","nuzleaf","shiftry","taillow","swellow","wingull","pelipper","ralts","kirlia","gardevoir","surskit","masquerain","shroomish","breloom","slakoth","vigoroth","slaking","nincada","ninjask","shedinja","whismur","loudred","exploud","makuhita","hariyama","azurill","nosepass","skitty","delcatty","sableye","mawile","aron","lairon","aggron","meditite","medicham","electrike","manectric","plusle","minun","volbeat","illumise","roselia","gulpin","swalot","carvanha","sharpedo","wailmer","wailord","numel","camerupt","torkoal","spoink","grumpig","spinda","trapinch","vibrava","flygon","cacnea","cacturne","swablu","altaria","zangoose","seviper","lunatone","solrock","barboach","whiscash","corphish","crawdaunt","baltoy","claydol","lileep","cradily","anorith","armaldo","feebas","milotic","castform","kecleon","shuppet","banette","duskull","dusclops","tropius","chimecho","absol","wynaut","snorunt","glalie","spheal","sealeo","walrein","clamperl","huntail","gorebyss","relicanth","luvdisc","bagon","shelgon","salamence","beldum","metang","metagross","regirock","regice","registeel","latias","latios","kyogre","groudon","rayquaza","jirachi","deoxys","turtwig","grotle","torterra","chimchar","monferno","infernape","piplup","prinplup","empoleon","starly","staravia","staraptor","bidoof","bibarel","kricketot","kricketune","shinx","luxio","luxray","budew","roserade","cranidos","rampardos","shieldon","bastiodon","burmy","wormadam","mothim","combee","vespiquen","pachirisu","buizel","floatzel","cherubi","cherrim","shellos","gastrodon","ambipom","drifloon","drifblim","buneary","lopunny","mismagius","honchkrow","glameow","purugly","chingling","stunky","skuntank","bronzor","bronzong","bonsly","mime jr.","happiny","chatot","spiritomb","gible","gabite","garchomp","munchlax","riolu","lucario","hippopotas","hippowdon","skorupi","drapion","croagunk","toxicroak","carnivine","finneon","lumineon","mantyke","snover","abomasnow","weavile","magnezone","lickilicky","rhyperior","tangrowth","electivire","magmortar","togekiss","yanmega","leafeon","glaceon","gliscor","mamoswine","porygon-z","gallade","probopass","dusknoir","froslass","rotom","uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina","cresselia","phione","manaphy","darkrai","shaymin","arceus","victini","snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott","patrat","watchog","lillipup","herdier","stoutland","purrloin","liepard","pansage","simisage","pansear","simisear","panpour","simipour","munna","musharna","pidove","tranquill","unfezant","blitzle","zebstrika","roggenrola","boldore","gigalith","woobat","swoobat","drilbur","excadrill","audino","timburr","gurdurr","conkeldurr","tympole","palpitoad","seismitoad","throh","sawk","sewaddle","swadloon","leavanny","venipede","whirlipede","scolipede","cottonee","whimsicott","petilil","lilligant","basculin","sandile","krokorok","krookodile","darumaka","darmanitan","maractus","dwebble","crustle","scraggy","scrafty","sigilyph","yamask","cofagrigus","tirtouga","carracosta","archen","archeops","trubbish","garbodor","zorua","zoroark","minccino","cinccino","gothita","gothorita","gothitelle","solosis","duosion","reuniclus","ducklett","swanna","vanillite","vanillish","vanilluxe","deerling","sawsbuck","emolga","karrablast","escavalier","foongus","amoonguss","frillish","jellicent","alomomola","joltik","galvantula","ferroseed","ferrothorn","klink","klang","klinklang","tynamo","eelektrik","eelektross","elgyem","beheeyem","litwick","lampent","chandelure","axew","fraxure","haxorus","cubchoo","beartic","cryogonal","shelmet","accelgor","stunfisk","mienfoo","mienshao","druddigon","golett","golurk","pawniard","bisharp","bouffalant","rufflet","braviary","vullaby","mandibuzz","heatmor","durant","deino","zweilous","hydreigon","larvesta","volcarona","cobalion","terrakion","virizion","tornadus","thundurus","reshiram","zekrom","landorus","kyurem","keldeo","meloetta","genesect","chespin","quilladin","chesnaught","fennekin","braixen","delphox","froakie","frogadier","greninja","bunnelby","diggersby","fletchling","fletchinder","talonflame","scatterbug","spewpa","vivillon","litleo","pyroar","flabébé","floette","florges","skiddo","gogoat","pancham","pangoro","furfrou","espurr","meowstic","honedge","doublade","aegislash","spritzee","aromatisse","swirlix","slurpuff","inkay","malamar","binacle","barbaracle","skrelp","dragalge","clauncher","clawitzer","helioptile","heliolisk","tyrunt","tyrantrum","amaura","aurorus","sylveon","hawlucha","dedenne","carbink","goomy","sliggoo","goodra","klefki","phantump","trevenant","pumpkaboo","gourgeist","bergmite","avalugg","noibat","noivern","xerneas","yveltal","zygarde","diancie","hoopa","volcanion","rowlet","dartrix","decidueye","litten","torracat","incineroar","popplio","brionne","primarina","pikipek","trumbeak","toucannon","yungoos","gumshoos","grubbin","charjabug","vikavolt","crabrawler","crabominable","oricorio","cutiefly","ribombee","rockruff","lycanroc","wishiwashi","mareanie","toxapex","mudbray","mudsdale","dewpider","araquanid","fomantis","lurantis","morelull","shiinotic","salandit","salazzle","stufful","bewear","bounsweet","steenee","tsareena","comfey","oranguru","passimian","wimpod","golisopod","sandygast","palossand","pyukumuku","type: null","silvally","minior","komala","turtonator","togedemaru","mimikyu","bruxish","drampa","dhelmise","jangmo-o","hakamo-o","kommo-o","tapu koko","tapu lele","tapu bulu","tapu fini","cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","necrozma","magearna","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","meltan","melmetal","grookey","thwackey","rillaboom","scorbunny","raboot","cinderace","sobble","drizzile","inteleon","skwovet","greedent","rookidee","corvisquire","corviknight","blipbug","dottler","orbeetle","nickit","thievul","gossifleur","eldegoss","wooloo","dubwool","chewtle","drednaw","yamper","boltund","rolycoly","carkol","coalossal","applin","flapple","appletun","silicobra","sandaconda","cramorant","arrokuda","barraskewda","toxel","toxtricity","sizzlipede","centiskorch","clobbopus","grapploct","sinistea","polteageist","hatenna","hattrem","hatterene","impidimp","morgrem","grimmsnarl","obstagoon","perrserker","cursola","sirfetch'd","mr. rime","runerigus","milcery","alcremie","falinks","pincurchin","snom","frosmoth","stonjourner","eiscue","indeedee","morpeko","cufant","copperajah","dracozolt","arctozolt","dracovish","arctovish","duraludon","dreepy","drakloak","dragapult","zacian","zamazenta","eternatus"];

    // Set pokemon start values
    let get_pokemon = document.querySelector("#control-container input[type=text]").value.toLowerCase();
    let pokemon_id = parseInt(get_pokemon);

    // Check if input is empty
    if (get_pokemon == "") {
        alert("Please enter a Pokémon's national dex number or name.");
        return;
    }
    else if (!pokemon_list.includes(get_pokemon) && isNaN(pokemon_id)) {
        alert("Please double check your spelling and/or enter a Pokémon that exists.");
        return;
    }
    else if (pokemon_id > 890) { // Gen 7 limit is 809
        alert("No other Pokémon currently exist.");
        return;
    }
    else if (pokemon_id <= 0) {
        alert("Please enter a national dex number between 1-809.");
        return;
    }
    // Get pokemon number if name was used
    else if (isNaN(pokemon_id)) {
        let pokemon_id = pokemon_list.indexOf(get_pokemon);
        let pokemon_name = get_pokemon;
        setCookie("id", pokemon_id+1, cookie_days);
        setCookie("name", pokemon_name, cookie_days);
        setCookie("alt", "no", cookie_days); // Cant set alt form by default
        setPokemon(pokemon_id+1, pokemon_name, getCookie("alt"));
    }
    // Get pokemon name if number was used
    else if (typeof pokemon_id == "number") {
        let pokemon_name = pokemon_list[pokemon_id-1];
        setCookie("id", pokemon_id, cookie_days);
        setCookie("name", pokemon_name, cookie_days);
        setCookie("alt", "no", cookie_days); // Cant set alt form by default
        setPokemon(pokemon_id, pokemon_name, getCookie("alt"))
    }
}
function setPokemon(id, name, alt) {
    var id=id;
    var name=name;
    // Format number in ### style
    if (id.toString().length < 2) {
        id = "00" + id.toString();
    }
    else if (id.toString().length < 3) {
        id = "0" + id.toString();
    }
    else {
        id = id.toString();
    }
    // Check if alt image is needed
    //console.log("alt "+alt);
    if (alt == "yes") {
        console.log("yes");
        let pokemon_img_alt = "img/alt" + id + ".png";
        console.log(pokemon_img_alt);
        document.querySelector("#pokemon-container img").src = pokemon_img_alt;
        document.querySelector("#pokemon-container img").alt = toTitleCase(name.toString() + " #" + id);
        document.querySelector("#control-container h2").innerHTML = toTitleCase(name) + " #" + id;
    }
    else if (alt == "no") {
        console.log("no");
        let pokemon_img = "img/" + id + ".png";
        console.log(pokemon_img);
        document.querySelector("#pokemon-container img").src = pokemon_img;
        document.querySelector("#pokemon-container img").alt = toTitleCase(name.toString() + " #" + id);
        document.querySelector("#control-container h2").innerHTML = toTitleCase(name) + " #" + id;
    }
    // Clear input
    document.querySelector("#control-container input[type=text]").value = "";
    document.querySelector("#control-container input[type=text]").blur();
}
function altForm() {
    if (getCookie("alt") == "yes") {
        let pokemon_id = getCookie("id");
        let pokemon_img = "img/" + pokemon_id + ".png";
        document.querySelector("#pokemon-container img").src = pokemon_img;
        setCookie("alt", "no", cookie_days);
    }
    else if (getCookie("alt") == "no") {
        let pokemon_id = getCookie("id");
        if (parseInt(pokemon_id) == 849) { // toxtricity
            let pokemon_img = "img/alt" + pokemon_id + ".png";
            document.querySelector("#pokemon-container img").src = pokemon_img;
            setCookie("alt", "yes", cookie_days);
        }
        else {
            alert("This Pokémon doesn't have an alternate form.");
            return;
        }
    }
}