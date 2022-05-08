
function dodajprodukt()
{ 
    var item = {}; 
item.pakiet = document.getElementById('pakiet').value;
item.czas = document.getElementById('czas').value;
item.wklad = document.getElementById('wklad').value;
item.raty = document.getElementById('raty').value;


var lista = JSON.parse(localStorage.getItem('lista'));
if (lista===null) lista=[]; 
lista.push(item); 
localStorage.setItem('lista', JSON.stringify(lista)); 
}
function pokazListe()
{ 
var lista = JSON.parse(localStorage.getItem('lista'));
var el=document.getElementById('list');
var str="<h2>Lista produktów</h2>";
if (lista===null) el.innerHTML=str+"<p>Zamówienie w realizacji</p>";
else {
for(i=0;i<lista.length;i++) 
{
    str+="<button class='usun' onclick='usunZadanie("+i+")' >X </button>";
    str+="Pakiet: "+lista[i].pakiet +"</br> Czas trwania "+
    lista[i].czas + " msc </br> Wkład początkowy: " ;
    str+= lista[i].wklad+"zł </br>ilość rat "+lista[i].raty +"</br>";
    }
    el.innerHTML=str;
}
}

function usunListe()
{ 
    localStorage.removeItem('lista');
   
    pokazListe();
    
}
function usunZadanie(i)
{ 
var lista = JSON.parse(localStorage.getItem('lista'));
if (confirm("Usunąć produkt?")) lista.splice(i,1);
localStorage.setItem('lista', JSON.stringify(lista)); 
pokazListe(); 
}


//formularz
$(function() {
    var $inputs = $('form input[required], form textarea[required], select[required]');

    var displayFieldError = function($elem) {
        var $fieldRow = $elem.closest('.form-row');
        var $fieldError = $fieldRow.find('.field-error');
        if (!$fieldError.length) {
            var errorText = $elem.attr('data-error');
            var $divError = $('<div class="field-error">' + errorText + '</div>');
            $fieldRow.append($divError);
        }
    };

    var hideFieldError = function($elem) {
        var $fieldRow = $elem.closest('.form-row');
        var $fieldError = $fieldRow.find('.field-error');
        if ($fieldError.length) {
            $fieldError.remove();
        }
    };

    $inputs.on('input keyup', function() {
        var $elem = $(this);
        if (!$elem.get(0).checkValidity()) {
            $elem.addClass('error');
        } else {
            $elem.removeClass('error');
            hideFieldError($elem);
        }
    });

    $inputs.filter(':checkbox').on('click', function() {
        var $elem = $(this);
        var $row = $(this).closest('.form-row');
        if ($elem.is(':checked')) {
            $elem.removeClass('error');
            hideFieldError($elem);
        } else {
            $elem.addClass('error');
        }
    });
})


