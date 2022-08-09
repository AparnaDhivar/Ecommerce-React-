import { Container, Row,Col } from "react-bootstrap";
import logo from '../images/logo.jpg';
import Productcards from "../componets/Productcards";
import Topnavbar from "../componets/Topnavbar";

function Women() {
    const products = [{ "id": 1, "title": "Long Sleeves Red dress", "price": 109.95, "description": "Long Sleeve Women's Designer clothing.Best in town for sale.", "category": "Women Clothing", "image": "https://ae01.alicdn.com/kf/HTB19bF.bLBNTKJjy0Fdq6APpVXa1/Long-Sleeve-Dresses-Designer-Plus-Size-Sweater-Runway-2017-Women-Robe-Fall-Winter-Party-Club-Womens.jpg", "rating": { "rate": 3.9, "count": 120 } }, { "id": 2, "title": "Simple Womens Retro Hair Band", "price": 22.3, "description": "Hot Sale Vintage simple Retro Womens Elastic Hair Band", "category": "Hair Band", "image": "https://th.bing.com/th/id/OIP.SFKzrKuYmm_mXTEe8TeKzwHaHa?pid=ImgDet&rs=1", "rating": { "rate": 4.1, "count": 259 } }, { "id": 3, "title": "Denim Casual Sneakers for summers", "price": 55.99, "description": "Womens Fashion Sneakers Casual denims Canvas Shoe Star.Summer Casual Shoe", "category": "Women's Shoes", "image": "https://th.bing.com/th/id/OIP.-QN5PKlFsAbhZTnBIYSWJQHaHa?pid=ImgDet&rs=1", "rating": { "rate": 4.7, "count": 500 } }, { "id": 4, "title": "Red flared fusion cotton dress", "price": 15.99, "description": "Red Cotton Flared Fusion dress.Summer dress at affordable price", "category": "women's clothing", "image": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1000,height=1500,quality=75,format=auto,fit=cover,g=top/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/dresses1114ss20red-1.jpg", "rating": { "rate": 2.1, "count": 430 } }, { "id": 5, "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "price": 695, "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", "category": "jewelery", "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 4.6, "count": 400 } }, { "id": 6, "title": "Solid Gold Petite Micropave ", "price": 168, "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.", "category": "jewelery", "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 3.9, "count": 70 } }, { "id": 7, "title": "White Gold Plated Princess", "price": 9.99, "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...", "category": "jewelery", "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 3, "count": 400 } }, { "id": 8, "title": "Pierced Owl Rose Gold Plated Stainless Steel Double", "price": 10.99, "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel", "category": "jewelery", "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 1.9, "count": 100 } }, { "id": 9, "title": "Maroon colored scarf", "price": 64, "description": "Maroon colored women's layered scarf.Easy protection from sun and stylish to wear", "category": "Scarf", "image": "https://th.bing.com/th/id/OIP.JG7ASk3w7SQKzRubxLs5NQHaMS?pid=ImgDet&rs=1", "rating": { "rate": 3.3, "count": 203 } }, { "id": 10, "title": "Trendy Belt for women", "price": 109, "description": "New ZA spring style trendy belt for women Multicolored", "category": "Belt", "image": "https://ae01.alicdn.com/kf/HTB1V4J8a0fvK1RjSspfq6zzXFXaJ/Girlgo-ZA-2019-New-ZA-Spring-Style-Trendy-Belt-For-Women-Multicolored-Accessories-Body-Wedding-Party.jpg", "rating": { "rate": 2.9, "count": 470 } }]
    return (
        <>
            <Topnavbar Logo={logo} />
            <Container fluid className="Womens">
                <h2 className="p-5">Welcome To Women's Collection</h2>
                <Container className="WomenUpperdiv">
          <Row>
            <Col xs>
                <img src="https://th.bing.com/th/id/OIP.hf_muQOtJnHc9Sz-ToB0dwHaHa?pid=ImgDet&rs=1"></img>
                <p>Shoes</p>
            </Col>
            <Col xs={{ order: 12 }}>
                <img src="https://th.bing.com/th/id/OIP.XbDIj4fBZf7j6Rgar6JmAgHaJ4?pid=ImgDet&rs=1"></img>
                <p>Shirt</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://i5.walmartimages.com/asr/2f35f792-8a47-438e-814a-7414a51a0dd0_1.2b7a168385503ac94d51049b91f31df7.jpeg"></img>
                <p>Coat</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://i.pinimg.com/originals/11/db/ad/11dbadfd06bb3c823d942a82392741f4.jpg"></img>
                <p>Frocks</p>
            </Col>
          </Row>
        </Container>
                <Container className="p-2">
                    <Row> {
                        products.map((pro) =>
                            <Productcards img={pro.image} title={pro.title} price={pro.price} rating={pro.rating.rate} />
                        )
                    }
                    </Row>
                </Container>
            </Container>

        </>
    )

}
export default Women;