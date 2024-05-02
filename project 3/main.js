// Get The Element Form HTML Page
let image = document.getElementById("generate-image");
let theName = document.querySelector(".name");
let left = document.getElementById("left");
let right = document.getElementById("right");
let myRandomImage = document.querySelector(".random");
let job = document.querySelector(".job");
let myPar = document.querySelector(".myPar");

// Create A Object 
let reviews = [
    {
        id: 1,
        name: "John Deo",
        img: "images/image1.png",
        text: "Meet John Deo, an innovative tech enthusiast and coding wizard who thrives \
        on pushing the boundaries of what's possible in the digital landscape. With\
        a passion for exploring cutting-edge technologies, John consistently delivers groundbreaking solutions that make\
        him a standout figure in the tech advancements set him apart as a trailblazer in the field.",
        job: "Tech Innovator"
    },
    {
        id: 2,
        name: "Kali Linux",
        img: "images/image2.png",
        text: "Introducing Kali Linux, a cybersecurity expert on a mission to ensure the \
        digital world remains secure and ethical. Specializing in ethical hacking and digital\
        security, Kali is a guardian of the online realm. With an unwavering commitment\
        to making the internet a safer space for individuals and businesses alike, Kali's expertise and dedication shine through. In the ever-changing landscape of cybersecurity, Kali Linux stands as a beacon of knowledge and reliability.",
        job: "Cybersecurity Expert"
    },
    {
        id: 3,
        name: "Shift Loop",
        img: "images/image3.png",
        text: "Enter the world of Shift Loop, a creative wordsmith with an unparalleled \
        ability to craft captivating narratives and stories. With finesse and a touch of\
        imagination, Shift turns ideas into compelling tales that resonate with audiences. The boundless\
        creativity that defines Shift Loop's work goes beyond conventional storytelling, leaving \
        a lasting impression on those who have the pleasure of experiencing their narratives",
        job: "Creative Wordsmith",
    },
    {
        id: 4,
        name: "Function Gets",
        img: "images/image4.png",
        text: "Meet Function Gets, the embodiment of a fitness guru and wellness advocate. \
        Committed to promoting a healthy and active lifestyle, Function Gets can be found\
        in the gym, practicing yoga, or sharing nutritious recipes with an ever-growing\
        community. With an infectious passion for well-being, Function Gets inspires \
        others to embrace a balanced and active way of life. Their dedication to fitness",
        job: "Fitness Guru",
    },
    {
        id: 5,
        name: "Elena Spark",
        img: "images/image5.png",
        text: "Elena Spark, a visionary designer, brings creativity to life with a unique \
        blend of aesthetics and functionality. Her design philosophy revolves around creating \experiences that\
        leave a lasting impact, fusing innovation with user-centric solutions.\
        others to embrace a balanced and active way of life. Their dedication to fitness",
        job: "Visionary Designer",
    },
    {
        id: 6,
        name: "Max Velocity",
        img: "images/image6.png",
        text: "Max Velocity, an adrenaline junkie and extreme sports enthusiast, lives life \
        on the edge. Whether conquering mountain peaks or riding waves, Max embodies\
        the spirit of adventure and fearlessness. peaks or riding waves, Max embodies\
        others to embrace a balanced and active way of life. Their dedication to fitness",
        job: "Extreme Sports Enthusiast",
    },
    {

        id: 7,
        name: "Luna Harmony",
        img: "images/image7.png",
        text: "Luna Harmony, a passionate environmentalist and wildlife advocate, dedicates \
        her life to preserving nature. Through advocacy and education, Luna strives to\
        create a world where humans coexist harmoniously with the natural world.\
        others to embrace a balanced and active way of life. Their dedication to fitness",
        job: "Environmental Advocate",
    },
    {
        id: 8,
        name: "Tech Maverick",
        img: "images/image8.png",
        text: "Tech Maverick, a disruptor in the tech industry, fearlessly challenges the \
        status quo. With a vision for groundbreaking innovation, this trailblazer is at\
        the forefront of technological revolutions, redefining what's possible in the digital\
        landscape. peaks or riding waves, Max embodies peaks or riding waves, Max embodies",
        job: "Tech Maverick",
    },
    {
        id: 9,
        name: "Aria Melody",
        img: "images/image9.png",
        text: "Aria Melody, a virtuoso musician and composer, creates soul-stirring melodies \
        that transcend boundaries. With a deep passion for the art of sound,\
        Aria's compositions resonate with emotion, captivating audiences and leaving an indelible mark on\
        the world of music. peaks or riding waves, Max embodies peaks or riding waves, Max embodies",
        job: "Musician and Composer"
    },
    {
        id: 10,
        name: "Zen Explorer",
        img: "images/image10.png",
        text: "Zen Explorer, a seeker of inner peace and mindfulness, embarks on a journey \
        to explore the realms of tranquility. Through meditation and spiritual practices, this\
        explorer inspires others to find harmony within themselves and the world around them.",
        job: "Mindfulness Explorer peaks or riding waves, Max embodies."
    },
    {
        id: 11,
        name: "Nova Astronomer",
        img: "images/image11.png",
        text: "Nova Astronomer, with eyes fixed on the cosmos, unravels the mysteries of the \
        universe. Through a telescope and a passion for celestial wonders, this astronomer\
        expands our understanding of the vastness and beauty of space. peaks or riding waves, Max embodies\
        peaks or riding waves, Max embodies",
        job: "Astronomer",
    }
];

// set starting item
let currentElement = 1;
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// Show Peron Based on Item
function showPerson() {
    const item = reviews[currentElement];
    image.src = item.img;
    job.textContent = item.job;
    theName.textContent = item.name;
    myPar.textContent = item.text;
}

// Show Next Person
right.addEventListener("click", function() {
    currentElement++;
    if (currentElement > reviews.length) currentElement = 0;
    showPerson();
});
left.addEventListener("click", function() {
    currentElement--;
    if (currentElement < 0) currentElement = reviews.length - 1;
    showPerson();
});
myRandomImage.addEventListener("click", function() {
    currentElement = Math.floor(Math.random() * reviews.length);
    showPerson();
});
