import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.jpg";
import Productcards from "../componets/Productcards";
import Topnavbar from "../componets/Topnavbar";
import FlipCard from "../componets/FlipCard";

function Men() {
  const products = [
    {
      id: 1,
      title: "Mens Casual Fashion",
      price: "$109.95",
      description:
        "Your perfect casual for everyday use and walks to the office. The Wow Style",
      category: "men's clothing",
      image:
        "https://th.bing.com/th/id/OIP.b--cRG3CBxmG51vYWPD23QHaLG?pid=ImgDet&rs=1",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Girls denim frock with flora prints",
      price: 15.99,
      description:
        "Girls collection.Its a casual denim dress with flora print which gives a cozzy summer look and also capable to waer in winters.",
      category: "Kid's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title: "khaki cashmere wool blaze.",
      price: "$ 80",
      description:
        "Men's clothing ez modern elegant business casual cashmere silk blending high quality suit.",
      category: "Business Shirt",
      image:
        "data:image/jpeg;base64,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",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Plaid Business Casual Pants",
      price: "$ 90",
      description:
        "2018 Plaid Business Casual Pants Men Cotton Polyester Autumn Trousers Soft Breathable Black Grey Straight Male Pant Size 28-38.",
      category: "Casual Pants",
      image:
        "https://th.bing.com/th/id/OIP.aqQQIPhh4WNbzuCRTJLx8wHaHa?pid=ImgDet&rs=1",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "Winter Casual Coat",
      price: "$ 110",
      description:
        "Winter coat casual can wear everywhere around stylish to flaunt",
      category: "Coat",
      image:
        "https://th.bing.com/th/id/OIP.wzz6VQR4jN2XvwsghbCZBgHaLG?pid=ImgDet&rs=1",
      rating: { rate: 3.9, count: 400 },
    },
    {
      id: 8,
      title: "Baggy Jeans Mens",
      price: "$ 50",
      description:
        "Baggy jeans easy and comfortable.Easy to wash and at affordable price",
      category: "Jeans",
      image:
        "https://th.bing.com/th/id/R.21b7975bd5daf85595cb9942ef41fb19?rik=P9k18%2bZBONBFtQ&riu=http%3a%2f%2fmenscraze.com%2fwp-content%2fuploads%2f2016%2f05%2fmens-jeans-fashion.jpg&ehk=%2bUiy1AoHX%2bnz%2fDSMRpv81Y%2f%2bKUPG%2bBSdKoicXdbNl8w%3d&risl=&pid=ImgRaw&r=0",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "Winter Coat",
      price: "$ 64",
      description: "Peppry Mens Coat easy to cope the winter",
      category: "Coat",
      image:
        "https://instaloverz.com/wp-content/uploads/2017/04/13.-Preppy-Men-Fashion-Ideas.jpg",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "Men's Boots",
      price: "$109.95",
      description: "Allen Copper Mens Brown Boots",
      category: "Boots",
      image:
        "https://th.bing.com/th/id/OIP.8Y1i13MzCCTXkWXPwvVtbQHaHa?pid=ImgDet&rs=1",
      rating: { rate: 2.9, count: 470 },
    },
  ];
  return (
    <>
      <Topnavbar Logo={logo} />
      <Container fluid className="Mens">
        <h2 className="p-5">Welcome To Mens Collection</h2>
        <Container className="MenUpperdiv">
          <Row>
            <Col xs>
                <img src="https://th.bing.com/th/id/R.215c7f92539b4b2c7084fda8c4364740?rik=jDqp0Q7zWEgXNQ&riu=http%3a%2f%2fwww.liveenhanced.com%2fwp-content%2fuploads%2f2018%2f03%2fCasual-Shoes-for-Men-1.jpg&ehk=1Ji%2fMXUP9scxqJ9yfivoAe4u3qp8Qp47TI3u8nb2tbo%3d&risl=&pid=ImgRaw&r=0"></img>
                <p>Shoes</p>
            </Col>
            <Col xs={{ order: 12 }}>
                <img src="https://img1.junaroad.com/uiproducts/13989269/zoom_1-1502361440.jpg"></img>
                <p>Shirt</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://th.bing.com/th/id/OIP.iqZ5TSKs6JW7oV4OhxDq-QHaJ4?pid=ImgDet&rs=1"></img>
                <p>Coat</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://instaloverz.com/wp-content/uploads/2017/07/18-Streetstyle-Casual-Outfit-For-Men.jpg"></img>
                <p>Pants</p>
            </Col>
          </Row>
        </Container>
        {/* <FlipCard/> */}
        <Container className="p-2">
          <Row>
            {" "}
            {products.map((pro) => (
              <Productcards
                img={pro.image}
                title={pro.title}
                price={pro.price}
                rating={pro.rating.rate}
              />
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Men;
