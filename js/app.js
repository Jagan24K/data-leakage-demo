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

    /*==============================================
LIVE DEMO
==============================================*/

        const uploadBtn = document.getElementById("uploadBtn");
        const output = document.getElementById("demoOutput");
        
        const progressBar = document.getElementById("progressBar");
        const progressPercent = document.getElementById("progressPercent");
        
        const fileInput = document.getElementById("fileInput");
        const removeBtn = document.getElementById("removeBtn");
        const chooseBtn = document.getElementById("chooseBtn");
        const selectedFile = document.getElementById("selectedFile");
        
        chooseBtn.addEventListener("click", () => {
        
            fileInput.click();
        
        });
        
        fileInput.addEventListener("change", () => {
        
            if (fileInput.files.length) {
        
                selectedFile.innerHTML =
                    "<i class='fa-solid fa-file'></i> " +
                    fileInput.files[0].name;
        
            } else {
        
                selectedFile.innerHTML = "No file selected";
        
            }
        
        });
        
        removeBtn.addEventListener("click", () => {
        
            fileInput.value = "";
        
            selectedFile.innerHTML = "No file selected";
        
        });
        
        const processingSteps = [
        
            "Initializing Secure Upload",
        
            "Reading selected file",
        
            "Validating file format",
        
            "Generating AES-256 Encryption Key",
        
            "AES Key Generated Successfully",
        
            "Encrypting file using AES-256",
        
            "Encryption Completed",
        
            "Generating SHA-256 Integrity Hash",
        
            "Integrity Hash Generated",
        
            "Generating Secure Trapdoor",
        
            "Trapdoor Generated Successfully",
        
            "Uploading encrypted file to cloud",
        
            "Encrypted File Uploaded",
        
            "Sending integrity request to Third Party Auditor",
        
            "Third Party Auditor Connected",
        
            "Verifying file integrity",
        
            "Integrity Verification Successful",
        
            "Generating Audit Report",
        
            "Secure Upload Completed"
        
        ];
        
        function delay(ms) {
        
            return new Promise(resolve => setTimeout(resolve, ms));
        
        }
        
        async function startSimulation(file) {
        
            output.innerHTML = "";
        
            progressBar.style.width = "0%";
        
            progressPercent.innerHTML = "0%";
        
            const total = processingSteps.length;
        
            const info = document.createElement("div");
        
            info.className = "log success";
        
            info.innerHTML =
                "📄 Selected File : <strong>" + file.name + "</strong>";
        
            output.appendChild(info);
        
            const size = document.createElement("div");
        
            size.className = "log success";
        
            size.innerHTML =
                "📦 File Size : <strong>" +
                (file.size / 1024).toFixed(2) +
                " KB</strong>";
        
            output.appendChild(size);
        
            output.scrollTop = output.scrollHeight;
        
            for (let i = 0; i < total; i++) {
        
                const row = document.createElement("div");
        
                row.className = "log pending";
        
                row.innerHTML = "⏳ " + processingSteps[i] + "...";
        
                output.appendChild(row);
        
                output.scrollTop = output.scrollHeight;
        
                await delay(1000);
        
                row.className = "log success";
        
                row.innerHTML = "✔ " + processingSteps[i];
        
                const percent = Math.round(((i + 1) / total) * 100);
        
                progressBar.style.width = percent + "%";
        
                progressPercent.innerHTML = percent + "%";
        
            }
        
            const finalMsg = document.createElement("div");
        
            finalMsg.className = "log success";
        
            finalMsg.style.marginTop = "18px";
        
            finalMsg.innerHTML =
                "<strong>🎉 Upload Completed Successfully</strong>";
        
            output.appendChild(finalMsg);
        
            output.scrollTop = output.scrollHeight;
        
        }
        
        if (uploadBtn) {
        
            uploadBtn.addEventListener("click", async function () {
        
                if (fileInput.files.length === 0) {
        
                    alert("Please choose a file.");
        
                    return;
        
                }
        
                uploadBtn.disabled = true;
        
                uploadBtn.innerHTML =
                    '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        
                await startSimulation(fileInput.files[0]);
        
                uploadBtn.disabled = false;
        
                uploadBtn.innerHTML =
                    '<i class="fa-solid fa-cloud-arrow-up"></i> Upload Securely';
        
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
