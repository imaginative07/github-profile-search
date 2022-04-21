import React, { useState, useContext, useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
import Alert from "../layout/Alert";

function UserSearch() {
    const { searchUsers, fetchUsers, alert } = useContext(GithubContext);

    useEffect(() => {
        fetchUsers();
    }, []);

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === "") {
            alert();
        } else {
            searchUsers(text);
            setText("");
        }
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 pb-10">
            <div>
                <Alert />
                <form className="form-control" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            className="input w-full pr-40 bg-gray-200 input input-lg text-black"
                            placeholder="Search Users"
                            value={text}
                            onChange={handleChange}
                        />
                        <button
                            className="button absolute top-0 right-0 rounded-l-none w-36 btn btn-lg text-white bg-gray-800"
                            type="submit"
                        >
                            Go
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserSearch;
