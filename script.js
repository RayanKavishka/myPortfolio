// Tool Section

/* global gsap, SplitText */
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {
    const toolImageContainer = document.querySelector(".toolImagesContainer");
    const toolImages = document.querySelectorAll(".toolImagesContainer .toolImg");
    const toolNameElements = document.querySelectorAll(".toolNamesContainer .toolName");
    const toolNameHeadings = document.querySelectorAll(".toolNamesContainer .toolName h1");

    toolNameHeadings.forEach((heading) => {
        const split = new SplitText(heading, { type: "chars" });
        split.chars.forEach((char) => {
            char.classList.add("letter");
        });
    });

    const defaultLetters = toolNameElements[0].querySelectorAll(".letter");
    gsap.set(defaultLetters, { y: "100%" });

    if (window.innerWidth >= 1024) {
        toolImages.forEach((img, index) => {
            const correspondingName = toolNameElements[index + 1];
            const letters = correspondingName.querySelectorAll(".letter");

            img.addEventListener("mouseenter", () => {
                gsap.to(img, {
                    width: 140,
                    height: 140,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.to(letters, {
                    y: "-100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    width: 80,
                    height: 80,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.to(letters, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });
        });

        toolImageContainer.addEventListener("mouseenter", () => {
            gsap.to(defaultLetters, {
                y: "0%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });

        toolImageContainer.addEventListener("mouseleave", () => {
            gsap.to(defaultLetters, {
                y: "100%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });
    }

    if (window.innerWidth > 640 && window.innerWidth < 1024) {
        toolImages.forEach((img, index) => {
            const correspondingName = toolNameElements[index + 1];
            const letters = correspondingName.querySelectorAll(".letter");

            img.addEventListener("mouseenter", () => {
                gsap.to(img, {
                    width: 90,
                    height: 90,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.to(letters, {
                    y: "-100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    width: 55,
                    height: 55,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.to(letters, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });
        });

        toolImageContainer.addEventListener("mouseenter", () => {
            gsap.to(defaultLetters, {
                y: "0%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });

        toolImageContainer.addEventListener("mouseleave", () => {
            gsap.to(defaultLetters, {
                y: "100%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });
    }

    if (window.innerWidth <= 640) {
        toolImages.forEach((img, index) => {
            const correspondingName = toolNameElements[index + 1];
            const letters = correspondingName.querySelectorAll(".letter");

            img.addEventListener("mouseenter", () => {
                gsap.to(img, {
                    width: 65,
                    height: 65,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.to(letters, {
                    y: "-100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    width: 45,
                    height: 45,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.to(letters, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });
        });

        toolImageContainer.addEventListener("mouseenter", () => {
            gsap.to(defaultLetters, {
                y: "0%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });

        toolImageContainer.addEventListener("mouseleave", () => {
            gsap.to(defaultLetters, {
                y: "100%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });
    }
});