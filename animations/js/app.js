// HOW TO REFERENCE INPUT ELEMENTS FROM index.html page
// if the id attribute of an <input> tag is "name-input" in the index.html file, I will use it in DOM functions
// to reference e.g. document.getElementById("name-input")



// PART1: TAKING AN INPUT NAME FROM USER AND DISPLAYING IT AS THE USER EDITS IT

// We make 2 variables called usr_nam_in and usr_nam_out which hold the input value by user and output value which we have to display
// referencing the variables using DOM by their id in index.html tell the app that from where we have to take or display the name
var usr_nam_in = document.getElementById("name-input");
var usr_nam_out = document.getElementById("name-output");


// addEventListener helps the app.js to identify if there are any action taken by user (for more description refer: https://stackoverflow.com/questions/2695793/javascript-what-is-addeventlistener)
// The innerText property sets the text content of the specified variable, usr_nam_out in this case.
// The value property returns the value of the option, in this case usr_nam_in
            usr_nam_in.addEventListener("input", function(){
                usr_nam_out.innerText = usr_nam_in.value;
            });



// Part 2: Animation options for animating the displayed text from Part 1


// Receiving the style which the user selected to animate the displayed text (drop down list option)
var style_add = document.getElementById("animation-select").value;

// Option to hold the animate button
var click_animate = document.getElementById("animate");


// What to animate? once the style is selected and the animation button is clicked
var object_to_animate = document.getElementById("welcome");

// EVENT LISTENER: What happens when you click the animate button
click_animate.addEventListener("click", function() {
// Writing the animation function

//add the selected style to the object to be animated
    object_to_animate.classList.add(style_add);

    // Removing animated style for allowing to add another AFTER ANIMATING IT ONCE HAD ENDED
    object_to_animate.addEventListener("animationend", function() {
        object_to_animate.classList.remove(style_add);
     }, {once: true});
});