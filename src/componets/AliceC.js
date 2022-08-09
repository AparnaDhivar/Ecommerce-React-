import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';


function AliceC(){
    const handleDragStart = (e) => e.preventDefault();

   const items = [
    <div className='AliceCCard'>
      <img src= "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style={{"height":"60%","width":"60%"}} onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/product`${id}`">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"</Link>                                                                    </b><br/>
      price: 109.95</p>
    </div>,

   <div className='AliceCCard'>
      <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" style={{"height":"60%","width":"60%"}}  onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/product`${id}`">"Mens Casual Premium Slim Fit T-Shirts"</Link></b><br/>
      price: 22.3</p>                                                                                    
    </div>,

<div className='AliceCCard'>
      <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"  style={{"height":"60%","width":"60%"}}  onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/products`${id}`"> "Mens Cotton Jacket"</Link></b><br/>
      price: 55.99</p>
    </div>,
 
 <div className='AliceCCard'>
      <img src= "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" style={{height:"60%",width:"60%"}} onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/products`${id}`">"Mens Casual Slim Fit"</Link></b><br/>
      price: 15.99,</p>
    </div>,
  

  <div className='AliceCCard'>
      <img src= "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" style={{"height":"60%",width:"60%"}}  onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/products`${id}`">John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"</Link></b><br/>
      price: 695</p>
    </div>,
 
 <div className='AliceCCard'>
      <img src= "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"  style={{height:"60%",width:"60%"}}  onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/products`${id}`">Solid Gold Petite Micropave"</Link></b><br/>
      price: 168</p>
    </div>,
  
  <div className='AliceCCard'>
       <img src= "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"  style={{height:"60%",width:"60%"}}  onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/products`${id}`">White Gold Plated Princess"</Link></b><br/>
      price: 9.99</p>
    </div>,
 
 <div className='AliceCCard'>
      <img src=  "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"  style={{height:"60%",width:"60%"}}  onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/products`${id}`">Pierced Owl Rose Gold Plated Stainless Steel Double"</Link></b><br/>
      price: 10.99</p>
    </div>,
  
  <div className='AliceCCard'>
      <img src=  "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"  style={{height:"60%",width:"60%"}}  onDragStart={handleDragStart} role="presentation" />
      <p><b><Link to="/products`${id}`">WD 2TB Elements Portable External Hard Drive - USB 3.0 "</Link></b><br/>
      price: 64</p>
    </div>,
 
 <div className='AliceCCard'>
     <img src=  "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"  style={{height:"60%",width:"60%"}}  onDragStart={handleDragStart} role="presentation" />
     <p><b><Link to="/products`${id}`">SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"</Link></b><br/>
     price: 109</p>
    </div>
 
];
const responsive = {
  0: { items: 1 },
  50: { items: 2 },
  100: { items: 3 },
  150: { items: 4 },
};




  return (
  <AliceCarousel 
      mouseTracking 
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"

  />
  
 );






}


export default AliceC;