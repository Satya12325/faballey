export const getProduct = (product) => {
  return {
      type: "GET_PRODUCT",
      payload : {
          product: product
      }
  }
};
export const getProductRequest = () => {
  return {
    type: "GET_PRODUCT_REQUEST",
    payload: {
      isLoading: true
    }
  };
};

export const removeDetails = (id) => ({
  type: "REMOVE_DETAILS",
  payload: {
      id: id
  }
});

export const addToCart = ({id,title,model,price,image}) => {
      return {
        type: "ADD_TO_CART",
        payload: {
          title: title,
          image: image,
          price: price,
          model: model,
          id: id
        }
      }
}





// import axios from "axios";



// const getProduct = (product) => {
//     return {
//         type: "GET_PRODUCT",
//         payload : {
//             product: product
//         }
//     }
// };
//  const getProductRequest = () => {
//     return {
//       type: "GET_PRODUCT_REQUEST",
//       payload: {
//         isLoading: true
//       }
//     };
//   };

  
// const getProductFailure = (error) => {
//     return {
//       type: "GET_TODO_FAILURE",
//       payload: error
//     };
//   };



//   const getProducts = (payload) => (dispatch) => {
//     dispatch(getProductRequest());
//     return axios
//       .get(" http://localhost:3000/products")
//       .then((res) => {
//         dispatch(getProduct(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(getProductFailure(err));
//       });
//   };
  






  
//    const removeDetails = (id) => ({
//     type: "REMOVE_DETAILS",
//     payload: {
//         id: id
//     }
// });

//    const addToCart = ({id,title,model,price,image}) => {
//         return {
//           type: "ADD_TO_CART",
//           payload: {
//             title: title,
//             image: image,
//             price: price,
//             model: model,
//             id: id
//           }
//         }
//   }


//   export {getProducts}


// cart actions
