import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
//import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
//import Dishdetail from './DishdetailComponent';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked')
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
    render() {
        const menu = this.props.dishes.map((dish) => { /* This is a prop that are provided from App.js 
            in the render() <MenuComponent dishes={}> */
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <Card onClick={() => this.onDishSelect(dish)}> */}
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                        </CardImgOverlay>
                    {/* </Card> */}
                </div>
            );
        });



        console.log('Menu component render is invoked')

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
{/* col-12 col-md-5 col-lg-5 mr-1 */}
                <div className="row">
                    <div className='col-sm-5'>
                        <Card className="">
                            {this.renderDish(this.state.selectedDish)}
                        </Card>
                    </div>
                    <div className=" col-sm-5">
                        <DishDetail selectedDish={this.state.selectedDish} dishes={this.props.dishes} superDish={this.renderDish(this.state.selectedDish)} />
                    </div>
                </div>
            </div>
        );
    }
}



// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dishes: [
//                 {
//                   id: 0,
//                   name:'Uthappizza',
//                   image: 'assets/images/uthappizza.png',
//                   category: 'mains',
//                   label:'Hot',
//                   price:'4.99',
//                   description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
//                {
//                   id: 1,
//                   name:'Zucchipakoda',
//                   image: 'assets/images/zucchipakoda.png',
//                   category: 'appetizer',
//                   label:'',
//                   price:'1.99',
//                   description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
//                {
//                   id: 2,
//                   name:'Vadonut',
//                   image: 'assets/images/vadonut.png',
//                   category: 'appetizer',
//                   label:'New',
//                   price:'1.99',
//                   description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
//                {
//                   id: 3,
//                   name:'ElaiCheese Cake',
//                   image: 'assets/images/elaicheesecake.png',
//                   category: 'dessert',
//                   label:'',
//                   price:'2.99',
//                   description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
//                ],
//         };
//     }

//     render() {
//         const menu = this.state.dishes.map((dish) => {
//             return (
//               <div key={dish.id} className="col-12 mt-5">
//                 <Media tag="li">
//                   <Media left middle>
//                       <Media object src={dish.image} alt={dish.name} />
//                   </Media>
//                   <Media body className="ml-5">
//                   <Media heading>{dish.name}</Media>
//                     <p>{dish.description}</p>
//                   </Media>
//                 </Media>
//               </div>
//             );
//         });

//         return (
//           <div className="container">
//             <div className="row">
//               <Media list>
//                   {menu}
//               </Media>
//             </div>
//           </div>
//         );
//     }
// }








export default Menu;