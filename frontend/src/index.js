import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Error, displayError } from "./error.js";
import { handleClick, handleAnimationEnd } from "./click_handling";

/**
 * Return list display of to-do items.
 *
 * Props: items.
 */
function ToDoList(props) {
    return props.items.map((item) => (
        <div key={item.id} className="row justify-content-center mb-3">
            <div
                onClick={handleClick}
                onAnimationEnd={handleAnimationEnd}
                className="col-10 col-md-8 col-lg-6 bg-light rounded-1 td-item"
            >
                <div className="row">
                    <div className="col-12 col-md-11 p-2">
                        <span className="fs-5 td-text">{item.content}</span>
                    </div>
                    <div
                        onClick={props.handleDelete}
                        className="col del-cont d-flex justify-content-center align-items-center mt-2 mt-md-0 p-2 p-md-0"
                        data-content={item.content}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                </div>
            </div>
        </div>
    ));
}

/**
 * Return form for user to add to-do items.
 *
 * Props: handleSubmit, handleInputChange, formValue.
 */
function ToDoForm(props) {
    return (
        <div>
            <div className="row justify-content-center mb-3 mt-2">
                <div className="col-10 col-md-8 col-lg-6 text-center">
                    <h1 className="text-light fw-bold">To-Do</h1>

                    <form
                        onSubmit={props.handleSubmit}
                        className="d-flex justify-content-center"
                    >
                        <input
                            className="form-control"
                            placeholder="Add item"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.formValue}
                            name="toDoItem"
                        />
                        <button
                            type="submit"
                            className="fs-3 text-success rounded ms-1"
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </form>
                </div>
            </div>

            <Error />
        </div>
    );
}

/**
 * To-do controller component. Render function related function components and handle
 * application state.
 *
 * State:
 * toDoItems, type: array
 * formValue, type: string
 */
class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoItems: [],
            formValue: ""
        };
    }

    componentDidMount = () => {
        this.fetchToDoList();
    };

    fetchToDoList = () => {
        fetch("http://127.0.0.1:8000/api/get_list")
            .then((res) => {
                if (!res.ok) {
                    console.log("Response error.");
                }
                return res.json();
            })
            .then((data) => this.setState({ toDoItems: data }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const toDoItems = this.state.toDoItems.slice();
        const value = this.state.formValue;

        if (!value.trim()) {
            displayError("Invalid input!");
            return;
        } else if (toDoItems.includes(value)) {
            displayError("Entry already exists.");
            return;
        }

        toDoItems.unshift(value);
        this.setState({ toDoItems: toDoItems, formValue: "" });
    };

    handleInputChange = (e) => {
        this.setState({ formValue: e.target.value });
    };

    handleDelete = (e) => {
        const toDoContent = e.target.getAttribute("data-content");
        const toDoItems = this.state.toDoItems.slice();
        const index = toDoItems.indexOf(toDoContent);

        toDoItems.splice(index, 1);
        this.setState({ toDoItems: toDoItems });
    };

    render() {
        return (
            <div className="container-fluid">
                <ToDoForm
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                    formValue={this.state.formValue}
                />

                <ToDoList
                    items={this.state.toDoItems}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ToDoApp />);
