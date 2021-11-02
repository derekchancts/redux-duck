export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';


export const getUser = () => ({   // when we call "getUser" (ACTION), it will dispatch an action "GET_USER"
  type: GET_USER
})

export const setUser = (user) => ({
  type: SET_USER,
  user: user
})



const initialState = {
  user: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      // console.log(action)
      return {
        ...state,
        user: user
        // user: action.user
      }
     default:
       return state 
  }
} 


export default userReducer