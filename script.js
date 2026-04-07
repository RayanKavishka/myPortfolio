/* global gsap, SplitText */
gsap.registerPlugin(SplitText);


// Pre-Loader Animation
function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}
startLoader();

gsap.to(".counter", 0.25, {
    delay: 3.6,
    opacity: 0,
    zIndex: 0,
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    zIndex: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.to(".overlay", {
    delay: 5,
    opacity: 0,
    pointerEvents: "none",
    duration: 0.5,
});


// Cursor Effect
const cursorCircle = document.querySelector(".cursor-circle");

const sectionNavAll = document.querySelectorAll(".sectionNav");
const aboutMeTxt = document.querySelector(".aboutMe");
const aboutMePara = document.querySelector(".aboutMePara");
const kavishkaTxt = document.querySelector(".kavishkaTxt");

const skillDesAll = document.querySelectorAll(".skillDes");
const eduBackAll = document.querySelectorAll(".eduBack");

const toolPara = document.querySelector(".toolPara");
const hireParaContact = document.querySelector(".hireParaContact");

document.addEventListener("mousemove", (e) => {
    cursorCircle.style.left = `${e.clientX}px`;
    cursorCircle.style.top = `${e.clientY}px`;
});

// =========================================================================================

sectionNavAll.forEach((sectionNav) => {
    sectionNav.addEventListener("mouseenter", () => {
        cursorCircle.style.width = "100px";
        cursorCircle.style.height = "100px";
        cursorCircle.style.backgroundColor = "#E10600";
        cursorCircle.style.mixBlendMode = "difference";
    });

    sectionNav.addEventListener("mouseleave", () => {
        cursorCircle.style.width = "25px";
        cursorCircle.style.height = "25px";
        cursorCircle.style.backgroundColor = "#ffffff";
        cursorCircle.style.mixBlendMode = "normal";
    });
});

// =========================================================================================

aboutMeTxt.addEventListener("mouseenter", () => {
    cursorCircle.style.width = "320px";
    cursorCircle.style.height = "320px";
    cursorCircle.style.backgroundColor = "#E10600";
    cursorCircle.style.mixBlendMode = "difference";
});

aboutMeTxt.addEventListener("mouseleave", () => {
    cursorCircle.style.width = "25px";
    cursorCircle.style.height = "25px";
    cursorCircle.style.backgroundColor = "#ffffff";
    cursorCircle.style.mixBlendMode = "normal";
});

// =========================================================================================

aboutMePara.addEventListener("mouseenter", () => {
    cursorCircle.style.width = "100px";
    cursorCircle.style.height = "100px";
    cursorCircle.style.backgroundColor = "#E10600";
    cursorCircle.style.mixBlendMode = "difference";
});

aboutMePara.addEventListener("mouseleave", () => {
    cursorCircle.style.width = "25px";
    cursorCircle.style.height = "25px";
    cursorCircle.style.backgroundColor = "#ffffff";
    cursorCircle.style.mixBlendMode = "normal";
});

// =========================================================================================

kavishkaTxt.addEventListener("mouseenter", () => {
    cursorCircle.style.width = "150px";
    cursorCircle.style.height = "150px";
    cursorCircle.style.backgroundColor = "#E10600";
    cursorCircle.style.mixBlendMode = "difference";
});

kavishkaTxt.addEventListener("mouseleave", () => {
    cursorCircle.style.width = "25px";
    cursorCircle.style.height = "25px";
    cursorCircle.style.backgroundColor = "#ffffff";
    cursorCircle.style.mixBlendMode = "normal";
});

// =========================================================================================

eduBackAll.forEach((eduBack) => {
    eduBack.addEventListener("mouseenter", () => {
        cursorCircle.style.width = "150px";
        cursorCircle.style.height = "150px";
        cursorCircle.style.backgroundColor = "#E10600";
        cursorCircle.style.mixBlendMode = "difference";
    });

    eduBack.addEventListener("mouseleave", () => {
        cursorCircle.style.width = "25px";
        cursorCircle.style.height = "25px";
        cursorCircle.style.backgroundColor = "#ffffff";
        cursorCircle.style.mixBlendMode = "normal";
    });
});

// =========================================================================================

skillDesAll.forEach((skillDes) => {
    skillDes.addEventListener("mouseenter", () => {
        cursorCircle.style.width = "200px";
        cursorCircle.style.height = "200px";
        cursorCircle.style.backgroundColor = "#E10600";
        cursorCircle.style.mixBlendMode = "difference";
    });

    skillDes.addEventListener("mouseleave", () => {
        cursorCircle.style.width = "25px";
        cursorCircle.style.height = "25px";
        cursorCircle.style.backgroundColor = "#ffffff";
        cursorCircle.style.mixBlendMode = "normal";
    });
});

// =========================================================================================

toolPara.addEventListener("mouseenter", () => {
    cursorCircle.style.width = "200px";
    cursorCircle.style.height = "200px";
    cursorCircle.style.backgroundColor = "#E10600";
    cursorCircle.style.mixBlendMode = "difference";
});

toolPara.addEventListener("mouseleave", () => {
    cursorCircle.style.width = "25px";
    cursorCircle.style.height = "25px";
    cursorCircle.style.backgroundColor = "#ffffff";
    cursorCircle.style.mixBlendMode = "normal";
});

// =========================================================================================

hireParaContact.addEventListener("mouseenter", () => {
    cursorCircle.style.width = "250px";
    cursorCircle.style.height = "250px";
    cursorCircle.style.backgroundColor = "#E10600";
    cursorCircle.style.mixBlendMode = "difference";
});

hireParaContact.addEventListener("mouseleave", () => {
    cursorCircle.style.width = "25px";
    cursorCircle.style.height = "25px";
    cursorCircle.style.backgroundColor = "#ffffff";
    cursorCircle.style.mixBlendMode = "normal";
});



// Header
function burgerIconClick() {
    const nav = document.getElementById("defaultNav");
    const icon = document.getElementById("burger-icon");

    nav.classList.toggle("responsiveNav");

    if (nav.classList.contains("responsiveNav")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}

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
                border: "6px solid #E10600",
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
                border: "6px solid ##ffffff",
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
                border: "4px solid #E10600",
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
                border: "4px solid ##ffffff",
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
                border: "2px solid #E10600",
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
                border: "2px solid ##ffffff",
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


// Skills Section
// ===== Send Email By Submit Button =====
(function () {
    emailjs.init({
        publicKey: "iqOiXIV2IzodYBZVa",
    });
})();

document.getElementById("contactForm").addEventListener("submit", sendEmail);

function sendEmail(e) {
    e.preventDefault();

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    let isFilled = true;
    Object.values(params).forEach((val) => {
        if (val.trim() === "") {
            isFilled = false;
        }
    });

    if (isFilled) {
        emailjs.send("service_rgfzhmq", "template_uq06trp", params)
            .then(function () {
                alert("Email has been sent");
                document.getElementById("contactForm").reset();
            })
            .catch(function (error) {
                alert("Failed to send");
            });
    } else {
        alert("Fill all fields");
    }
}