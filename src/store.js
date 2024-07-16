import { createStore } from "redux";

const NEXT_IMAGE = 'NEXT_IMAGE';
const PREV_IMAGE = 'PREV_IMAGE';

export const nextImage =()=>({type:NEXT_IMAGE});
export const prevImage =()=>({type:PREV_IMAGE});

const initialState = {
    currentIndex:0,
    images:[
        'https://plus.unsplash.com/premium_photo-1676926151304-3fb37939e4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2NpZW5jZSUyMGZpY3Rpb258ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZSUyMGZpY3Rpb258ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1635698054698-1eaf72c5a894?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaWVuY2UlMjBmaWN0aW9ufGVufDB8fDB8fHww',
        'https://media.istockphoto.com/id/2149039471/photo/scientist-microscope-and-analysis-in-lab-for-healthcare-innovation-and-development-in-stem.webp?b=1&s=170667a&w=0&k=20&c=POGrPQfaAGJcg_GIlinP-EXc4c2-3hMIUkGp8W7BG8s=',
        'https://media.istockphoto.com/id/1778232177/photo/robot-hands-study-3d-human-dna-helix-for-artificial-intelligence-and-science-field.webp?b=1&s=170667a&w=0&k=20&c=XwQoNbryXZoOHVQ5Rj9rrhZLQ7t-i0M82CAq4ythT-A=',
    ],
};

const carouselReducer = (state=initialState,action)=>{
         switch(action.type){
            case NEXT_IMAGE:
                return{
                    ...state,
                    currentIndex:(state.currentIndex +1)%state.images.length,
                }
                case PREV_IMAGE:
                    return{
                        ...state,
                        currentIndex:(state.currentIndex - 1 + state.images.length)%state.images.length,
                    }
                    default:
                        return state;
         }
};

const store = createStore(carouselReducer);

export default store;