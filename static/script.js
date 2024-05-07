var inputElement = document.getElementById('type');
var sendbtn = document.getElementById('send');
var form = document.querySelector('form');

function createUserMessage(message) {
    var nouveldiv = document.createElement('div');
    nouveldiv.classList.add('ensemble-user');
    
    var imguser = document.createElement('img');
    imguser.classList.add('userm');
    imguser.src = "../static/img/user.svg";
    nouveldiv.appendChild(imguser);
    
    var nouveldiv1 = document.createElement('div');
    nouveldiv1.classList.add('usermssg');
    nouveldiv.appendChild(nouveldiv1);
    
    var nouvelElementP = document.createElement('p');
    nouvelElementP.classList.add('userp');
    nouvelElementP.textContent = message;
    nouveldiv1.appendChild(nouvelElementP);
    
    return nouveldiv;
}

function createBotMessageBonjour() {
    var nouveldiv0 = document.createElement('div');
    nouveldiv0.classList.add('ensemble-bot');

    var imguser1 = document.createElement('img');
    imguser1.classList.add('botm');
    imguser1.src = "../static/img/bot.svg";
    nouveldiv0.appendChild(imguser1);

    var nouveldiv2 = document.createElement('div');
    nouveldiv2.classList.add('botmssg');
    nouveldiv0.appendChild(nouveldiv2);
    
    var nouvelElementP1 = document.createElement('p');
    nouvelElementP1.classList.add('botp');
    nouvelElementP1.textContent = "Bonjour cher utilisateur";
    nouveldiv2.appendChild(nouvelElementP1);

    return nouveldiv0;
}

function createBotMessage(generatedText) {
    var nouveldiv0 = document.createElement('div');
    nouveldiv0.classList.add('ensemble-bot');

    var imguser1 = document.createElement('img');
    imguser1.classList.add('botm');
    imguser1.src = "../static/img/bot.svg";
    nouveldiv0.appendChild(imguser1);

    var nouveldiv2 = document.createElement('div');
    nouveldiv2.classList.add('botmssg');
    nouveldiv0.appendChild(nouveldiv2);
    
    var nouvelElementP1 = document.createElement('p');
    nouvelElementP1.classList.add('botp');
    nouvelElementP1.textContent = generatedText;
    nouveldiv2.appendChild(nouvelElementP1);

    return nouveldiv0;
}

inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let myvalue = inputElement.value.trim();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/get_value', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        if (myvalue === "") {
            inputElement.classList.add('vide');
            setTimeout(function() {
                inputElement.classList.remove('vide');
            }, 400);
            return;
        }

        var userMessage = createUserMessage(myvalue);
        var chatContainer = document.getElementById('chat-container');
        chatContainer.appendChild(userMessage);

        if (myvalue !== ""  && myvalue !== "Bonjour") {
            fetch('/get_value', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: myvalue })
            })
            .then(response => response.json())
            .then(generatedText => {
                // Affiche une alerte avec le texte généré
                var BotMessage = createBotMessage(generatedText);
                var chatContainerr = document.getElementById('chat-container');
                chatContainerr.appendChild(BotMessage);
                 
            })
            .catch(error => console.error('Erreur lors de la récupération de la valeur générée:', error));
        } 
        if (myvalue === "Bonjour") {
            setTimeout(function() {
                var botMessage = createBotMessageBonjour();
                chatContainer.appendChild(botMessage);
            }, 200);
        }
        inputElement.value = "";
    }
});



sendbtn.addEventListener('click', function(event) {
    event.preventDefault();
        let myvalue = inputElement.value.trim();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/get_value', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        if (myvalue === "") {
            inputElement.classList.add('vide');
            setTimeout(function() {
                inputElement.classList.remove('vide');
            }, 400);
            return;
        }

        var userMessage = createUserMessage(myvalue);
        var chatContainer = document.getElementById('chat-container');
        chatContainer.appendChild(userMessage);

        if (myvalue !== ""  && myvalue !== "Bonjour") {
            fetch('/get_value', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: myvalue })
            })
            .then(response => response.json())
            .then(generatedText => {
                // Affiche une alerte avec le texte généré
                var BotMessage = createBotMessage(generatedText);
                var chatContainerr = document.getElementById('chat-container');
                chatContainerr.appendChild(BotMessage);
                 
            })
            .catch(error => console.error('Erreur lors de la récupération de la valeur générée:', error));
        } 
        if (myvalue === "Bonjour") {
            setTimeout(function() {
                var botMessage = createBotMessageBonjour();
                chatContainer.appendChild(botMessage);
            }, 200);
        }
        inputElement.value = "";
});

// Trash alert sur l'ecran
const trash = document.getElementById('trash');
trash.addEventListener('click', function() {
    location.reload();
});
const trash11 = document.getElementById('trash11');
trash11.addEventListener('click', function() {
    location.reload();
});

// Google search
var inputsearch = document.getElementById("googles");
var loop = document.getElementById("loop");

inputsearch.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let valeur = inputsearch.value;
        window.open(`https://www.google.com/search?client=opera&q=${valeur}`);
    }
});

loop.addEventListener('click', function(event) {
    let valeur = inputsearch.value;
    window.open(`https://www.google.com/search?client=opera&q=${valeur}`);
});

var date = new Date()
var time = document.querySelector("#time")
// Obtention de l'heure, des minutes
var heures = date.getHours();
var minutes = date.getMinutes();
var secondes = date.getSeconds();
var heureday = heures + ":" + minutes + ":" + secondes;

// pour ne pas avoir l'affichage suivant 17:5 et avoir 17:05//
if (minutes < 10){
    time.innerText = heures + ":" + "0" + minutes;
}
else {
    time.innerText = heures + ":" + minutes;
}

if (heures >= 0 && heures <= 12){
    time.innerText += " am";
}
else {
    time.innerText += " pm";
}
