import { Container,Row,Col } from "react-bootstrap";
import logo from '../images/logo.jpg';
import Productcards from "../componets/Productcards";
import Topnavbar from "../componets/Topnavbar";

function Kids(){
    const products =[{"id":1,"title":"Tartan Fashion Kids","price":"$109.95","description":"Tartan style for kids clothing. The Wow Style","category":"kid's clothing","image":"https://i1.wp.com/charmposh.com/wp-content/uploads/2015/09/Dolce-Gabbana-Plaid-Tartan-Feature-CharmPosh-731x1024.jpg?resize=500%2C700","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Sweatshirts with casual pants.Style to explore","price":22.3,"description":"Caramel creates luxury childrenswear. Its clothes are underpinned by understated sophistication, a refined simplicity, functionality and an extraordinary attention to detail.","category":"kid's clothing","image":"https://i.pinimg.com/originals/09/f4/fe/09f4fe6c1137348e094b24c1fd7d9335.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Casual Tshirt with Denim Pants","price":55.99,"description":"Casual kids tshirt with denim. Style your kid with the best collections of hipster.","category":"Kid's clothing","image":"https://i.pinimg.com/originals/00/17/1f/00171fb0c6f8d5990577cca7832d44f6.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":".","category":"Kid's clothing","image":"https://i5.walmartimages.com/asr/56ca1ae0-6118-44ce-8996-e3e293e7ae22_1.590ceb85d1df43f05f359c4972a7c66d.jpeg","rating":{"rate":2.1,"count":430}},{"id":5,"title":"Traditional Wear.Layered Garara","price":"$ 80","description":"Kids clothing Traditional wear garara cashmere silk blending high quality suit.","category":"Traditional Wear","image":"https://i.pinimg.com/736x/d4/1e/69/d41e69183a4bcbd457c52fa74ab37e99.jpg","rating":{"rate":4.6,"count":400}},{"id":6,"title":"Brown Furry Shoes","price":"$ 90","description":"Kids brown boots with furry look.Fit for 5-6 years kids.","category":"Kids Boots","image":"https://th.bing.com/th/id/OIP.f5U1Bgl3swVGGvUjGTVvggHaE7?w=289&h=192&c=7&r=0&o=5&pid=1.7","rating":{"rate":3.9,"count":70}},{"id":7,"title":"Lavendar Colored Traditional Wear","price":"$ 110","description":"Lavendar Colored Traditional Wear girls collections.Kids clothing Traditional wear garara cashmere silk blending high quality suit.","category":"Coat","image":"https://th.bing.com/th/id/OIP.W6u5Cvbelcgkrky9V8DjeQHaLH?pid=ImgDet&rs=1","rating":{"rate":3.9,"count":400}},{"id":8,"title":"Western Summer Collection Of Girls","price":"$ 50","description":"Western summer collection by ZARA for girls and at affordable price","category":"Western Wear","image":"https://th.bing.com/th/id/OIP.F4GevxNmktZ3aeEWh1tSsAHaKw?pid=ImgDet&rs=1","rating":{"rate":1.9,"count":100}},{"id":9,"title":"Winter Jacket","price":"$ 64","description":"Peppry Kids Coat easy to cope the winter","category":"Jacket","image":"https://i.pinimg.com/originals/12/04/08/120408b09afe336af36549198f662cb7.jpg","rating":{"rate":3.3,"count":203}},{"id":10,"title":"Winter Collection of Frock","price":"$109.95","description":"Dloce and Gabbana collection of winter wear for girls.","category":"Winter Wear","image":"https://th.bing.com/th/id/R.dc031367c9f9ff1751a24f04d739cb5c?rik=YXHwkyKmZWrkkQ&riu=http%3a%2f%2finstylefashion-wpengine.netdna-ssl.com%2fwp-content%2fuploads%2f2013%2f08%2fdolce-and-gabbana-fw-2014-kids-collection-11.jpg&ehk=E6PbZ6dgOOL%2bdy8LXCnlzcPtQx7CDVNUFHLXGDFSYN8%3d&risl=&pid=ImgRaw&r=0","rating":{"rate":2.9,"count":470}}]
    return (
        <>
        <Topnavbar Logo={logo}/>
        <Container fluid className="Kids" >
           
                <h2 className="p-5">Welcome To Kids Collection</h2>
                <Container className="KidsUpperdiv">
          <Row>
            <Col xs>
                <img src="https://th.bing.com/th?q=Kids+Shoes+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img>
                <p>Shoes</p>
            </Col>
            <Col xs={{ order: 12 }}>
                <img src="https://th.bing.com/th/id/OIP.yq8Fv3QkRT93rXlnhMq5vgHaHa?pid=ImgDet&rs=1"></img>
                <p>Shirt</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://c.pxhere.com/photos/8e/84/childhood_paraguay_latin_america_dress_up_ostume_girl_skirt_red_traditional-1363360.jpg!d"></img>
                <p>Traditional Wear</p>
            </Col>
            <Col xs={{ order: 1 }}>
                <img src="https://www.craftinessisnotoptional.com/wp-content/uploads/2019/09/MZ7A3756.jpg"></img>
                <p>Frocks</p>
            </Col>
          </Row>
        </Container>
        <Container className="p-2">
                <Row> {
                      
                        products.map((pro)=>
                            <Productcards img={pro.image} title={pro.title} price={pro.price} rating={pro.rating.rate}/>
                        )
                        
                    }
                    </Row>
                </Container>
        </Container>
       
        </>
    )

}
export default Kids;