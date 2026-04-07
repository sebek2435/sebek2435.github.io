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
            description: "A Placeholder Description for the Numpad",
            images: [
                "./Projects/Numpad/Numpad1.png",
                "./Projects/Numpad/Numpad2.png",
                "./Projects/Numpad/Numpad3.png"
            ]
        },
        {
            id: 2,
            title: "3D Printable Laptop Stand",
            description: "A Placeholder description for the laptop Stand",
            images: [
                "./Projects/KumikoLaptopStand/1.png",
				"./Projects/KumikoLaptopStand/2.png",
				"./Projects/KumikoLaptopStand/3.png"
            ]
        },
        {
            id: 3,
            title: "3D Printable Fidget Gear Ring",
            description: "A Placeholder description for the gear Ring",
            images: [
                "./Projects/GearRing/1.png",
				"./Projects/GearRing/2.png",
				"./Projects/GearRing/3.jpg",
				"./Projects/GearRing/4.jpg"
            ]
        },
        {
            id: 4,
            title: "Robotic Articulation Arm",
            description: "A 6-axis robotic arm designed for automated manufacturing processes. Integrates harmonic drive enclosures and internal cable routing channels for a sleek, snag-free operational envelope.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Robotic+Arm+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Robotic+Arm+2"
            ]
        },
        {
            id: 5,
            title: "Hydraulic Manifold",
            description: "High-pressure hydraulic manifold block featuring intricate internal passaging to eliminate external hardlines. Designed for compact multi-valve integration within heavy machinery.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Manifold+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Manifold+2"
            ]
        },
        {
            id: 6,
            title: "Consumer Drone Chassis",
            description: "Lightweight, aerodynamic drone chassis designed for injection molding. Showcases drafted angles, ribbing for structural integrity, and snap-fit joints for rapid assembly without fasteners.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Drone+Chassis+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Drone+Chassis+2",
                "https://placehold.co/800x600/2a2a2a/008080?text=Drone+Chassis+3"
            ]
        },
        {
            id: 7,
            title: "CNC Fixture Plate",
            description: "Custom modular fixturing plate for 5-axis CNC machining centers. Features an alpha-numeric grid mapping and low-profile clamping systems for high-repeatability batch production.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=CNC+Plate+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=CNC+Plate+2"
            ]
        },
        {
            id: 8,
            title: "Consumer Appliance Enclosure",
            description: "Ergonomically designed outer shell for a modern smart-kitchen appliance. The design emphasizes premium surface continuity (G2/G3 curves) and intuitive UI integration.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Appliance+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Appliance+2"
            ]
        },
        {
            id: 9,
            title: "Jet Engine Injector",
            description: "Additively manufactured fuel swirl injector. The internal geometries are optimized for ideal fuel-air atomization, utilizing channels that would be impossible via traditional subtractive manufacturing.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Injector+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Injector+2"
            ]
        },
        {
            id: 10,
            title: "Exoskeleton Joint Prototype",
            description: "Experimental load-bearing joint for a lower-body exoskeleton. Incorporates passive spring assistance and hard-stops to assist users with mobility impairments without relying on heavy battery packs.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Exoskeleton+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Exoskeleton+2"
            ]
        }
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
