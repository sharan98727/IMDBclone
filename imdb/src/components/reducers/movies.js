import card1 from "../cardimages/card1.jpg";
import card2 from "../cardimages/card2.jpg";
import card3 from "../cardimages/card3.jpg";
import card4 from "../cardimages/card4.jpeg";
import card5 from "../cardimages/card5.jpg";
import card6 from "../cardimages/card6.jpg";


const initState = {
  items: [
      {id:1,title:'Paatal lok', rating:'7.5',img:card1},
      {id:2,title:'Joker', rating:'7.5',img:card2},
      {id:3,title:'Parasite', rating:'8.6',img:card3},
      {id:4,title:'The Last Dance', rating:'9.3',img:card4},
      {id:5,title:'1917', rating:'7.5',img:card5},
      {id:6,title:'Knives Out', rating:'7.9',img:card6}],
      
  Watchlist:[],
  data : []
  

}

const movies = (state=initState,action) =>
{
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      const Watchlist = [...state.Watchlist, action.payload.id];
      return {
        ...state,
        Watchlist
      }

      case 'SD' :
         return  {
           ...state,
           data: action.payload
         }
    default:
      return state;
  }
 
}

export default movies;