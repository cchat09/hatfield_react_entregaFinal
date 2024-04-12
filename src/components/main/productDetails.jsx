// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import products from '../../data/products'; 
// import "./productDetails.css"
// import Button from 'react-bootstrap/Button';
// import { useCart } from '../../context/cartContext'; 
// import Swal from 'sweetalert2';

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const product = products.find(product => product.id === parseInt(productId));
//   const navigate = useNavigate();
//   const { addToCart, cart } = useCart(); // Access addToCart function from cart context

//   const [quantity, setQuantity] = useState(1); // State to manage the quantity selected
//   const [addedToCartReminder, setAddedToCartReminder] = useState(false); // State to track if reminder message should be shown

//   useEffect(() => {
//     const isInCart = cart.some(item => item.id === parseInt(productId));
//     if (isInCart) {
//       setAddedToCartReminder(true);
//     }
//   }, [cart, productId]);

//   const handleQuantityChange = (event) => {
//     setQuantity(parseInt(event.target.value)); // Update quantity when the dropdown value changes
//   };

//   const handleClick = () => {
//     if (product) {
//       addToCart({ ...product, quantity }); // Add product to cart with selected quantity
//       // Go to cart or keep shopping message - Sweetalert
//       console.log(product.id, quantity);
//       Swal.fire({
//         title: `${quantity} ${product.name} has been added to your cart`,
//         html: `Go to checkout or continue browsing?<br>(You can update or remove items in checkout window.)`,
//         icon: "success",
//         showCancelButton: true,
//         confirmButtonText: "Ready to checkout",
//         cancelButtonText: "Keep shopping",
//         reverseButtons: true
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate(`/checkout`);
//         } else {
//           navigate("/");
//         }
//       });
//     }
//   };

//   return (
//     <>
//       {product && (
//         <div className="productDetail">
//           <h2>{product.name}</h2>
//           <img className="detailImage" src={product.image} alt={product.imageAlt} />
//           <h4>{product.countries.join(', ')}</h4>
//           <div className="detailOverview">
//             <h5>{product.duration}</h5>
//             <h5>€{product.price}</h5>
//           </div>
//           <p>{product.shortDescription}</p>
//           <p>{product.longDescription}</p>
//           <div className="detailButtonContainer">
//             <select className="quantityButton" value={quantity} onChange={handleQuantityChange}>
//               <option value={1}>1</option>
//               <option value={2}>2</option>
//               <option value={4}>4</option>
//               <option value={5}>5</option>
//               <option value={6}>6</option>
//               <option value={7}>7</option>
//               <option value={8}>8</option>
//             </select>
//             <Button variant="info" onClick={handleClick}>Add to cart</Button>
//           </div>
//           <h6>Tags: {product.continent}, {product.types.join(', ')}</h6>
//         </div>
//       )}
//       {/* Conditional rendering of reminder message */}
//       {addedToCartReminder && (
//         <h2 className='inCartMessage'>¡Product in your cart!</h2>
//       )}
//     </>
//   );
// }

// export default ProductDetail;






import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../data/products'; 
import "./productDetails.css"
import Button from 'react-bootstrap/Button';
import { useCart } from '../../context/cartContext'; 
import Swal from 'sweetalert2';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ProductDetail = () => {
  const { productId } = useParams();
  // const product = products.find(product => product.id === parseInt(productId));
  const navigate = useNavigate();
  const { addToCart, cart } = useCart(); // Access addToCart function from cart context

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State to manage the quantity selected
  const [addedToCartReminder, setAddedToCartReminder] = useState(false); // State to track if reminder message should be shown

  useEffect(() => {
    const fetchProductDetails = async () => {
      const db = getFirestore();
      const productRef = doc(db, 'products', productId);

      try {
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such doc!");
        }
      } catch (error) {
        console.error("Error getting prod doc:", error);
      }
    }

    fetchProductDetails();
  }, [productId]);

  useEffect(() => {
    if (product) {
      const isInCart = cart.some(item => item.id === productId);
      if (isInCart) {
        setAddedToCartReminder(true);
      }
    }
  }, [cart, product, productId]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); // Update quantity when the dropdown value changes
  };

  const handleClick = () => {
    if (product) {
      addToCart({ ...product, quantity }); // Add product to cart with selected quantity
      // Go to cart or keep shopping message - Sweetalert
      console.log(product.id, quantity);
      Swal.fire({
        title: `${quantity} ${product.name} has been added to your cart`,
        html: `Go to checkout or continue browsing?<br>(You can update or remove items in checkout window.)`,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Ready to checkout",
        cancelButtonText: "Keep shopping",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/checkout`);
        } else {
          navigate("/");
        }
      });
    }
  };

  const getContinentName = (number) => {
    switch (number) {
      case 1:
        return "Africa";
      case 2:
        return "The Americas";
      case 3:
        return "Asia";
      case 4:
        return "Europe";
      case 5:
        return "Oceania";
      default:
        return "Unknown Continent";
    }
  };
  
  const getTypeName = (number) => {
    switch (number) {
      case 1:
        return "Culture";
      case 2:
        return "Adventure";
      case 3:
        return "Romantic";
      case 4:
        return "Seasonal";
      case 5:
        return "Gourmet";
      default:
        return "Unknown Type";
    }
  };

  return (
    <>
      {product && (
        <div className="productDetail">
          <h2>{product.name}</h2>
          <img className="detailImage" src={product.image} alt={product.imageAlt} />
          <h4>{product.countries.join(', ')}</h4>
          <div className="detailOverview">
            <h5>{product.duration}</h5>
            <h5>€{product.price}</h5>
          </div>
          <p>{product.shortDescription}</p>
          <p>{product.longDescription}</p>
          <div className="detailButtonContainer">
            <select className="quantityButton" value={quantity} onChange={handleQuantityChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>
            <Button variant="info" onClick={handleClick}>Add to cart</Button>
          </div>
          <h6>Tags: {getContinentName(product.continent)}, {product.types.map(type => getTypeName(type)).join(', ')}</h6>
        </div>
      )}
      {/* Conditional rendering of reminder message */}
      {addedToCartReminder && (
        <h2 className='inCartMessage'>¡Product in your cart!</h2>
      )}
    </>
  );
}

export default ProductDetail;

