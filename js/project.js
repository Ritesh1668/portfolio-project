const projects = [
    {
        id: "pg",
        image: "/assets/images/Main-Playground.svg",
        title: "Playground",
        byline: "Your Minimalist Productivity Board",
        heading1: "About",
        content1: "Welcome to Playground, the ultimate productivity notes web tool that seamlessly blends functionality with exquisite aesthetics. Created with a vision to enhance your productivity in the most visually captivating way possible, Playground is your digital haven for note-taking and organization.<br><br><b>The Art of Glassmorphism Design:</b> The design philosophy revolves around the stunning concept of 'glassmorphism,' where sleek transparency and depth create an immersive user experience. Every element of Playground is meticulously crafted to evoke a sense of elegance and sophistication.<br><br><b>Effortless Note Management:</b> With Playground, managing your notes has never been easier. You can effortlessly add, edit, and delete notes with just a few clicks. Whether it's jotting down quick ideas, creating to-do lists, or storing important information, Playground has you covered.<br><br>Stay Tuned for What's Next: I would love to hear to your feedback and implement new features and enhancements. The future of Playground is bright, and we can't wait to introduce you to a world of limitless possibilities in note-taking and creative expression. It can go beyond taking voice memos, to proper code editing playground.",
        heading2: "Functionality",
        content2: "Live Demo: <a href='https://yashvardhang.github.io/Playground/'>Demo</a>.<br><br>Home:<br><img src='https://user-images.githubusercontent.com/47084179/271691203-05845a71-9f26-42e3-a73a-8240e67763e6.png'><br><br>Note:<br><img src='https://user-images.githubusercontent.com/47084179/271691328-47438510-89cc-4579-a588-404850f46775.png'><br><br>List:<br><img src='https://user-images.githubusercontent.com/47084179/271691509-f4d8d17a-74d6-445d-9f29-c70976cf02f0.png'>",
        heading3: "Source Code",
        content3: "You may head on to <a href='https://github.com/YashvardhanG/Playground'>Source Code</a> and view the working."
    },

    {
        id: "cynthia",
        image: "/assets/images/Main-Cynthia.svg",
        title: "Cynthia",
        byline: "Artificial Intelligent Assistant",
        heading1: "About",
        content1: "Cynthia is an Artificial Intelligent, personalized Computer Assistant. It works on two modes; Voice Command Recognition and Command-Line based text mode. Cynthia has numerous features and is much more powerful than the conventional weather/memo assistant. It can control the entirety of your device, including your web browser, just with your voice. You can personalize this assistant to any extent by adding customized commands.<br><br>Cynthia can execute basic functions like commencing a countdown, information about the weather, and even perform an advanced task such as helping you in taking down notes and reading them as well. This Assistant works in two modes, <b>Voice</b> and <b>Text-based</b>. By default, it runs in text mode (command prompt). These modes can easily be switched by just writing or speaking, 'change mode' as your command.",
        heading2: "Functionality",
        content2: "The purpose behind building this Computer Assistant is to reduce the effort that is required in performing very menial tasks. With this, you may open stuff in your browser, laptop, and further control it just by typing in a command or simply saying it out loud. The assistant is yet in its initial stages hence, the scope of commands and functionalities is limited. You may just fork this project, and recommended and add any sort of functionality that you think might add to the overall performance.",
        heading3: "Source Code",
        content3: "You may go ahead and take a look at the project here: <a href='https://github.com/YashvardhanG/Cynthia'>Source Code</a>"
    },
]


let index = 0;
let length = projects.length - 1;
var toggle = localStorage.getItem("toggle");

function get()
{
    for (const key in projects) 
    {     
        document.getElementById(projects[key].id).addEventListener("click", function() {details(projects[key].id); bg(projects[key].id)}, false);
    }
}

function details(id = "pg") 
{
    for (const key in projects) {
        if (id == projects[key].id) {
            index = key;
            var image = document.getElementById("main-image");
            var div = document.getElementById("project-detail");
            document.querySelectorAll('.dynamic').forEach(e => e.remove());

            image.src = projects[key].image;
            document.getElementById("title").innerHTML = projects[key].title;
            document.getElementById("byline").innerHTML = projects[key].byline;
                        
            let index_length = Object.keys(projects[key]).length;
            let head_count = ((index_length - 4)/2)
            var values = Object.values(projects[key]);

            for(let i = 1; i<=head_count; i++)
            {
                let current = (3 + i);
                var h2 = ("<h2 class = 'dynamic'>" + values[current + i-1] + "</h2>");
                let p = ("<p class = 'dynamic'>" + values[current + i] + "</p>");

                div.innerHTML += h2;
                div.innerHTML += p;
            }    
        }
    }

    if (id == projects[0].id)
    {
        document.getElementById("back").style.visibility = "hidden";
    }
    
    else if (id == projects[length].id)
    {
        document.getElementById("next").style.visibility = "hidden";
    }

    else
    {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("back").style.visibility = "visible";
    }

    var links = document.getElementById("project-detail").querySelectorAll('a');
    for (var i = 0; i < links.length; i++)
    {
        var a = links[i];
        if(a.hostname != location.hostname) 
        {
                a.rel = 'noopener';
                a.target = '_blank';
        }
    }
}

function bg(id = "pg")
{
    document.body.style.backgroundAttachment = 'fixed';
    
    var select = `.pane-project#` + id +` {background-color: #8D24DF; border: 5px solid white; border-radius: 0px 20px 20px 20px; outline-offset: 3px; color: white;}
                  .pane-project#` + id + ` h2 {font-weight: 600;}`

    for (const key in projects) 
    {
        if(toggle == 1)
        {
            var unselect = `.pane-project#` + projects[key].id +` {background-color: #263140; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + projects[key].id + ` h2 {font-weight: 100;}`  
        }

        else
        {
            var unselect = `.pane-project#` + projects[key].id +` {background-color: #fff; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + projects[key].id + ` h2 {font-weight: 100;}`                      
        }
        
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = unselect
        document.head.appendChild(styleSheet)
    }

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = select
    document.head.appendChild(styleSheet)

    if(window.matchMedia("(max-width: 768px)").matches)
    {
        document.getElementById("pane").style.visibility = "hidden";
    }
}

function next()
{
    if (index != length)
    {
        index++;
    } 
    
    bg(projects[index].id);
    details(projects[index].id);
    var view = document.getElementById('pane_container');
    view.scrollBy({top: 70, behavior: 'smooth'}); 
}

function back()
{
    if (index != 0) 
    {
        index--;       
    }
    
    bg(projects[index].id);
    details(projects[index].id); 
    var view = document.getElementById('pane_container');
    view.scrollBy({top: -70, behavior: 'smooth'}); 
}

function scroll_down()
{
    var view = document.getElementById('project-detail');
    view.scrollBy({top: 200, behavior: 'smooth'}); 
}

function scroll_up()
{
    var view = document.getElementById('project-detail');
    view.scrollBy({top: -200, behavior: 'smooth'});
}

function phone()
{
    if(window.matchMedia("(max-width: 768px)").matches)
    {
        document.getElementById("pane").style.visibility = "hidden";
    }

    if (window.matchMedia("(min-width: 768px)").matches) 
    {
        var elem = document.getElementById('menu');
        elem.parentNode.removeChild(elem);
    }
}

window.addEventListener("load", bg("pg"));
window.addEventListener("load", details("pg"));
window.addEventListener("load", get());
window.addEventListener("load", phone());
window.addEventListener("keyup", function(e) {if (e.keyCode === 39){next();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 37){back();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 40){scroll_down();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 38){scroll_up();}});