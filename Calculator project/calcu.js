//Get the input box element where the result will be displayed
let display = document.getElementById('inputBox');
//Select all button elements from the page
let buttons = document.querySelectorAll('button');
//create an empty string to store the current input
let string = " ";
//Convert NodeList of buttons into an array for easier use
let Arraybuttons = Array.from(buttons);
//Loop through each button
Arraybuttons.forEach(function (btn) {
//Add a click event listener to each button
    btn.addEventListener('click', (btn) => {
//if '=' button is clicked, evaluate the expression in 'string' 
        if(btn.target.innerHTML == "=") {
            string = eval(string);
            //Show result in display
            display.value = string;
        }
         //If 'AC' button is clicked, 
        else if (btn.target.innerHTML == 'AC') {
     // Clear everything(empty the string)
            string = "";
          // Show result in display      
            display.value = string;
        }
    //If 'DEL' button is clicked,
        else if (btn.target.innerHTML == 'DEL') {
    // Remove the last character
            string = string.substring(0, string.length - 1);
    // show the result in display
            display.value = string;
        }
            
        else if (btn.target.innerHTML == "ak") {
            string = "created by Akash";
            display.value = string;
        }
         else if (btn.target.innerHTML == "ak") {
            string = "created by Akash";
            display.value = string;
        } 
            
         else if (btn.target.innerHTML == "ak") {
            string = "created by Akash";
            display.value = string;
        } 
        
        else if (btn.target.innerHTML == "pdf") {
         document.writeln("<br><b>OFFER hai! LOOT LO !<b><br><br> <br> I can provide you HTML, CSS and JAVASCRIPT PDF and that too, in a very simple and clear concept.<br>if you want this INdia's no-1 PDF,then Order it through my whatsapp no : 7091301891<br><br><><br> Cost:only 89 rupees per pdf[english]<br><br> Hurry up, This offer will end soon! <br><br> Akash kumar <br> WhatsApp No: 7091301891 ");

    
            }
       
     
            
            
    // Otherwise, add the clicked button's value to the string
        else {
            string += btn.target.innerHTML; 
    // update display 
            display.value = string;
        }

    } )
    
})





