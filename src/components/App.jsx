
// import './components/mystyle.css'
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Menu from './Menu.jsx';
import AddItems from './AddItems.jsx';
import Clock from './Clock.jsx';
import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Menucontext = createContext();

export default function App() {


    let menuItems = [
        {
            id: 1,
            name: "Mutton Rogan Josh",
            price: 340,
            type: "Non-Veg",
            description:
                "Tender mutton pieces slow-cooked in rich Kashmiri gravy infused with aromatic spices.",
            img: "src/assets/images/mutton rogan josh.jpg"
        },
        {
            id: 2,
            name: "Palak Paneer",
            price: 230,
            type: "Veg",
            description:
                "Creamy spinach gravy with cubes of paneer, perfectly balanced with mild spices.",
            img: "src/assets/images/Palak-Paneer.jpg"
        },
        {
            id: 3,
            name: "Chicken 65",
            price: 240,
            type: "Non-Veg",
            description:
                "Crispy, spicy deep-fried chicken bites garnished with curry leaves and green chilies.",
            img: "src/assets/images/chicken 65.webp"
        },
        {
            id: 4,
            name: "Paneer Tikka",
            price: 249,
            type: "Veg",
            description:
                "Chunks of cottage cheese marinated in spiced yogurt and grilled to perfection.",
            img: "src/assets/images/paneer tikka.jpeg"
        },
        {
            id: 5,
            name: "Butter Garlic Prawns",
            price: 330,
            type: "Non-Veg",
            description:
                "Succulent prawns tossed in buttery garlic sauce with a hint of herbs and lemon.",
            img: "src/assets/images/butter garlic prawn.jpeg"
        },
        {
            id: 6,
            name: "Gulab Jamun",
            price: 99,
            type: "Veg",
            description:
                "Soft milk dumplings soaked in warm, sweet syrup — a perfect Indian dessert.",
            img: "src/assets/images/gulab jamun.webp"
        },
        {
            id: 7,
            name: "Chicken Kebab",
            price: 250,
            type: "Non-Veg",
            description:
                "Spiced minced chicken skewered and grilled over charcoal for a smoky flavor.",
            img: "src/assets/images/chicken kebab.jpg"
        },
        {
            id: 8,
            name: "Masala Dosa",
            price: 120,
            type: "Veg",
            description:
                "Crispy dosa stuffed with spicy potato filling, served with chutney and sambar.",
            img: "src/assets/images/masala dosa.jpg"
        },
        {
            id: 9,
            name: "Fish Curry",
            price: 290,
            type: "Non-Veg",
            description:
                "Fresh fish simmered in a tangy coconut and tamarind-based curry with South Indian spices.",
            img: "src/assets/images/fish curry.webp"
        },
        {
            id: 10,
            name: "Chole Bhature",
            price: 150,
            type: "Veg",
            description:
                "Spicy chickpea curry served with deep-fried, fluffy bhature — a North Indian classic.",
            img: "src/assets/images/chole bhature.jpg"
        },
        {
            id: 11,
            name: "Tandoori Chicken",
            price: 299,
            type: "Non-Veg",
            description:
                "Whole chicken marinated in yogurt and spices, roasted in a clay oven for rich flavor.",
            img: "src/assets/images/tandoori chicken.avif"
        },
        {
            id: 12,
            name: "Chicken Biryani",
            price: 279,
            type: "Non-Veg",
            description:
                "Aromatic basmati rice layered with flavorful chicken and signature spices.",
            img: "src/assets/images/chicken briyani.webp"
        },
        {
            id: 13,
            name: "Tandoori Roti",
            price: 40,
            type: "Veg",
            description:
                "Traditional whole wheat bread baked in a clay oven for an authentic flavor.",
            img: "src/assets/images/tandoori roti.jpg"
        },
        {
            id: 14,
            name: "Butter Chicken",
            price: 299,
            type: "Non-Veg",
            description:
                "Tender chicken simmered in a rich, creamy tomato gravy with aromatic spices.",
            img: "src/assets/images/butterchicken.jpg"
        },
        {
            id: 15,
            name: "Grilled Chicken",
            price: 280,
            type: "Non-Veg",
            description:
                "Juicy chicken marinated with herbs and spices, grilled to smoky perfection.",
            img: "src/assets/images/grilled chicken.jpg"
        },
        {
            id: 16,
            name: "Mango Lassi",
            price: 80,
            type: "Veg",
            description:
                "Refreshing yogurt-based drink blended with ripe mangoes — smooth and creamy.",
            img: "src/assets/images/mango lassi.jpeg"
        },
        {
            id: 17,
            name: "Egg Curry",
            price: 180,
            type: "Non-Veg",
            description:
                "Boiled eggs cooked in a flavorful tomato-onion gravy with Indian spices.",
            img: "src/assets/images/egg curry.jpg"
        },
        {
            id: 18,
            name: "Mushroom Briyani",
            price: 219,
            type: "Veg",
            description:
                "Fragrant basmati rice cooked with garden-fresh, mushrooms, vegetables and exotic spices.",
            img: "src/assets/images/mushroom briyani.jpg"
        },
        {
            id: 19,
            name: "Chicken Tikka",
            price: 260,
            type: "Non-Veg",
            description:
                "Boneless chicken marinated in spiced yogurt and grilled in a traditional tandoor.",
            img: "src/assets/images/chicken tikka.jpeg"
        },
        {
            id: 20,
            name: "Prawn Curry",
            price: 310,
            type: "Non-Veg",
            description:
                "Juicy prawns cooked in a spicy coconut-based curry bursting with coastal flavors.",
            img: "src/assets/images/prawn curry.jpg"
        },
        {
            id: 21,
            name: "Mutton Biryani",
            price: 360,
            type: "Non-Veg",
            description:
                "Fragrant basmati rice layered with succulent mutton pieces and aromatic spices.",
            img: "src/assets/images/mutton biryani.jpg"
        }
    ];

    const [itemarray, setItemArray] = useState(menuItems);

    function additem(newitem) {
        setItemArray((prev) => {
            return [...prev, newitem]
        })
    }


    console.log("rendered")

    // const [page, setPage] = useState("home");

    // function handlehome(input) {
    //     setPage(input);
    //     console.log(input)
    // }

    // function display() {
    //     if (page === "home") return <Hero />
    //     else if (page === "menu") return <Menu />
    //     else if (page === "additems") return <AddItems />
    // }
    return (
        <Menucontext.Provider value={{ itemarray, additem }}>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Hero />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/additems' element={<AddItems />} />
                </Routes>
            </BrowserRouter>
        </Menucontext.Provider>
    );
}

{/* <nav className="navbar">
                <a onClick={() => handlehome("home")} href="#home" className="anchor">Home</a>
                <a onClick={() => handlehome("menu")} href="#menu" className="anchor">Menu</a>
                <a onClick={() => handlehome("additems")} href="#additems" className="anchor">Add Item</a>
                <Clock />
            </nav> */}
{/* {display()} */ }