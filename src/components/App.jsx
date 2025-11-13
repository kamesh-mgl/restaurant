
// import './components/mystyle.css'
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Menu from './Menu.jsx';
import AddItems from './AddItems.jsx';
import Clock from './Clock.jsx';
import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"


import muttonRoganJosh from "../assets/images/mutton rogan josh.jpg";
import palakPaneer from "../assets/images/Palak-Paneer.jpg";
import chicken65 from "../assets/images/chicken 65.webp";
import paneerTikka from "../assets/images/paneer tikka.jpeg";
import butterGarlicPrawn from "../assets/images/butter garlic prawn.jpeg";
import gulabJamun from "../assets/images/gulab jamun.webp";
import chickenKebab from "../assets/images/chicken kebab.jpg";
import masalaDosa from "../assets/images/masala dosa.jpg";
import fishCurry from "../assets/images/fish curry.webp";
import choleBhature from "../assets/images/chole bhature.jpg";
import tandooriChicken from "../assets/images/tandoori chicken.avif";
import chickenBiryani from "../assets/images/chicken briyani.webp";
import tandooriRoti from "../assets/images/tandoori roti.jpg";
import butterChicken from "../assets/images/butterchicken.jpg";
import grilledChicken from "../assets/images/grilled chicken.jpg";
import mangoLassi from "../assets/images/mango lassi.jpeg";
import eggCurry from "../assets/images/egg curry.jpg";
import mushroomBiryani from "../assets/images/mushroom briyani.jpg";
import chickenTikka from "../assets/images/chicken tikka.jpeg";
import prawnCurry from "../assets/images/prawn curry.jpg";
import muttonBiryani from "../assets/images/mutton biryani.jpg";


export const Menucontext = createContext();

export default function App() {


    let menuItems = [
        
        {
            id: 1,
            name: "Mutton Rogan Josh",
            price: 340,
            type: "Non-Veg",
            description: "Tender mutton pieces slow-cooked in rich Kashmiri gravy infused with aromatic spices.",
            img: muttonRoganJosh
        },
        {
            id: 2,
            name: "Palak Paneer",
            price: 230,
            type: "Veg",
            description: "Creamy spinach gravy with cubes of paneer, perfectly balanced with mild spices.",
            img: palakPaneer
        },
        {
            id: 3,
            name: "Chicken 65",
            price: 240,
            type: "Non-Veg",
            description: "Crispy, spicy deep-fried chicken bites garnished with curry leaves and green chilies.",
            img: chicken65
        },
        {
            id: 4,
            name: "Paneer Tikka",
            price: 249,
            type: "Veg",
            description: "Chunks of cottage cheese marinated in spiced yogurt and grilled to perfection.",
            img: paneerTikka
        },
        {
            id: 5,
            name: "Butter Garlic Prawns",
            price: 330,
            type: "Non-Veg",
            description: "Succulent prawns tossed in buttery garlic sauce with a hint of herbs and lemon.",
            img: butterGarlicPrawn
        },
        {
            id: 6,
            name: "Gulab Jamun",
            price: 99,
            type: "Veg",
            description: "Soft milk dumplings soaked in warm, sweet syrup — a perfect Indian dessert.",
            img: gulabJamun
        },
        {
            id: 7,
            name: "Chicken Kebab",
            price: 250,
            type: "Non-Veg",
            description: "Spiced minced chicken skewered and grilled over charcoal for a smoky flavor.",
            img: chickenKebab
        },
        {
            id: 8,
            name: "Masala Dosa",
            price: 120,
            type: "Veg",
            description: "Crispy dosa stuffed with spicy potato filling, served with chutney and sambar.",
            img: masalaDosa
        },
        {
            id: 9,
            name: "Fish Curry",
            price: 290,
            type: "Non-Veg",
            description: "Fresh fish simmered in a tangy coconut and tamarind-based curry with South Indian spices.",
            img: fishCurry
        },
        {
            id: 10,
            name: "Chole Bhature",
            price: 150,
            type: "Veg",
            description: "Spicy chickpea curry served with deep-fried, fluffy bhature — a North Indian classic.",
            img: choleBhature
        },
        {
            id: 11,
            name: "Tandoori Chicken",
            price: 299,
            type: "Non-Veg",
            description: "Whole chicken marinated in yogurt and spices, roasted in a clay oven for rich flavor.",
            img: tandooriChicken
        },
        {
            id: 12,
            name: "Chicken Biryani",
            price: 279,
            type: "Non-Veg",
            description: "Aromatic basmati rice layered with flavorful chicken and signature spices.",
            img: chickenBiryani
        },
        {
            id: 13,
            name: "Tandoori Roti",
            price: 40,
            type: "Veg",
            description: "Traditional whole wheat bread baked in a clay oven for an authentic flavor.",
            img: tandooriRoti
        },
        {
            id: 14,
            name: "Butter Chicken",
            price: 299,
            type: "Non-Veg",
            description: "Tender chicken simmered in a rich, creamy tomato gravy with aromatic spices.",
            img: butterChicken
        },
        {
            id: 15,
            name: "Grilled Chicken",
            price: 280,
            type: "Non-Veg",
            description: "Juicy chicken marinated with herbs and spices, grilled to smoky perfection.",
            img: grilledChicken
        },
        {
            id: 16,
            name: "Mango Lassi",
            price: 80,
            type: "Veg",
            description: "Refreshing yogurt-based drink blended with ripe mangoes — smooth and creamy.",
            img: mangoLassi
        },
        {
            id: 17,
            name: "Egg Curry",
            price: 180,
            type: "Non-Veg",
            description: "Boiled eggs cooked in a flavorful tomato-onion gravy with Indian spices.",
            img: eggCurry
        },
        {
            id: 18,
            name: "Mushroom Biryani",
            price: 219,
            type: "Veg",
            description: "Fragrant basmati rice cooked with garden-fresh mushrooms, vegetables, and exotic spices.",
            img: mushroomBiryani
        },
        {
            id: 19,
            name: "Chicken Tikka",
            price: 260,
            type: "Non-Veg",
            description: "Boneless chicken marinated in spiced yogurt and grilled in a traditional tandoor.",
            img: chickenTikka
        },
        {
            id: 20,
            name: "Prawn Curry",
            price: 310,
            type: "Non-Veg",
            description: "Juicy prawns cooked in a spicy coconut-based curry bursting with coastal flavors.",
            img: prawnCurry
        },
        {
            id: 21,
            name: "Mutton Biryani",
            price: 360,
            type: "Non-Veg",
            description: "Fragrant basmati rice layered with succulent mutton pieces and aromatic spices.",
            img: muttonBiryani
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