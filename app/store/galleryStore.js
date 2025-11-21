import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const galleryStore = create((set, get) => ({
  galleryItems: [],
  isGettingGalleryItems: false,
  fetchGalleryItems: async () => {
    set({ isGettingGalleryItems: true });
    try {
      const response = await axiosInstance.get("/get-gallery");
      set({ galleryItems: response.data });
      console.log("Gallery Items:", get().galleryItems);
    } catch (error) {
      console.error(error);
    } finally {
      set({ isGettingGalleryItems: false });
    }
  },
}));
