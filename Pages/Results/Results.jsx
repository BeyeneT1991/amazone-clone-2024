// import React, { useState, useEffect } from 'react';
// import classes from './Results.module.css'
// import LayOut from '../../Components/LayOut/LayOut'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { productUrl } from '../../API/endPoints'
// import ProductCard from '../../Components/Product/ProductCard';

// function Results() {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams()
//   console.log(categoryName)
//   useEffect(() => {

//     axios.get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data)
//         console.log(res.data)
//       }).catch((err) => {
//         console.log(err)
//       })
     
//   }, [])
 
//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <P style={{ padding: "30px" }}>Category / {categoryName}</P>
//         <hr />
//         <div className={classes.products_container}>
//           {results?.map((product) => (
//             <ProductCard
//                 key={product.id}
//                 product={product}
//             />
//           ))}
          
//           </div>

//       </section>

//     </LayOut>
//   )
// }

// export default Results





import React, { useState, useEffect } from 'react';
import classes from '../Results/Results.module.css'
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductUrl } from '../../API/endPoints';
import ProductCard from '../../Components/Product/ProductCard';

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      axios
        .get(`${ProductUrl}/Products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category / {categoryName}</p>
        <hr />

        <div className={classes.products_container}>
          {results.length > 0 ? (
            results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
