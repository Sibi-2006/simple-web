function Result() {
    const terminal = document.getElementById('terminal');

    const label = document.createElement("label");
    const input = document.createElement("input");

    label.textContent = "C:/User/Sibiraj > ";
    input.type = "text";
    input.id = "command-input";

    terminal.appendChild(label);
    terminal.appendChild(input);
    input.focus();

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const cmd = input.value.trim().toLowerCase();
            const output = document.createElement("div");

            if (cmd === "help") {
                output.innerHTML = `
                    <div>1. About</div>
                    <div>2. Skills</div>
                    <div>3. Projects</div>
                    <div>4. Contact</div>
                    <div>5. Clear</div>
                `;
            } else if (cmd === "clear") {
                terminal.innerHTML = "";
                Result();
                return;
            } else if (cmd === "about") {
                output.innerHTML = `
                    <div>Hey, I'm <strong>Sibiraj</strong></div>
                    <div>I love building cool UI with HTML, CSS, JavaScript & React ⚛️</div>
                    <div>Currently exploring C, C++, Java (basic) and web dev 🚀</div>
                    <div>I enjoy coding, calisthenics 💪, gaming 🎮, and solving logic stuff.</div>
                    <div>Always learning. Always building. 💻🔥</div>
                `;
            } else if (cmd === "skill" || cmd === "skills") {
                output.innerHTML = `
                    <div><strong>🔧 Frontend:</strong> HTML, CSS, JavaScript, React</div>
                    <div><strong>📚 Programming:</strong> Java (basic), C++ (basic)</div>
                    <div><strong>🛠️ Tools:</strong> VS Code, Git, GitHub</div>
                    <div><strong>🎯 Currently Learning:</strong> React Projects, DSA</div>
                `;
            } else if (cmd === "project" || cmd === "projects") {
                output.innerHTML = `
                    <div><strong>🧩 Mini Game Hub:</strong> FLAMES, Number Guessing, Quiz Game</div>
                    <div><strong>🗺️ Indian States Explorer:</strong> State-wise info</div>
                    <div><strong>🖥️ Command Line Portfolio:</strong> This terminal-style portfolio 😎</div>
                    <div><strong>▶️ YouTube Clone:</strong> HTML, CSS project mimicking YouTube UI</div>
                    <div><strong>🧮 Calculator App:</strong> Basic calculator using JS</div>
                    <div><strong>🔥 BMR Calculator:</strong> Calculates Basal Metabolic Rate (fitness touch 💪)</div>
                `;
            } else if (cmd === "contact") {
                output.innerHTML = `
                    <div><strong>📧 Email:</strong> sibiraj0709@gmail.com</div>
                    <div><strong>🐱 GitHub:</strong> <a href="https://github.com/sibi123" target="_blank">sibi123</a></div>
                    <div><strong>📷 Instagram:</strong> <a href="https://www.instagram.com/_mr._.cb_" target="_blank">@sibi_ig</a></div>
                    <div><strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/sibiraj-r-147936336" target="_blank">Sibiraj R</a></div>
                `;
            } else {
                output.textContent = `Unknown command: ${cmd}`;
            }

            input.disabled = true;
            terminal.appendChild(output);
            window.scrollTo(0, document.body.scrollHeight); 

            Result(); 
        }
    });
}

Result(); 
