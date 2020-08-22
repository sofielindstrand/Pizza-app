//Nedan ser du lite hjälp-kod samt några hjälpfunktioner.
// Ta den hjälp du vill ha, resten kan du ta bort. Tänk dock på att innehållet i getPizza-funktionen är nödvändig för att du ska få en fin utskrift i boxar, så den måste du ha kvar.
//OBS: Du ska såklart se vad som saknas (läs uppgiftbeskrivningen) och lägga in extra funktioner/kod själv. 
//Du får bryta ut koden och ha flera script-filer!


//Start Index.html

$.getJSON('choosepizza.json', function(choosePizzaData){
    choosePizza(choosePizzaData);
    });

function choosePizza(choosePizzaData)
{  
    var text1 = ""; //variabel för att införa text 1 i box 1
    var text2 = "";
    var text3 = "";
    $(choosePizzaData).each(function(index, value){  //loop för yttre array
       
        $(choosePizzaData[index].botten).each( function (ii,vv){  //loop för array botten
            text1 = choosePizzaData[index].botten[ii];
            $(".box1_data").append("<ul>"+text1+"</ul>") //skapar ett ul element och placerar text i box 1
        });
    
        $(choosePizzaData[index].topping).each( function (ii,vv){ //loop för array topping
            text2 = choosePizzaData[index].topping[ii];
            $(".box2_data").append("<ul>"+text2+"</ul>") //skapar ett ul element och placerar text i box 2
        });
       
        $(choosePizzaData[index].extra).each( function (ii,vv){  //loop för array extra
            text3 = choosePizzaData[index].extra[ii];
            $(".box3_data").append("<ul>"+text3+"</ul>") //skapar ett ul element och placerar text i box 3
        });
    });
    // Här tar du emot datat från jsonfilen i parametern. 
    // Du ska sedan skriva ut datat i en lista. 
    // Använd gärna createLiElement-funktionen till hjälp.
    // Du kan ändra namnet i parametern om du vill ha något kortare eller bättre namn

   
        $('ul').click(function(){ //en funktion för klick på ul-elementen som markerar ovan punkter och ändrar färg
            $(this).css("color", "grey"); //ändrar färg till grå
        });
        $('ul').dblclick(function(){ //en funktion för dubbelklick som ändrar tillbaka färgen till svart
            $(this).css("color", "black");
        });
// }
// function createLiElement(inText, idOfParent) 
// {
//     //Skapa nya li-element, tar in text och föräldern till elmentet i parametern. 
 
// }

//Slut Index.html

// start pizza.html
$.getJSON('pizza.json', function(pizzaData){ //hämtar data från Json fil
    getPizzas(pizzaData);
});

function getPizzas(pizzaData) //startar funktionen och gör att nedan kod funkar
{ 
    var text =""; // en varibel som inte fylls med information
    
    for(var i=0; i < pizzaData.length; i++) //en forloop som går igenom all data i pizza.json
    {
    text += '<div class="pizza_details">' + 
    '<img src="'+ pizzaData[i].picture +'" />' + //hämtar bilder
    '<div class="desc">' +   
    '<ul> <li><span>Namn</span> : '+ pizzaData[i].name +'</li>' + //hämtar namn
    '<li><span>Pris</span> : '+ pizzaData[i].price + 'kr' + '</li>' + //hämtar pris
    '<li><span>Innehåll</span> : ' + pizzaData[i].content.join(', ') +'</li>' + 
    '</ul></div><div class="clear"></div> </div>';
    }

   

    $("#getAllPizzas").html(text); //skriver ut allt innehåll, motsvarar innerHtml samt id=getallpizzas


}
}    // Använd den här strukturen för att skriva ut data på sidan (annars får du allt på en rad vilket inte är så snyggt). 
    //OBS- Du måste ha den här strukturen för att skriva ut så ta inte bort all kod nedan. Du får såklart förbättra koden om du vill. 
      
    // '<div class="pizza_details">';
    // '<img src="'+picture+'" />';
    // '<div class="desc">';
    // '<ul> <li><span>Namn</span> : '+ name +'</li>';
    // '<li><span>Pris</span> : '+price;+'</li> ';
    // '<li><span>Innehåll</span> : '+content+'</li>'; 
    // '</ul></div><div class="clear"></div> </div>';

    // Innehållet ovan ska läggas i id=getAllPizzas




// Slut pizza.html
