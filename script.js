document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("portfolioGrid");

    // Lightbox Setup
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-btn.prev');
    const lightboxNext = document.querySelector('.lightbox-btn.next');

    let currentLightboxImages = [];
    let currentLightboxIndex = 0;

    const updateLightboxImage = () => {
        if (currentLightboxImages.length > 0) {
            lightboxImg.src = currentLightboxImages[currentLightboxIndex];
        }
    };

    lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg && e.target !== lightboxPrev && e.target !== lightboxNext) {
            lightbox.classList.remove('active');
        }
    });

    if (lightboxPrev && lightboxNext) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentLightboxImages.length > 0) {
                currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
                updateLightboxImage();
            }
        });

        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentLightboxImages.length > 0) {
                currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
                updateLightboxImage();
            }
        });
    }

    // Dummy project data
    const projects = [
        {
            id: 1,
            title: "3D Printable Numpad",
            description: "This is a wireless numpad I designed in Fusion360 trying to match the design of my keyboard. The build uses a friction fit to attach hotswap sockets to a plate allowing for quick switch changes. I 3D printed the enclosure and plates in PLA, hand wired the matrix and LED's to an NRF52840 microcontroller flashed with a custom ZMK firmware. After wiring everything together the design had some clearance issues so I decided to trim and file some parts to fit and save materials on this first prototype.",
            tools: ["Fusion 360", "3D Printer"],
            images: [
                "./Projects/Numpad/1.webp",
                "./Projects/Numpad/2.webp",
                "./Projects/Numpad/3.webp",
				"./Projects/Numpad/4.webp",
				"./Projects/Numpad/5.webp",
				"./Projects/Numpad/6.webp"
            ]
        },
        {
            id: 2,
            title: "3D Printable Laptop Stand",
            description: "In this project I used Fusion360 to design a laptop stand inspired by the Japanes Kumiko patterns which serve as both a visual feature and a functional intake for the optional 2 cooling fans. The main surface is too big for most standard 3D printers so it had to be split into 2 parts, then welded together with a 3D pen and a soldering iron. To maintain a clean aesthetic, I also designed custom press-fit covers that hide the fan mounting hardware.",
            tools: ["Fusion 360", "3D Printer"],
            images: [
                "./Projects/KumikoLaptopStand/1.webp",
				"./Projects/KumikoLaptopStand/2.webp",
				"./Projects/KumikoLaptopStand/3.webp"
            ]
        },
        {
            id: 3,
            title: "3D Printable Fidget Gear Ring",
            description: "This project was an experiment inspired by real metal gear rings I've seen online to see how well this mechanism would work at that size if 3D printed as I havent seen anyone else try that yet. The ring features a sandwich assembly of 9 miniature idler gears and 2 outer crown gears. I modelled the assmebly in Fusion 360 testing different tollerances until I found ones that work smoothly without binding though the gears still need to be worn in for optimal smoothness. The gears are held in place with some press-fit pins that fit into the core and can be glued or welded for a permanent bond. The parts were printed with Silk PLA to mimic the metallic look of the real rings.",
            tools: ["Fusion 360", "3D Printer"],
            images: [
                "./Projects/GearRing/1.png",
				"./Projects/GearRing/2.png",
				"./Projects/GearRing/3.jpg",
				"./Projects/GearRing/4.jpg"
            ]
        },
        {
            id: 4,
            title: "GPU Model from reference",
            description: "I modeled this graphics card in SolidWorks to use as a reference component for a larger PC build project I was working on. Since I had the card in person, I used a set of calipers to get exact measurements of the shroud, ports, and mounting points to make sure the digital version was a 1:1 match. While the main assembly project is currently on hold since I no longer own the hardware, the model itself was a great exercise in reverse engineering a complex physical object into a clean, usable CAD asset.",
			tools: ["Solidworks"],
            images: [
                "./Projects/GPU/1.png",
                "./Projects/GPU/2.png"
            ]
        },
        {
            id: 5,
            title: "Speaker",
            description: "I designed these speaker enclosures around drivers and components I salvaged from a set of Facebook Marketplace speakers. The setup includes two drivers per box—a tweeter and a mid/subwoofer—alongside a passive radiator for better bass response. I used the original parts as a reference to design a custom, modern compartment with the goal of converting them into a wireless system. While the project is currently on hold, it was a great exercise in designing around fixed internal components and planning for integrated electronics.",
			tools: ["Solidworks"],
            images: [
                "./Projects/Speaker/1.png",
                "./Projects/Speaker/2.png",
				"./Projects/Speaker/3.png"
            ]
        },
        {
            id: 6,
            title: "Custom IEM TWS Earhooks",
            description: "The goal of this project was to turn my favorite IEMs into a low-latency wireless setup by salvaging the internals from a pair of gaming earbuds. I used Fusion 360 to design the hooks, focusing on making them as light and compact as possible while still squeezing in a larger 130mAh battery for better runtime. I cut down some IEM cables and soldered them onto the PCBs which were held tight by the 3D printed housing. I also built a custom charging case that fits the original electronics and has enough room to store the hooks with the IEMs still attached. It’s a bit bigger than a standard case, but it's still comparable to other wireless hooks on the market and much more convenient for my specific setup. This is still an ongoing project; I’m currently refining the design to further reduce the footprint and improve the overall assembly as I test it out in daily use.",
			tools: ["Fusion 360", "3D Printer"],
            images: [
                "./Projects/EarHook+Case/1.webp",
                "./Projects/EarHook+Case/2.webp",
                "./Projects/EarHook+Case/3.webp"
            ]
        },
        {
            id: 7,
            title: "House Rooms",
            description: "This is an ongoing project to recreate my entire house as a realistic, 1:1 scale environment for VR. Using Blender, I’ve modeled my office and bathroom using tape-measure dimensions to ensure the spatial scale is as accurate as possible. I’ve been testing these rooms in Unity for use in the social VR platform Banter, focusing on making the space feel natural and fully interactable. It’s a fun way to practice architectural modeling and asset optimization for real-time VR games.",
			tools: ["Blender"],
            images: [
                "./Projects/House/1.png",
				"./Projects/House/2.png",
				"./Projects/House/3.png",
				"./Projects/House/4.png",
            ]
        },
		{
            id: 8,
            title: "Landing Gear Assembly",
            description: "This was a college project focused on the basics of mechanical assembly and documentation. Working from a set of engineering drawings, I modeled a landing gear system in SolidWorks to ensure all the components were accurate and fit together in an assembly. After the 3D work was done, I created my own 2D technical drawings, focusing on proper dimensioning and layouts. It was a great way to learn the ropes of both reading and creating the blueprints used in real-world manufacturing.",
			tools: ["Solidworks"],
            images: [
                "./Projects/LandingGear/1.jpg",
				"./Projects/LandingGear/2.webp",
				"./Projects/LandingGear/3.webp"
            ]
        },
        {
            id: 9,
            title: "Mini Wind Turbine",
            description: "For this project, my team designed a small-scale wind turbine for a power-generation challenge, ultimately taking joint 1st place. We tested our prototype in a wind tunnel to see how effectively it could spin a motor to charge a battery. After the results came in, my theory was that we were limited by a hardware bottleneck—likely the motor’s peak voltage output or the battery’s charging threshold as both the top teams hit a similar \"performance ceiling.\" It was an awesome experience in collaborative design, aerodynamic testing, and seeing how theoretical models perform under real-world physical stress.",
			tools: ["Solidworks"],
            images: [
                "./Projects/WindTurbine/1.png",
				"./Projects/WindTurbine/2.webp"
            ]
        },
    ];

    // Render projects
    projects.forEach((project, index) => {
        // Create Card
        const card = document.createElement("div");
        card.className = "project-card";
        card.dataset.id = project.id;
        card.dataset.index = index;
        card.style.viewTransitionName = `card-${project.id}`;

        // Carousel HTML
        const slides = project.images.map(img => `<div class="carousel-slide"><img src="${img}" alt="${project.title} Image"></div>`).join('');
        
        let carouselControls = "";
        if(project.images.length > 1) {
            carouselControls = `
                <button class="carousel-btn prev" aria-label="Previous image">&lt;</button>
                <button class="carousel-btn next" aria-label="Next image">&gt;</button>
            `;
        }

        const rawTools = project.tools || ["SolidWorks", "AutoCAD", "Fusion 360", "3D Printing"];
        const toolsList = Array.isArray(rawTools) ? rawTools : [rawTools];
        const toolsHTML = toolsList.map(tool => `<span class="tool-badge">${tool}</span>`).join('');

        card.innerHTML = `
            <div class="carousel-container">
                <div class="carousel-track">
                    ${slides}
                </div>
                ${carouselControls}
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-details">${project.description}</p>
                <div class="tools-used">
                    <span style="font-weight: 600; width: 100%;">Tools Used:</span>
                    ${toolsHTML}
                </div>
                <button class="btn-shrink">Hide</button>
            </div>
        `;

        portfolioGrid.appendChild(card);
    });

    // Handle Interactivity
    const cards = document.querySelectorAll(".project-card");
    let activeCard = null;

    cards.forEach(card => {
        const carouselTrack = card.querySelector(".carousel-track");
        const slides = card.querySelectorAll(".carousel-slide");
        const btnPrev = card.querySelector(".carousel-btn.prev");
        const btnNext = card.querySelector(".carousel-btn.next");
        const btnShrink = card.querySelector(".btn-shrink");

        let currentSlide = 0;
        const totalSlides = slides.length;

        // Carousel functionality logic
        function updateCarousel() {
            carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        if (btnNext && btnPrev) {
            btnNext.addEventListener("click", (e) => {
                e.stopPropagation(); // prevent card click
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            });

            btnPrev.addEventListener("click", (e) => {
                e.stopPropagation(); // prevent card click
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });
        }

        const toggleCardState = (forceShrink = false) => {
            if (forceShrink) {
                card.classList.remove("expanded");
                if (activeCard === card) activeCard = null;
                return;
            }
            if (activeCard && activeCard !== card) {
                activeCard.classList.remove("expanded");
            }
            card.classList.add("expanded");
            activeCard = card;
        };

        const executeTransition = (action) => {
            if (document.startViewTransition) {
                const transition = document.startViewTransition(() => {
                    action();
                });
                
                transition.finished.then(() => {
                    if (card.classList.contains("expanded")) {
                        const rect = card.getBoundingClientRect();
                        const targetY = rect.top + window.scrollY - 100;
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                    }
                });
            } else {
                action();
                if (card.classList.contains("expanded")) {
                    setTimeout(() => {
                        const rect = card.getBoundingClientRect();
                        const targetY = rect.top + window.scrollY - 100;
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                    }, 100);
                }
            }
        };

        // Expand functionality
        card.addEventListener("click", (e) => {
            if (e.target.closest('.carousel-btn') || e.target.closest('.btn-shrink') || card.classList.contains("expanded")) return;
            executeTransition(() => toggleCardState(false));
        });

        // Shrink button functionality
        btnShrink.addEventListener("click", (e) => {
            e.stopPropagation();
            executeTransition(() => toggleCardState(true));
        });

        // Lightbox image click functionality
        carouselTrack.addEventListener("click", (e) => {
            if (e.target.tagName === 'IMG' && card.classList.contains("expanded")) {
                e.stopPropagation(); // prevent card events
                const pIndex = card.dataset.index;
                const pItem = projects[pIndex];
                currentLightboxImages = pItem.images;
                currentLightboxIndex = currentSlide;
                
                if (currentLightboxImages.length <= 1) {
                    if (lightboxPrev) lightboxPrev.style.display = 'none';
                    if (lightboxNext) lightboxNext.style.display = 'none';
                } else {
                    if (lightboxPrev) lightboxPrev.style.display = 'flex';
                    if (lightboxNext) lightboxNext.style.display = 'flex';
                }

                updateLightboxImage();
                lightbox.classList.add('active');
            }
        });
    });

    // Close expanded card when clicking outside
    document.addEventListener("click", (e) => {
        if (activeCard && !activeCard.contains(e.target) && !e.target.closest('#lightbox')) {
            const shrinkBtn = activeCard.querySelector('.btn-shrink');
            if (shrinkBtn) shrinkBtn.click();
        }
    });
});
