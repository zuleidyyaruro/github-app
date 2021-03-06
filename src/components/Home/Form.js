import React from 'react'

const Form = ({ handleUserName, handleSubmit, userName }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 text-center col-lg-6 mx-auto">
                <label
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                >
                    Search by Username
                </label>
                <input
                    onChange={handleUserName}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={userName}
                />
                <button
                    type="submit"
                    className="btn btn-info mt-3"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Form
