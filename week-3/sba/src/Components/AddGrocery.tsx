export default function AddGrocery(props:any) {

    const {newGrocery, handleChange, handleSubmit} = props;

    return (
        <div>
        <h2>Add Grocery Item:</h2>
        <form onSubmit={handleSubmit}>
            <input
                name="product"                  // Must match corresponding key
                placeholder="Product"
                value={newGrocery.product || ""}
                onChange={handleChange}
            />
            {!newGrocery.product ? null : ( // Only display Category textarea if a product is entered
            <>
                <select
                    name="category"
//                    selected=
                    value={newGrocery.category as string || props.categories[0]}
                    onChange={handleChange}
                >
                    {props.categories.map( (category:string) => {
                        return (<option value={category}>{category}</option>)
                    })}
                </select>
            </>
            )}
            <div>
                <button
                    type="submit"
                    disabled={!newGrocery.category}
                >
                    Add To List
                </button>
            </div>
        </form>
        </div>
    );
}