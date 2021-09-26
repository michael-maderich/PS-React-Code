export default function AddToDo(props:any) {

    const {newToDo, handleChange, handleSubmit} = props;

    return (
        <div>
        <h2>New To-Do Item:</h2>
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="Title"
                value={newToDo.title || ""}
                onChange={handleChange}
            />
            {!newToDo.title ? null : ( // Only display Details textarea if a title is entered
            <div>
                <textarea
                    name="details"
                    placeholder="Details..."
                    value={newToDo.details as string || ""}
                    onChange={handleChange}
                />
                <div><button type="submit">Add Task</button></div>
            </div>
            )}
        </form>
        </div>
    );
}