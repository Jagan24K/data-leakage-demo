/*==================================================
APP.JS
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================================
    NAVBAR SCROLL
    ==============================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(5,8,22,.95)";
            navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(5,8,22,.85)";
            navbar.style.boxShadow = "none";

        }

    });

    /*==============================================
    SMOOTH SCROLL
    ==============================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                window.scrollTo({

                    top: target.offsetTop - 70,

                    behavior: "smooth"

                });

            }

        });

    });

    /*==============================================
    LIVE DEMO
    ==============================================*/

    const uploadBtn = document.getElementById("uploadBtn");

    const output = document.getElementById("demoOutput");

    const fileInput = document.getElementById("fileInput");
    const chooseBtn = document.getElementById("chooseBtn");
    const selectedFile = document.getElementById("selectedFile");
    
    chooseBtn.addEventListener("click",()=>{
    
        fileInput.click();
    
    });
    
    fileInput.addEventListener("change",()=>{
    
        if(fileInput.files.length){
    
            selectedFile.innerHTML=fileInput.files[0].name;
    
        }else{
    
            selectedFile.innerHTML="No file selected";
    
        }
    
    });

    if (uploadBtn) {

        uploadBtn.addEventListener("click", function () {

            let file = fileName.value.trim();

            if (file === "") {

                alert("Please enter a file name.");

                return;

            }

            uploadBtn.disabled = true;

            output.innerHTML = "Initializing Secure Upload...";

            const logs = [

                "Connecting to Cloud Server...",

                "User Authentication Successful",

                "Generating AES Encryption Key...",

                "Encrypting File...",

                "AES Encryption Completed",

                "Generating Trapdoor...",

                "Trapdoor Generated Successfully",

                "Uploading Encrypted File...",

                "Cloud Storage Successful",

                "Sending Audit Request...",

                "Third Party Auditor Connected",

                "Verifying File Integrity...",

                "Integrity Verification Successful",

                "Generating Audit Report...",

                "File Stored Securely",

                "STATUS : SUCCESS"

            ];

            let i = 0;

            output.innerHTML = "";

            const interval = setInterval(function () {

                output.innerHTML +=

                    "<div>> " + logs[i] + "</div>";

                output.scrollTop = output.scrollHeight;

                i++;

                if (i >= logs.length) {

                    clearInterval(interval);

                    output.innerHTML +=

                        "<br><strong style='color:#22C55E;'>✔ " +

                        file +

                        " uploaded successfully.</strong>";

                    uploadBtn.disabled = false;

                }

            }, 600);

        });

    }

    /*==============================================
    ACTIVE NAV LINK
    ==============================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==============================================
    FADE-IN ANIMATION
    ==============================================*/

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(

        ".feature-card,.status-card,.timeline-item,.architecture-card,.gallery-card,.tech-card"

    ).forEach(card => {

        card.style.opacity = "0";

        card.style.transform = "translateY(40px)";

        card.style.transition = ".7s ease";

        observer.observe(card);

    });

    /*==============================================
    COUNTER ANIMATION
    ==============================================*/

    function animateValue(element, start, end, duration) {

        let startTimestamp = null;

        function step(timestamp) {

            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            element.innerHTML = Math.floor(progress * (end - start) + start);

            if (progress < 1) {

                window.requestAnimationFrame(step);

            }

        }

        window.requestAnimationFrame(step);

    }

    document.querySelectorAll(".status-card h3").forEach(card => {

        const text = card.innerText;

        if (text.includes("%")) {

            card.innerHTML = "0%";

            animateValue(card, 0, 100, 2000);

            setTimeout(() => {

                card.innerHTML = "100%";

            }, 2000);

        }

    });

    /*==============================================
    PARALLAX GLOW
    ==============================================*/

    document.addEventListener("mousemove", function (e) {

        const glow1 = document.querySelector(".glow1");

        const glow2 = document.querySelector(".glow2");

        if (!glow1 || !glow2) return;

        let x = e.clientX / window.innerWidth;

        let y = e.clientY / window.innerHeight;

        glow1.style.transform =

            `translate(${x * 30}px, ${y * 30}px)`;

        glow2.style.transform =

            `translate(${-x * 30}px, ${-y * 30}px)`;

    });

});

/*==================================================
END OF APP.JS
==================================================*/
