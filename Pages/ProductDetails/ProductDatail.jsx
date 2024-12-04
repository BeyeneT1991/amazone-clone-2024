import React, { useEffect, useState } from "react";
import classes from './ProductDetail.module.css'; 
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader"; 

function ProductDetail() {
    const { ProductId } = useParams();
    const [Product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // Added error state
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${ProductUrl}/Product/${ProductId}`)
            .then((res) => {
                setProduct(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to load product details. Please try again.");
                setIsLoading(false);
            });
    }, []);

    return (
    <LayOut>
        {isLoading ? (
            <Loader />
        ) : error ? (
            <p className={classes.errorMessage}>{error}</p>
        ) : (
            <div>
                <ProductCard
                    product={Product}
                    flex={true}
                    renderDesc={true}
                    renderAdd={true}
                />
            </div>
        )}
    </LayOut>
);
}

export default ProductDetail;









// import React, { useEffect, useState } from "react";
// import Product from './ProductDetail.module.css'; // Correct relative path
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { ProductUrl } from "../../API/endPoints";
// import ProductCard from "../../Components/Product/ProductCard";



// function ProductDetail() {
//     const { ProductId } = useParams
//     const { Product, setProduct } = useState({})
//    useEffect(() => {
//     axios.get(`${ProductUrl}/Products/${ProductId}`) // Fixed axios.get syntax
//       .then((res) => {
//           setProduct(res.data);
//           setIsLoading(false)
//       }).catch((err) => {
//           console.log(err)
//           setIsLoading(false)
        
//       });
//   }, []);
//     return (
//         <LayOut>
//           { isLoading?(<Loader/>): (<ProductCard
//                 Product={Product}
//                 flex=(true)
//                 renderDesc={true}
//             />
//         )}
//         </LayOut>
    
//   );
// }

// export default ProductDetail;




// import React, { useEffect, useState } from "react";
// import Product from './ProductDetail.module.css'; // Correct relative path
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { ProductUrl } from "../../API/endPoints";
// import ProductCard from "../../Components/Product/ProductCard";

// function ProductDetail() {
//     const { ProductId } = useParams(); // Added missing parentheses for `useParams`
//     const [Product, setProduct] = useState({}); // Fixed state initialization and destructuring
//     const [isLoading, setIsLoading] = useState(true); // Added `isLoading` state

//     useEffect(() => {
//         axios.get(`${ProductUrl}/Products/${ProductId}`) // Fixed axios.get syntax
//             .then((res) => {
//                 setProduct(res.data);
//                 setIsLoading(false); // Set loading to false after data is fetched
//             })
//             .catch((err) => {
//                 console.error(err); // Changed to `console.error` for better error logging
//                 setIsLoading(false); // Ensure loading is stopped even on error
//             });
//     }, [ProductId]); // Added `ProductId` as a dependency for useEffect

//     return (
//         <LayOut>
//             {/* {isLoading ? (
//                 <Loader /> // Renders a loader while data is being fetched */}
//             ) : (
//                 <ProductCard
//                     product={Product} // Changed prop name to `product` to match ProductCard
//                     flex={true} // Fixed `flex` prop syntax (use curly braces, not parentheses)
//                     renderDesc={true}
//                 />
//             )}
//         </LayOut>
//     );
// }

// export default ProductDetail;




