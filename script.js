document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("portfolioGrid");

    // Dummy project data
    const projects = [
        {
            id: 1,
            title: "Mechanical Gear Assembly",
            description: "A precision-engineered mechanical gear assembly designed for high-stress applications. Modeled with incredibly tight tolerances to ensure maximum durability and seamless power transmission. Features optimized tooth profiles and lightweight structural cutouts.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Gear+Assembly+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Gear+Assembly+2",
                "https://placehold.co/800x600/2a2a2a/008080?text=Gear+Assembly+3"
            ]
        },
        {
            id: 2,
            title: "Aerospace Turbine Hub",
            description: "Advanced turbine hub concept for next-generation aerospace engines. The design incorporates complex airfoil sweeping logic and thermal expansion joints. Utilizing titanium alloy representations for stress testing and computational fluid dynamics simulations.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Turbine+Hub+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Turbine+Hub+2"
            ]
        },
        {
            id: 3,
            title: "Automotive Suspension",
            description: "Double wishbone suspension system for performance terrain vehicles. This assembly minimizes unsprung mass while maintaining extreme rigidity under harsh impact loading. Features adjustable coilover mounts and custom fabricated control arms.",
            images: [
                "https://placehold.co/800x600/2a2a2a/008080?text=Suspension+1",
                "https://placehold.co/800x600/3a3a3a/008080?text=Suspension+2",
                "https://placehold.co/800x600/2a2a2a/008080?text=Suspension+3"
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
                document.startViewTransition(() => {
                    action();
                }).ready.then(() => {
                    if (card.classList.contains("expanded")) {
                        setTimeout(() => {
                            const rect = card.getBoundingClientRect();
                            const bodyRect = document.body.getBoundingClientRect().top;
                            window.scrollTo({ top: rect.top - bodyRect - 100, behavior: "smooth" });
                        }, 50);
                    }
                });
            } else {
                action();
                if (card.classList.contains("expanded")) {
                    setTimeout(() => {
                        const rect = card.getBoundingClientRect();
                        const bodyRect = document.body.getBoundingClientRect().top;
                        window.scrollTo({ top: rect.top - bodyRect - 100, behavior: "smooth" });
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
    });
});
