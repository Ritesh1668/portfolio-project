const blog = [
    {
        id: "vit",
        image: "/assets/images/Main-CCPS.svg",
        title: "Vellore Institute of Technology, Chennai",
        byline: "B.Tech - Computer Science and Engineering | 2021 -2025",
        heading1: "About",
        content1: "<br>Currently pursuing my Bachelor of Technology in Computer Science at Vellore Institute of Technology Chennai (VITC), My academic journey reflects my dedication and growth, highlighting my ability to overcome challenges and continually improve. Beyond the classroom, I actively contributed to the Marathi Literary Association (MLA) as a core member, participating in and coordinating various events. These experiences have honed my organizational and leadership skills, contributing to the success of various initiatives.<br><br>I've gained a strong set of skills including good communication, and expertise in Data Science and AI. The lessons I've learned, along with practical experiences like working with microprocessors and solving problems, have helped me grow academically and improve how I interact with others and manage tasks. These experiences show that I'm well-prepared for the ever-changing world of computer sciences.",
        heading2: "Relevant Coursework",
        content2: "• Programming Languages: Python, C, C++, Java, JavaScript, HTML, CSS, ReactJS, NodeJS and R.<br>• Database and Backend: PL/SQL, NoSQL and PHP.<br>• Analysis of Data Structures and Algorithms<br>• Artificial Intelligence and Natural Language Processing<br>• Software Engineering<br>• Information Security Analysis and Audit<br>• Operating Systems and Network Systems<br>• Digital Logic and Design: Hardware and System functionality.<br>• Introduction to Quantitative, Logical and Verbal Ability<br>• Ethics and Values"
    },


    {
        id: "ccps",
        image: "/assets/images/Main-CCPS.svg",
        title: "Research Paper",
        byline: "Optimizing Phishing Defense , VIT Chennai | Jan, 2024 - Jun, 2024",
        heading1: "Paper Pending",
        content1: "During my research endeavors, I became increasingly fascinated by the intersection of cybersecurity and deep learning, particularly its potential in combating phishing attacks. This prevalent threat deceives users into clicking malicious links or surrendering sensitive information by mimicking legitimate websites.<br><br>This research project delves into a groundbreaking comparison of three prominent deep learning architectures: Convolutional Neural Networks (CNNs), Long Short-Term Memory networks (LSTMs), and Multilayer Perceptrons (MLPs). I meticulously evaluated these models on a comprehensive dataset of URLs to identify the most effective one in distinguishing genuine websites from deceptive phishing attempts.<br><br>The core objective of this research is to assess the accuracy of these models in detecting malicious URLs. This pursuit aims to develop a robust and precise method for real-time phishing URL detection, leading to significantly improved defenses against these cyber threats. By leveraging the unique strengths of each deep learning architecture, the study offers valuable insights for the cybersecurity community.  The findings will contribute to the ongoing discussion on applying deep learning techniques to enhance online safety and suggest new avenues for further research, ultimately leading to more refined filtering algorithms.",
        heading2: "Paper",
        content2: "To catch up on the workshop, go here: <a href = 'link not available'>Paper link</a> "
    },
    {
        id: "technovit",
        image: "/assets/images/" ,
        title: "My Internship at Wiingy",
        byline: "Fostering Growth through Data Analysis and International Expansion | November, 2023",
        heading1: "About",
        content1: "My internship at Wiingy was an enriching experience that allowed me to delve into the world of educational technology and contribute to their international expansion efforts. During this internship, I played a key role in:",
        heading2: "Roles and Responsibilities",
        content2: "• Data Analysis and Strategic Decision Making: I tackled complex educational datasets, identifying trends and patterns that informed strategic business decisions. This data-driven approach helped Wiingy optimize its operations and enhance overall efficiency.<br><br>• International Market Expansion: I actively participated in creating growth projects specifically targeted towards Wiingy's expansion into international markets like the USA, UK, and Australia. This involved understanding the unique needs and educational landscapes of these regions, and crafting initiatives to effectively cater to them.<br><br>•Through these experiences, I gained valuable skills in data analysis, market research, and strategic thinking.  The internship not only solidified my understanding of the educational technology industry but also instilled in me the importance of data-driven decision making and international market considerations for business growth.   <br><br>EXPERIENCE CERTIFICATE, go here : <a href = 'https://drive.google.com/file/d/10nBAlklJGfslTgoXLPmU_BJ0j_qOXYl5/view?usp=sharing'>link</a><br><br><br><br>"
    },

    {
        id: "apac",
        image: "/assets/images/",
        title: "GOOGLE CLOUD COMPUTING FOUNDATIONS PROGRAM",
        byline: "in association with Google and VIT on Dec 2023.",
        heading1: "About",
        content1: "I'm excited to announce my participation in the Google Cloud Computing Foundations Program in December 2023, a collaboration between Google and VIT. This program provided a comprehensive introduction to Google Cloud Platform (GCP), including in-depth exploration of services like Cloud Storage for efficient data management, Compute Engine for scalable and secure cloud computing, App Engine for web application deployment on Google's infrastructure, and Cloud Functions for building serverless functions. Through practical exercises and labs, I gained not only foundational knowledge but also hands-on experience with GCP, strengthening my understanding of cloud computing concepts and equipping me with valuable skills for the future.",
        heading2: "Link to Google Cloud profile & Certificate: ",
        content2: "To catch up on the BADGE'S, go here: <a href = 'https://www.cloudskillsboost.google/public_profiles/513284f9-394f-4a74-8eef-77bc46b1b874'>Google Cloud Profile</a> <br>         To catch up on the certificate, go here: <a href = 'https://drive.google.com/file/d/14v6zUc4zJd6ptMAdo_NRcxgOObsw-Dql/view?usp=sharing'>Google Cloud certificate</a> <br><br><br><br><br><br><br>"
    },

    {
        id: "tkd",
        image: "/assets/images/",
        title: "Ethanus",
        byline: "MERN Full Stack Internship Program",
        heading1: "Internship Experience",
        content1: "From August 2023 to November 2023, I completed an internship with Ethnus, focusing on the MERN stack (MongoDB, Express.js, React.js, Node.js). During this period, I enhanced my full-stack development skills and collaborated on various projects, gaining practical experience in web application development, database management, and API creation.<br><br>●Hotel Booking Website Project.<br>As part of my internship, I developed a hotel booking website featuring user authentication, hotel search, booking management, and an admin dashboard. This project involved using React.js for the front-end, Node.js and Express.js for the back-end, and MongoDB for the database. The website is fully responsive and includes secure payment integration, providing a seamless user experience. This project significantly improved my technical skills and understanding of full-stack development.<br><br><br><br><br><br><br><br><br><br><br><br><br>",
    },

]


