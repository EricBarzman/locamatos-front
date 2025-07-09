import { create } from "zustand";

type UserStore = {
  logged: boolean;
  token: string;
  uid: string;
  username: string;
  login: (str: string) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  logged: false,
  token: "",
  uid: "",
  username: "test",
  login: (str: string) => {
    set({
      token: str,
      logged: true
    });
  },
  logout: () => {
    set({
      uid: '',
      token: "",
      logged: false,
      username: "",
    })
  }
}));

export default useUserStore;