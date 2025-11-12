import { useContext } from "react";
import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import { Menucontext } from "./App";

function Menu() {

    const {itemarray:menuItems}= useContext(Menucontext)
    console.log(menuItems)


    const [type, setType] = useState("");
    const [choice, setChoice] = useState("");
    const [search, setSearch] = useState("");

    function getType(event) {
        setType(event.target.value);
    }
    //  console.log(choice)
    function getItem(event) {
        setSearch("");
        setChoice(event.target.value);
    }

    function searchInput(event) {
        setSearch(event.target.value.toLowerCase());
    }

    function items() {
        const filtered = menuItems.filter((ele) => {
            const matchesType = type ? ele.type === type : true;
            const matchesChoice = choice ? ele.name === choice : true;
            const matchesSearch = search ? ele.name.toLowerCase().includes(search) : true;

            return matchesType && matchesChoice && matchesSearch;
        });

        return filtered.map((ele) => <MenuCard key={ele.id} {...ele} />);
    }

    return (
        <>
            <div id="menu" className="container-menu">
                <div className="filter">
                    <h1>Menu</h1>
                    <select value={type} className="fixed-dropdown" id="type" onChange={getType}>
                        <option value="">All</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>

                    <select value={choice} className="fixed-dropdown" onChange={getItem}>
                        <option value="">All</option>
                        {menuItems
                            .filter((ele) => (type ? ele.type === type : true))
                            .map((ele) => (
                                <option key={ele.id} value={ele.name}>
                                    {ele.name}
                                </option>
                            ))}
                    </select>
                    <input value={search} type="text" id="input" onChange={searchInput} placeholder="Search items..." />
                </div>
                <div className="item-cards">
                    {items()}
                </div>
            </div>
        </>
    );
}

// function Select({ name }) {
//     // console.log(name)
//     return (
//         <option value={name}>{name}</option>
//     )
// }

export default Menu;
