function MenuCard({id,name,price,type,description,img})
{
    return(

         <div className="menu-card">
                <div id={id} className="image">
                    <img src={img} alt={name} />
                </div>
                <h1>{name}</h1>
                <span>${price}/-</span>
                <p>{description}</p>
            </div>        
    )
}
export default MenuCard