let index = 0;
let length = blog.length - 1;
var toggle = localStorage.getItem("toggle");

function get()
{
    for (const key in blog) 
    {     
        document.getElementById(blog[key].id).addEventListener("click", function() {details(blog[key].id); bg(blog[key].id)}, false);       
    }
}

function details(id = "baker_hughes") 
{
    for (const key in blog) {
        if (id == blog[key].id) {
            index = key;
            var image = document.getElementById("main-image");
            var div = document.getElementById("project-detail");
            document.querySelectorAll('.dynamic').forEach(e => e.remove());

            image.src = blog[key].image;
            document.getElementById("title").innerHTML = blog[key].title;
            document.getElementById("byline").innerHTML = blog[key].byline;
                        
            let index_length = Object.keys(blog[key]).length;
            let head_count = ((index_length - 4)/2)
            var values = Object.values(blog[key]);

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

    if (id == blog[0].id)
    {
        document.getElementById("back").style.visibility = "hidden";
    }
    
    else if (id == blog[length].id)
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

function bg(id = "baker_hughes")
{
    document.body.style.backgroundAttachment = 'fixed';
    
    var select = `.pane-project#` + id +` {background-color: #8D24DF; border: 5px solid white; border-radius: 0px 20px 20px 20px; outline-offset: 3px; color: white;}
                  .pane-project#` + id + ` h2 {font-weight: 600;}`

    for (const key in blog) {
        if(toggle == 1)
        {
            var unselect = `.pane-project#` + blog[key].id +` {background-color: #263140; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + blog[key].id + ` h2 {font-weight: 100;}`
        }

        else
        {
            var unselect = `.pane-project#` + blog[key].id +` {background-color: #fff; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
            .pane-project#` + blog[key].id + ` h2 {font-weight: 100;}`
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
    
    bg(blog[index].id);
    details(blog[index].id); 
    var view = document.getElementById('pane_container');
    view.scrollBy({top: 70, behavior: 'smooth'}); 
}

function back()
{
    if (index != 0) 
    {
        index--;       
    }
    
    bg(blog[index].id);
    details(blog[index].id); 
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

function map()
{
    var currentUrl = window.location.href;
    if (currentUrl.includes("#")) 
    {
        var mapped = currentUrl.split("#")[1];
        bg(mapped);
        details(mapped);
    } 
    
    else 
    {
        bg("baker_hughes");
        details("baker_hughes");   
    }
}

window.addEventListener("load", map());
// window.addEventListener("load", bg("baker_hughes"));
// window.addEventListener("load", details("baker_hughes"));
window.addEventListener("load", get());
window.addEventListener("load", phone());
window.addEventListener("keyup", function(e) {if (e.keyCode === 39){next();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 37){back();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 40){scroll_down();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 38){scroll_up();}});