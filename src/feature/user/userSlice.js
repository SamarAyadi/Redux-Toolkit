import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        users: [
            { id: 1, name: "Rayen" },
            { id: 2, name: "Abdelhak" },
            { id: 3, name: "Mohamed" },
    ],
    loading: true
   
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            console.log(action)
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload )
         }
        },
    }
})

export const { deleteUser }  = userSlice.actions

export default userSlice.reducer