// Start Get The Inputs
var inputNumber = document.querySelector(".numbers");
var generateParg = document.querySelector(".generate-submit");
var content = document.querySelector(".content");

const paragraphs = {
    paragraph1: "The rise of Mesopotamia marked the dawn of civilization, where city-states like Ur and Babylon flourished along the fertile banks of the Tigris and Euphrates, pioneering writing and law codes.",
    paragraph2: "Ancient Egypt, with its majestic pyramids and enigmatic sphinxes, stood as a beacon of stability and grandeur, ruled by pharaohs believed to be divine incarnations on Earth.",
    paragraph3: "The Greek city-states birthed democracy and philosophy, with luminaries like Socrates, Plato, and Aristotle shaping Western thought and culture for centuries to come.",
    paragraph4: "In the heart of Rome, the republic gave way to an empire that expanded across three continents, leaving an indelible mark on governance, law, and engineering.",
    paragraph5: "The Silk Road, spanning from China to the Mediterranean, facilitated trade and cultural exchange, enriching societies from the Han Dynasty to the Roman Empire.",
    paragraph6: "The Islamic Golden Age ushered in a period of unparalleled scientific, artistic, and intellectual achievements, with scholars in Baghdad, Cordoba, and Cairo advancing knowledge in various fields.",
    paragraph7: "The Renaissance in Europe ignited a fervor for exploration, art, and learning, as Leonardo da Vinci, Michelangelo, and others redefined human creativity and expression.",
    paragraph8: "The Age of Enlightenment challenged traditional authority and championed reason, leading to revolutions in America and France that reshaped the political landscape.",
    paragraph9: "The Industrial Revolution transformed societies with innovations in manufacturing, transportation, and communication, heralding an era of unprecedented progress and upheaval.",
    paragraph10: "The 20th century witnessed two devastating World Wars, the Cold War, and remarkable strides in technology and civil rights, shaping the modern world in profound and complex ways."
};


// Generate Elements
function generate_ele(end) {
    var end = inputNumber.value;
    if (end > 10 || end < 0) end = 1;
    for (var i = 0; i < end; i++) {
        const p_ele = document.createElement("p");
        if (inputNumber.value >= 0) p_ele.textContent = paragraphs[`paragraph${i + 1}`];
        else p_ele.textContent = `Enter A Positive Number`;
        content.appendChild(p_ele);
    }
} 


// Check The Local Storage
if (window.localStorage.getItem("number")) {
    const number = window.localStorage.getItem("number");
    generate_ele(number);
    inputNumber.value = number;
}


generateParg.addEventListener("click", function(e) {
    e.preventDefault();
    // Delete All Previos Elements
    document.querySelectorAll(".content p").forEach(ele => ele.remove());
    // Generate Elements
    generate_ele(inputNumber.value);
    window.localStorage.setItem("number", inputNumber);
});




