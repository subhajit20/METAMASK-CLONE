import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wallet,HDNodeWallet } from "ethers";

interface UserInterface {
  wallet: HDNodeWallet | null
}

let userState: UserInterface = {
  wallet: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    createAccount:(state,action: PayloadAction<UserInterface>) =>{
      state.wallet = action.payload.wallet;
    }
  },
});

export const { createAccount } = userSlice.actions;
export const selectUser = (state: RootState) => state.userReducer;
export default userSlice.reducer;