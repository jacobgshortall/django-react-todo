/** Add/remove strikethrough on a to-do element. */
const checkLineThrough = (element) => {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "";
    } else {
        element.style.textDecoration = "line-through";
    }
};

/** Remove 'clicked' class from to-do item after animation. */
const handleAnimationEnd = (e) => {
    e.target.classList.remove("clicked");
};

export { checkLineThrough, handleAnimationEnd };
