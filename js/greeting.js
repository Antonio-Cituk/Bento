// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Tony';
var emojis = ['👽', '👾', '🤖', '😺', '👻', '🌈', '💗', '🧠', '🚀'];

function randomEmoji(){
  return emojis[Math.floor(Math.random() * emojis.length)];
}

// Here you can change your greetings
var gree1 = 'Go to sleep ';
var gree2 = 'Good morning ';
var gree3 = 'Be happy! ';
var gree4 = 'Hey, you can do it!';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1 + name + "! " + randomEmoji();
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name + "! " + randomEmoji();
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3 + '💗';
} else  {
    document.getElementById('greetings').innerText = gree4 + randomEmoji();
}
