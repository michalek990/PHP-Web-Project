function pokaz(id) {
    var tresc = "";
    switch (id) {
        case 2: tresc += siec5G(); break;
        case 4: tresc += Promocje(); break;
        default: tresc += strona_glowna();
    }

    document.getElementById('blok').innerHTML = tresc;
}
function strona_glowna() {
    var tresc= '<h2 class="glowna_tekst"><br />Nowy gracz na rynku</h2>'+
        '<div class="border">StarFly wszedł na polski rynek telekomunikacyjny ' +
        'jako operator' +
        'telefonii komórkowej w 2019 roku. W ciągu kilku lat udało mu się' +
        'zbudować bazę konsumentów liczącą blisko 9% udziału w rynku.' +
        'Udało nam się to osiągnąć dzięki wprowadzanym innowacjom,' +
        '24-godzinnemu procesowi przenoszenia numerów i ofertom' +
        'nielimitowanych połączeń do użytkowników StarFly . ' +
        '</div> ' +
        '<br/> <h2 class="glowna_tekst"><br />Pretendent!</h2> ' +
        '<div class="border">StarFly jako pierwszy w Polsce wprowadził innowacyjne oferty z' +
        'nielimitowanymi połączeniami oraz korzystne cenowo pakiety rodzinne.' +
        'W rezultacie udało nam się zostać najszybciej rozwijającą się siecią komórkową. </div> ' +
        '<br/> <h2 class="glowna_tekst"><br />Lider w technologi</h2> ' +
        '<div class="border">' +
        'Obecnie StarFly umacnia swoją pozycję i ' +
        'wzbogaca portfolio produktów o nowe oferty dla rodzin i firm, ' +
        'tj. Pokolenia, Telewizję StarFly NOW czy szerokopasmowy internet. ' +
        'Rozwija również wiodące oferty łączone oparte o rozwiązania mobilne. ' +
        '</div><br />';

    return tresc;
}
function siec5G() {
    var tresc= '<div class="border">\n' +
        '               <h1>5G – co to takiego?</h1>\n' +
        '                5G to technologia uznawana za najnowszą,\n' +
        '                piątą generację sieci komórkowej. Działa w oparciu o\n' +
        '                wykorzystanie fal radiowych na wysokich częstotliwościach,\n' +
        '                a także podłączenie do światłowodów, które są używane w\n' +
        '                celu transmitowania danych pomiędzy nadajnikami.\n' +
        '                Standard 5G zapewnia dostęp do szybkiego i\n' +
        '                stabilnego internetu o parametrach niemożliwych do\n' +
        '                osiągnięcia w przypadku dotychczasowych technologii mobilnych.\n' +
        '            </div><br />\n' +
        '        <div class="border">\n' +
        '        <h1>Sieć 5G – co to jest? Czym różni się od 4G?</h1>\n' +
        '        Co to jest sieć 5G? To kolejna po 4G technologia komórkowa.\n' +
        '        Wskazujemy różnice pomiędzy nimi, a także najważniejsze zalety i\n' +
        '        zastosowania sieci 5G. Warto wiedzieć więcej o najnowszej generacji\n' +
        '        sieci, bo już od 27 maja tego roku możesz korzystać z sieci 5G w\n' +
        '            ramach ofert od Netii!</div><br />\n' ;

    return tresc
        }
function Promocje() {
    var tresc=
        '<div class="border"> <table> ' +
        '<tr> <td><img src="../Strony/miniaturki/recommended-xiaomi.png" height="250px" alt="Tekst alternatywny"></td> ' +
        '<td>Redmi Note 10 ProPoznaj smartfon Redmi Note 10 Pro i ' +
        'jego wydajne podzespoły, oglądaj filmy na wysokiej jakości ' +
        'ekranie AMOLED i rób zdjęcia jednym z pięciu dostępnych aparatów. ' +
        'W międzyczasie przekonasz się też o długim czasie działania baterii,' +
        ' która z kolei czas ładowania ma wyjątkowo krótki.</td> ' +
        '</tr> </table>'+
        '</div> ' +
        '<br/> '+
        '<div class="border"><table> ' +
        '<tr> <td>HUAWEI MateBook D 15 ' +
        'waży zaledwie 1,3kg; jest lekkim i poręcznym modelem o smukłych,' +
        ' eleganckich liniach. Jego wąskie ramki gwarantują Ci ogromną ' +
        'przestrzeń roboczą i komfort oglądania zdjęć, filmów, ' +
        'jak również grania w ulubione gry. Panoramiczny ekran o przekątnej 15” ' +
        'jest idealny do pracy w arkuszach kalkulacyjnych czy programach ' +
        'księgowych.</td> ' +
        '<td><img src="../Strony/miniaturki/laptop.png" width="350px" height="250px" alt="Tekst alternatywny"></td> ' +
        '</tr> </table>'+
        '</div>'+
        '<br/> '+'<br />'+
        '<div class="border"><table> ' +
    '<tr> <td><img src="../Strony/miniaturki/1_gl.png" width="350px" height="350px" alt="Tekst alternatywny"></td> ' +
    '<td>Huawei Watch GT 2 42 mm Elegant to zegarek zaprojektowany' +
        ' specjalnie dla kobiet. Jest nie tylko niezwykle smukły i lekki, ' +
        'lecz także bardzo wydajny oraz intuicyjny w obsłudze. ' +
        'Dzięki technologii AMOLED informacje na tarczy zegarka' +
        ' są odpowiednio duże i czytelne. Na krawędzi urządzenia ' +
        'umieszczono 2 przyciski, które pozwolą Ci szybko uruchomić ' +
        'wybrane funkcje</td> ' +
    '</tr> </table>'+
        '</div> <br />';

    return tresc;
}

function pokazDane() {

    var tab = document.querySelectorAll('input[name=zainteresowania]:checked');
    var op="";
    for(let i=0;i<tab.length;i++){
        if(tab[i].checked)
            op +=" "+tab[i].value;
    }
    var tab2 = document.getElementsByName("wiek");
    var op2;
    for(let i=0;i<tab2.length;i++){
        if(tab2[i].checked)
            op2 = tab2[i].value;
    }
    var dane = "Następujące dane zostaną wysłane:\n";
    dane += "Email: " + document.getElementById('email').value + "\n"+
        "Imie: " + document.getElementById('imie').value + "\n"+
        "Nazwisko: " + document.getElementById('nazwisko').value + "\n"+
        "Telefon: " + document.getElementById('telefon').value + "\n"+
        "Wiek: " + op2 + "\n"+
        "Zainteresowania: " + op+ "\n"+
        "Komentarz: " + document.getElementById('wiadomosc').value + "\n";
    if (window.confirm(dane)) return true;
    else return false;
}

$(function () {
    var inputs = $(".input");
    var paras = $(".description-flex-container").find("p");
    inputs.click(function () {
        var t = $(this),
            ind = t.index(),
            matchedPara = paras.eq(ind);

        t.add(matchedPara).addClass("active");
        inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
    });
});
