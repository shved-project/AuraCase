import {PaletteMode} from "@mui/material";
import {create} from "zustand";

interface ThemeState {
    mode: PaletteMode;
    toggleMode: () => void;
}

const useThemeStore = create<ThemeState>()((set) => ({
    mode: "light",
    toggleMode: () =>
        set((state) => ({
            mode: state.mode === "light" ? "dark" : "light",
        })),
}));

export default useThemeStore;
