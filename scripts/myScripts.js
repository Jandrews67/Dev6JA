var person = prompt("What on Earth even is your name?", "Josh Andrews");

if (person != null) {
  document.getElementById("demo").innerHTML =
alert("Hello " + person + "! How are you today?");
}