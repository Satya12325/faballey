const initialState = {
  product: [],
  isLooding: true,

}

const appReducer = (state= initialState,{type,payload})=> {
  switch(type){
      case "GET_PRODUCT_REQUEST": {
          return {
            ...state,
            isLooding: true
          };
        }
      case "GET_PRODUCT" : {
          return {
              ...state,
              product : payload.product,
              isLooding: false
          }
      }
      case "ADD_TO_CART": {
          return {
              ...state,
              product : [...state.product, payload.product]
          }
      }

      

      default:
          return state;
  }
}

export {appReducer}