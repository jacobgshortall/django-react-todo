/** Return error message component. */
const Error = (props) => {
    return (
        <div className="row mt-1 justify-content-center" id="cont">
            <div className="col-10 col-md-8 col-lg-6">
                <p id="error" className="shadow-sm"></p>
            </div>
        </div>
    );
};

/** Display message parameter in error alert. */
const displayError = (message) => {
    const errorContainer = document.getElementById("cont");
    const errorText = document.getElementById("error");
    errorText.innerText = message;
    errorContainer.style.opacity = "1";

    setTimeout(() => {
        errorContainer.style.opacity = "0";
    }, 2000);
};

/** Check if submitted form value already exists in list.  */
const checkInvalidInput = (value, items) => {
    for (const obj of items) {
        if (obj.content === value) {
            return true;
        }
    }
};

export { Error, displayError, checkInvalidInput };
