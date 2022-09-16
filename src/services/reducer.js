export default function reducer (state, action) {
    switch (action.type) {
      case 'fetch':
        return {
          ...state,
          data: action.payload
        }
      
      case 'burger_constractor':
        return{
          ...state,
          cunstructor: action.payload
        }
  
      case 'get_order_number':
        return{
          ...state,
          order_number: action.payload
        }
  
      default:
        return state;
        
    }
  }