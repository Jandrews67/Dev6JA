var person = prompt("What on Earth even is your name?", "Enter your name!");

if (person != null) {
  document.getElementById("demo").innerHTML =
alert("Hello " + person + "! How are you today?");
}
