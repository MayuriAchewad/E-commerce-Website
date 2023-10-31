export const productReducer= (state={product:[],cart:[]}, action)=>{
    switch(action.type){
        case "PRODUCTS":
            return{
                ...state,
                product:[...state.product,action.payload]
            }
            break;
            default:
                return state;
            }
            return state;
    }
    
