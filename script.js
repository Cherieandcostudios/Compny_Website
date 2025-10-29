// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu .close-btn');

// Open mobile menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Close mobile menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Optional: close menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get the main container element by its ID
    const container = document.getElementById('foundersNoteContainer');
    
    if (!container) {
        // console.error("Founder's Note container not found.");
        return;
    }
    
    // Get the button/link element inside that container
    // We target the anchor tag with the specific class
    const button = container.querySelector('.btn-secondary');

    // Add the event listener to the button
    button.addEventListener('click', (event) => {
        // IMPORTANT: Prevent the link from jumping to the top of the page (#) or navigating away
        event.preventDefault(); 
        
        // Toggles the 'is-active' class on the container
        // If the class is present, the dialog appears. If it's absent, it disappears.
        container.classList.toggle('is-active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const headingContainer = document.querySelector('.animated-heading-container');
    
    if (!headingContainer) return;

    const words = headingContainer.querySelectorAll('.text-word');
    const animationDelay = 75; // Delay in milliseconds between each word's animation start

    // --- Step 1: Stagger the CSS Transition Delay ---
    words.forEach((word, index) => {
        // Set the CSS transition delay based on the word's index
        word.style.transitionDelay = `${index * animationDelay}ms`;
    });

    // --- Step 2: Set up Scroll Triggering (Intersection Observer) ---
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the container is in view, apply the 'in-view' class to ALL words
                words.forEach(word => {
                    word.classList.add('in-view');
                });
                // Stop observing after the animation has started
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing the main container
    observer.observe(headingContainer);
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Register Plugins (Must be done after loading the GSAP scripts)
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // 2. Select the Element to Animate
    const heading = document.querySelector('.main-heading');
    
    if (!heading) return;

    // 3. Set the INITIAL opacity of the heading to 1 AFTER the page loads, 
    //    as the CSS sets it to 0 initially to prevent FOUC (Flash of Unstyled Content).
    gsap.set(heading, { opacity: 1 });

    // 4. Create the SplitText Instance
    // This breaks the text into individual words.
    const splitText = new SplitText(heading, {
        type: "words, chars", // Split by words AND characters
        wordsClass: "split-word",
        charsClass: "split-char"
    });

    // We will animate the 'words' array (or you can use splitText.chars for a finer animation)
    const targets = splitText.words; 
    
    // 5. Create the Scroll-Triggered Animation
    gsap.fromTo(targets, 
        // FROM state (similar to your React component's 'from' prop)
        { 
            opacity: 0, 
            y: 40,
            filter: "blur(5px)", // Added blur for a nicer effect
            ease: "none"
        },
        // TO state (The final animated state)
        {
            opacity: 1, 
            y: 0,
            filter: "blur(0px)",
            duration: 0.8, // Duration of the animation for each word
            ease: "power3.out",
            stagger: 0.05, // Stagger delay (50 milliseconds between each word)
            
            // ScrollTrigger setup
            scrollTrigger: {
                trigger: heading,
                start: "top 80%", // Starts when the top of the heading hits 80% down the viewport
                end: "bottom center",
                toggleActions: "play none none none", // Play once when scrolling down
                once: true, // Animation plays only once
                fastScrollEnd: true
            }
        }
    );
});