export const productReducer= (state={cart:[],cart:[]}, action)=>{
    switch(action.type){
        case "CART":
            return{
                ...state,
                cart:[...state.product,action.payload]
            }
            break;
            default:
                return state;
            }
            return state;
    }
    
