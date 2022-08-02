/** Add/remove strikethrough on a to-do element. */
const checkLineThrough = (element) => {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "";
    } else {
        element.style.textDecoration = "line-through";
    }
};

/** Trigger click animation for to-do item. */
const handleClick = (e) => {
    if (e.target.classList.contains("del-cont")) {
        return;
    }
    let element = e.target.closest(".td-item");
    element.classList.add("clicked");
    checkLineThrough(element);
};

/** Remove 'clicked' class from to-do item after animation. */
const handleAnimationEnd = (e) => {
    e.target.classList.remove("clicked");
};

export { handleClick, handleAnimationEnd };
