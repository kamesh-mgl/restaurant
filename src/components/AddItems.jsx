import { useContext } from "react";
import { Menucontext } from "./App";

export default function AddItems() {

    const { itemarray, additem } = useContext(Menucontext);

    function submit() {

        const item_id = itemarray.length + 1;
        const item_name = document.getElementById('itemName')
        const item_price = document.getElementById('itemPrice')
        const item_type = document.getElementById('itemType')
        const item_description = document.getElementById('itemDescription')
        const item_img = document.getElementById('itemImage')

        let flag = true;

        const newitem = {
            id: item_id,
            name: item_name.value === "" ? flag = false: item_name.value,
            price: item_price.value === "" ?  flag = false : item_price.value,
            type: item_type.value,
            description: item_description.value === "" ?  flag = false : item_description.value,
            img: item_img.value === "" ?  flag = false : item_img.value
        }
        console.log(newitem);
        console.log(itemarray.length)

        if(flag===false)
        {
            window.alert("Enter all the details")
        }

        if(flag)
        {
            additem(newitem);
            flag = true;
            window.alert("Item added");
            item_name.value = "";
            item_price.value = "";
            item_description.value = "";
            item_img.value = "";
        }
        
        console.log(itemarray)

    }
    return (
        <div id="additems" className="container">
            <h1>Add Items to the Menu</h1>
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="itemName">Item Name</label>
                    <input type="text" id="itemName" className="input-tag" placeholder="Enter the item name" />
                </div>

                <div className="input-group">
                    <label htmlFor="itemPrice">Price</label>
                    <input type="text" id="itemPrice" className="input-tag" placeholder="Enter the item price" />
                </div>

                <div className="input-group">
                    <label htmlFor="itemType">Type</label>
                    <select className="fixed-dropdown" id="itemType">
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="itemImage">Image URL</label>
                    <input type="text" id="itemImage" className="input-tag" placeholder="Enter the item image" />
                </div>

                <div className="input-group textarea-group">
                    <label htmlFor="itemDescription">Description</label>
                    <textarea id="itemDescription" placeholder="Enter the item description" ></textarea>
                </div>
                <button onClick={submit} type="submit" className="add-btn">Add</button>
            </div>
        </div>

    )
}
