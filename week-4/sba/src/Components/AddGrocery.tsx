import GroceryItem from "./GroceryItem";

export default function AddGrocery(props:any) {

    const {products, groceries, handleCheck, handleSubmit} = props;

    return (
        <div>
            <h2>Add Grocery Item:</h2>
            <form onSubmit={handleSubmit}>
                {!products ? null :  // Only display products if they exist
                products.map( (product:string) => {
                    return (
                        <GroceryItem
                            product={product}
                            groceries={groceries}
                            handleCheck={handleCheck}
                        />
                    )
                })}
            </form>
        </div>
    );
}