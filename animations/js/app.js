
// id = 'name-input' holds the user name input by the user in real time
var usr_nam_in = document.getElementById("name-input");
var usr_nam_out = document.getElementById("name-output");

usr_nam_in.addEventListener("input", function(){
    usr_nam_out.innerText = NameInput.value;
});


// id = 'animation-select' it holds the value which is to be animated
var object_to_animate = document.getElementById("welcome");

// What to do when the animate button is clicked
var click_animate = document.getElementById("animate");

// EVENT LISTENER: What happens when you click the animate button
click_animate.addEventListener("click", function() {
    // Receiving the style which the user selected to animate the object
    var style = document.getElementById("animation-select").value;
    // Triggering animation
    object_to_animate.classList.add(style);
    // Removing animated after one click
    object_to_animate.addEventListener("animationend", function() {
        object_to_animate.classList.remove(style);
    }, {once: true});
});