const UncontrolledInputs = () => {
    const isDebugEnabled = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        if (isDebugEnabled) {
            console.log("name ::: " + name);
            console.log("email ::: " + email);
            console.log("password ::: " + password);
            console.log([...formData.entries()]);
            console.log(Object.fromEntries(formData));
        }
        e.currentTarget.reset();
    };
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Form Data API</h4>
                {/* name */}
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        name="name"
                    />
                </div>
                {/* email */}
                <div className="form-row">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-input"
                        id="email"
                        name="email"
                    />
                </div>
                {/* password */}
                <div className="form-row">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-input"
                        id="password"
                        name="password"
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </div>
    );
};
export default UncontrolledInputs;