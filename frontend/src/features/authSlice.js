import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/loginUser", async(user, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/auth/login', {
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch(err) {
        if(err.response) {
            const message = err.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getWhoami = createAsyncThunk("user/getWhoami", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/auth/whoami');
        return response.data;
    } catch(err) {
        if(err.response) {
            const message = err.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOut = createAsyncThunk("user/LogOut", async() => {
    await axios.delete('http://localhost:5000/auth/logout');
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        //login
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //get whoami

        builder.addCase(getWhoami.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getWhoami.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(getWhoami.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
});


export const {reset} = authSlice.actions;
export default authSlice.reducer;