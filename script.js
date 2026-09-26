
        // Data Structures
        const typingPhrases = [
            "Modern Web Apps.",
            "Scalable Architectures.",
            "Intuitive Interfaces.",
            "Full-Stack Solutions."
        ];

        const skillsData = {
            frontend: [
                { name: "React ", level: 90, icon: "fa-brands fa-react" },
                { name: "Javascript ", level: 95, icon: "fa-brands fa-js" },
                { name: "HTML ", level: 95, icon: "fa-brands fa-html5" },
                { name: "CSS ", level: 95, icon: "fa-brands fa-css3-alt" },
                { name: "TypeScript", level: 90, icon: "fa-solid fa-code" },
                { name: "Tailwind CSS", level: 68, icon: "fa-solid fa-palette" }
                
            ],
            backend: [
                { name: "Node.js", level: 88, icon: "fa-brands fa-node-js" },
                { name: "Python", level: 85, icon: "fa-brands fa-python" },
                { name: "java", level: 80, icon: "fa-brands fa-java" },
                { name: "PostgreSQL", level: 80, icon: "fa-solid fa-database" },
                { name: "SQL", level: 80, icon: "fa-solid fa-database" }
                
            ],
            tools: [
                { name: "Git", level: 92, icon: "fa-brands fa-git-alt" },
                { name: "Figma UI Design", level: 85, icon: "fa-brands fa-figma" },
                { name: "Linux", level: 86, icon: "fa-brands fa-linux" },
                
            ]
        };

        const projectsData = [
            {
                id: 1,
                title: "Income tracker",
                category: "Storage",
                image: "img/expe.png",
                summary: "Intuitive web app for logging income and tracking daily spending.",
                description: "An intuitive expense tracking platform that helps users monitor cash flow, balance income against spending, and keep accurate financial records.",
                tags: ["React", "TypeScript", "Node.js"],
                demoUrl: "https://mast8.github.io/expense-helper/",
                githubUrl: "https://github.com/Mast8/expense-helper"
                
            },
            {
                id: 2,
                title: "Chrono-room",
                category: "Storage",
                image: "img/grades.png",
                summary: "Chrome extension for building courses, tracking graded tasks, and calculating GPAs via browser storage.",
                description: "CronoRoom is a browser extension designed to help students organize their academic life directly from Chrome. Users can set up custom courses, record graded assignments, and track course averages and cumulative GPA—all stored securely on the client side using browser extension storage.",
                tags: ["JavaScript", "CSS", "Extension", "Local Storage"],
                demoUrl: "https://github.com/Mast8/chrono-room",
                githubUrl: "https://mast8.github.io/chrono-room/"
            },
            {
                id: 3,
                title: "Movie Stats",
                category: "frontend",
                image: "img/moviesta.jpg",
                summary: "Interactive movie data table with custom sorting, theme options, and dark mode.",
                description: "Interactive movie data featuring dynamic column sorting, customizable visual themes, background styling, and light/dark modes.",
                tags: ["JavaScript", "CSS"],
                demoUrl: "https://mast8.github.io/movie-stat/",
                githubUrl: "https://github.com/Mast8/movie-stat"
            },
            {
                id: 4,
                title: "To do",
                category: "Storage",
                image: "img/todo.png",
                summary: "An intuitive to-do list with built-in progress tracking and completion metrics.",
                description: "A streamlined task management application that helps users organize daily to-dos while tracking personal productivity through completion statistics and visual progress metrics.",
                tags: ["Javascript", "Local storage", "CSS", "Validation"],
                demoUrl: "https://mast8.github.io/j-todo/",
                githubUrl: "https://github.com/Mast8/j-todo"
            }
        ];

        // Animated Typing Effect Logic
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typing-text');

        function typeEffect() {
            const currentPhrase = typingPhrases[currentPhraseIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
                currentCharIndex--;
            } else {
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
                currentCharIndex++;
            }

            let speed = isDeleting ? 40 : 80;

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                speed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % typingPhrases.length;
                speed = 500;
            }

            setTimeout(typeEffect, speed);
        }

        // Skills Matrix Rendering
        function renderSkills(category) {
            const container = document.getElementById('skills-container');
            const items = skillsData[category] || [];
            
            container.innerHTML = items.map(skill => `
                <div class="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
                    <div class="flex justify-between items-center text-sm">
                        <span class="font-medium flex items-center gap-2">
                            <i class="${skill.icon} text-brand-500"></i> ${skill.name}
                        </span>
                        <span class="font-mono text-brand-cyan text-xs">${skill.level}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-dark-bg overflow-hidden">
                        <div class="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-cyan transition-all duration-1000 ease-out" 
                             style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `).join('');
        }

        // Project Cards Rendering
        function renderProjects(filter = 'all') {
            const grid = document.getElementById('projects-grid');
            const filtered = filter === 'all' 
                ? projectsData 
                : projectsData.filter(p => p.category === filter);

            grid.innerHTML = filtered.map(project => `
                <div onclick="openModal(${project.id})" class="glass-panel rounded-2xl overflow-hidden glass-panel-hover transition-all flex flex-col group border border-white/5 cursor-pointer">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                             onerror="this.src='https://placehold.co/800x450/131b2e/ffffff?text=Project+Preview'">
                        
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold mb-2 text-white">${project.title}</h3>
                            <p class="text-gray-400 text-sm mb-4 leading-relaxed">${project.summary}</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${project.tags.map(tag => `<span class="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-brand-cyan">${tag}</span>`).join('')}
                            </div>
                            <span class="text-xs font-mono text-brand-500 hover:text-brand-cyan flex items-center gap-1 transition-colors">
                                View Details <i class="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Modal Functionality
        function openModal(projectId) {
            const project = projectsData.find(p => p.id === projectId);
            if (!project) return;

            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');
            const modalBody = document.getElementById('modal-body');

            modalBody.innerHTML = `
                <div class="relative aspect-video rounded-2xl overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-2">${project.title}</h2>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `<span class="text-xs font-mono px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-cyan border border-brand-500/20">${tag}</span>`).join('')}
                    </div>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">${project.description}</p>
                    <div class="flex gap-4">
                        <a href="${project.demoUrl}" target="_blank" class="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors flex items-center gap-2 text-sm">
                            Live Demo <i class="fa-solid fa-external-link text-xs"></i>
                        </a>
                        <a href="${project.githubUrl}" target="_blank" class="px-6 py-2.5 rounded-xl glass-panel text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 text-sm">
                            Source Code <i class="fa-brands fa-github text-xs"></i>
                        </a>
                    </div>
                </div>
            `;

            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');

            modal.classList.add('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            document.body.style.overflow = 'auto';
        }

        

        // Initialization & Event Listeners
        window.addEventListener('DOMContentLoaded', () => {
            typeEffect();
            renderSkills('frontend');
            renderProjects('all');

            // Skill Tab Clicks
            document.querySelectorAll('.skill-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    document.querySelectorAll('.skill-tab').forEach(t => {
                        t.classList.remove('bg-brand-600', 'text-white');
                        t.classList.add('text-gray-400');
                    });
                    e.target.classList.add('bg-brand-600', 'text-white');
                    e.target.classList.remove('text-gray-400');
                    renderSkills(e.target.dataset.category);
                });
            });

            // Project Filter Clicks
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.filter-btn').forEach(b => {
                        b.classList.remove('bg-brand-600', 'text-white');
                        b.classList.add('text-gray-400');
                    });
                    e.target.classList.add('bg-brand-600', 'text-white');
                    e.target.classList.remove('text-gray-400');
                    renderProjects(e.target.dataset.filter);
                });
            });

            // Mobile Navigation Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });

            // Modal Close Listeners
            document.getElementById('close-modal').addEventListener('click', closeModal);
            document.getElementById('project-modal').addEventListener('click', (e) => {
                if (e.target.id === 'project-modal') closeModal();
            });
        });



// Form Validation & Formspree AJAX Submission
const contactForm = document.getElementById('contact-form');
const formAlert = document.getElementById('form-alert');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // 1. Run Client-side Validation
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value.trim()) {
            showError(nameInput, true);
            isValid = false;
        } else {
            showError(nameInput, false);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, true);
            isValid = false;
        } else {
            showError(emailInput, false);
        }

        if (messageInput.value.trim().length < 10) {
            showError(messageInput, true);
            isValid = false;
        } else {
            showError(messageInput, false);
        }

        // Stop execution if validation fails
        if (!isValid) return;

        // 2. Prepare UI for AJAX Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Sending...`;
        formAlert.classList.add('hidden');

        // 3. Send Form Data via Fetch
        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formAlert.className = "p-4 rounded-xl text-center text-sm font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4";
                formAlert.textContent = "Thank you! Your message has been sent successfully.";
                contactForm.reset();
            } else {
                const data = await response.json();
                throw new Error(data.errors ? data.errors.map(err => err.message).join(', ') : 'Form submission failed');
            }
        } catch (error) {
            formAlert.className = "p-4 rounded-xl text-center text-sm font-medium bg-red-500/10 border border-red-500/30 text-red-400 mb-4";
            formAlert.textContent = "Oops! Something went wrong. Please try again later or email directly.";
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane text-sm"></i>`;
            formAlert.classList.remove('hidden');
        }
    });
}

function showError(inputElement, show) {
    const errorMsg = inputElement.nextElementSibling;
    if (show) {
        inputElement.classList.add('border-red-500');
        if (errorMsg) errorMsg.classList.remove('hidden');
    } else {
        inputElement.classList.remove('border-red-500');
        if (errorMsg) errorMsg.classList.add('hidden');
    }
}