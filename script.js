/* global gsap, SplitText */
gsap.registerPlugin(SplitText);


// Skills Section

document.addEventListener("DOMContentLoaded", () => {
    const skillHead = document.querySelectorAll(".skillHead");
    const skillDes = document.querySelectorAll(".skillDes");
    const skillImagesContainer = document.querySelector(".skillImagesContainer");
    const skillImage = document.querySelectorAll(".skillImage");
    const leftArrowSkill = document.getElementById("leftArrowSkill");
    const rightArrowSkill = document.getElementById("rightArrowSkill");

    skillHead.forEach((heading) => {
        new SplitText(heading, { type: "chars" })
            .chars.forEach(c => c.classList.add("headLetter"));
    });


    if (window.innerWidth >= 1024) {
        let current = 0;
        const total = skillImage.length;

        function updateArrows() {
            leftArrowSkill.disabled = current === 0;
            rightArrowSkill.disabled = current === total - 1;
        }

        function animateTextIn(index) {
            const headLetters = skillHead[index].querySelectorAll(".headLetter");
            const description = skillDes[index];
            const image = skillImage[index];

            if (index === 0) {
                gsap.to(headLetters, {
                    y: "0",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    },
                });

            } else {
                gsap.to(headLetters, {
                    y: "-100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    },
                });
            }

            gsap.fromTo(description,
                { y: "100%" },
                { y: "0%", ease: "power4.out", duration: 0.75 }
            );

            gsap.to(image, {
                scale: 1,
                filter: "grayscale(0%)",
                duration: 0.75,
                ease: "power4.out",
            });
        }

        function animateTextOut(index) {
            const headLetters = skillHead[index].querySelectorAll(".headLetter");
            const description = skillDes[index];
            const image = skillImage[index];

            if (index === 0) {
                gsap.to(headLetters, {
                    y: "100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    }
                });

            } else {
                gsap.to(headLetters, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    }
                });
            }

            gsap.to(description, {
                y: "-100%",
                ease: "power4.out",
                duration: 0.75
            });

            gsap.to(image, {
                scale: 0.8,
                filter: "grayscale(100%)",
                duration: 0.75,
                ease: "power4.out",
            });
        }

        leftArrowSkill.addEventListener("click", () => {
            if (current === 0) return;
            animateTextOut(current);
            current--;
            animateTextIn(current);

            skillImage.forEach(function(image) {
                gsap.to(image, {
                    x: (-195 * current),
                    duration: 0.75,
                    ease: "power4.out",
                });
            });

            updateArrows();
        });

        rightArrowSkill.addEventListener("click", () => {
            if (current === total - 1) return;
            animateTextOut(current);
            current++;
            animateTextIn(current);

            skillImage.forEach(function(image) {
                gsap.to(image, {
                    x: (-195 * current),
                    duration: 0.75,
                    ease: "power4.out",
                });
            });

            updateArrows();
        });

        updateArrows();
    }


    if (window.innerWidth > 640 && window.innerWidth < 1024) {
        let current = 0;
        const total = skillImage.length;

        function updateArrows() {
            leftArrowSkill.disabled = current === 0;
            rightArrowSkill.disabled = current === total - 1;
        }

        function animateTextIn(index) {
            const headLetters = skillHead[index].querySelectorAll(".headLetter");
            const description = skillDes[index];
            const image = skillImage[index];

            if (index === 0) {
                gsap.to(headLetters, {
                    y: "0",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    },
                });

            } else {
                gsap.to(headLetters, {
                    y: "-100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    },
                });
            }

            gsap.fromTo(description,
                { y: "100%" },
                { y: "0%", ease: "power4.out", duration: 0.75 }
            );

            gsap.to(image, {
                scale: 1,
                filter: "grayscale(0%)",
                duration: 0.75,
                ease: "power4.out",
            });
        }

        function animateTextOut(index) {
            const headLetters = skillHead[index].querySelectorAll(".headLetter");
            const description = skillDes[index];
            const image = skillImage[index];

            if (index === 0) {
                gsap.to(headLetters, {
                    y: "100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    }
                });

            } else {
                gsap.to(headLetters, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    }
                });
            }

            gsap.to(description, {
                y: "-100%",
                ease: "power4.out",
                duration: 0.75
            });

            gsap.to(image, {
                scale: 0.8,
                filter: "grayscale(100%)",
                duration: 0.75,
                ease: "power4.out",
            });
        }

        leftArrowSkill.addEventListener("click", () => {
            if (current === 0) return;
            animateTextOut(current);
            current--;
            animateTextIn(current);

            skillImage.forEach(function(image) {
                gsap.to(image, {
                    x: (-125 * current),
                    duration: 0.75,
                    ease: "power4.out",
                });
            });

            updateArrows();
        });

        rightArrowSkill.addEventListener("click", () => {
            if (current === total - 1) return;
            animateTextOut(current);
            current++;
            animateTextIn(current);

            skillImage.forEach(function(image) {
                gsap.to(image, {
                    x: (-125 * current),
                    duration: 0.75,
                    ease: "power4.out",
                });
            });

            updateArrows();
        });

        updateArrows();
    }


    if (window.innerWidth <= 640) {
        let current = 0;
        const total = skillImage.length;

        function updateArrows() {
            leftArrowSkill.disabled = current === 0;
            rightArrowSkill.disabled = current === total - 1;
        }

        function animateTextIn(index) {
            const headLetters = skillHead[index].querySelectorAll(".headLetter");
            const description = skillDes[index];
            const image = skillImage[index];

            if (index === 0) {
                gsap.to(headLetters, {
                    y: "0",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    },
                });

            } else {
                gsap.to(headLetters, {
                    y: "-100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    },
                });
            }

            gsap.fromTo(description,
                { y: "100%" },
                { y: "0%", ease: "power4.out", duration: 0.75 }
            );

            gsap.to(image, {
                scale: 1,
                filter: "grayscale(0%)",
                duration: 0.75,
                ease: "power4.out",
            });
        }

        function animateTextOut(index) {
            const headLetters = skillHead[index].querySelectorAll(".headLetter");
            const description = skillDes[index];
            const image = skillImage[index];

            if (index === 0) {
                gsap.to(headLetters, {
                    y: "100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    }
                });

            } else {
                gsap.to(headLetters, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center"
                    }
                });
            }

            gsap.to(description, {
                y: "-100%",
                ease: "power4.out",
                duration: 0.75
            });

            gsap.to(image, {
                scale: 0.8,
                filter: "grayscale(100%)",
                duration: 0.75,
                ease: "power4.out",
            });
        }

        leftArrowSkill.addEventListener("click", () => {
            if (current === 0) return;
            animateTextOut(current);
            current--;
            animateTextIn(current);

            skillImage.forEach(function(image) {
                gsap.to(image, {
                    x: (-85 * current),
                    duration: 0.75,
                    ease: "power4.out",
                });
            });

            updateArrows();
        });

        rightArrowSkill.addEventListener("click", () => {
            if (current === total - 1) return;
            animateTextOut(current);
            current++;
            animateTextIn(current);

            skillImage.forEach(function(image) {
                gsap.to(image, {
                    x: (-85 * current),
                    duration: 0.75,
                    ease: "power4.out",
                });
            });

            updateArrows();
        });

        updateArrows();
    }
});


// =========================================================================================================================================================


// Tool Section

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