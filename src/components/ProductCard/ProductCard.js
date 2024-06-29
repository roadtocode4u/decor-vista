import "./ProductCard.css";
import productData from "../../data/ProductCardData";


function Product({ id, image, title, description, price, offer, rating, Likepic }) {
    return (
        <>
            <div className="card-container rounded ">
                <img src={image} alt="" className="card-image" />
                <h5 className="mt-3 text-center">{title}</h5>
                <p className="card-description text-start fs-6 px-2">
                    {description.substring(0, 70)}...</p>

                <h6 className="discout-offer-text px-2 text-center ">{offer}</h6>
                <div className="button-container">
                    <button className="card-button btn btn-outline-secondary mt-1 ml-2">Know More</button>
                </div>
                <img src={Likepic} alt="" className="like-image" />

            </div>




        </>
    );
}

function ProductCard() {
    return (
        <>
            <div  >
                {productData.map((card, i) => (
                    <Product
                        key={i}
                        id={card.id}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        offer={card.offer}
                        price={card.price}
                        rating={card.rating}
                        Likepic={card.Likepic}


                    />
                ))}
            </div>

        </>)
}

export default ProductCard;

