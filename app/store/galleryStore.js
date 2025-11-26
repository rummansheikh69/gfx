import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const galleryStore = create((set, get) => ({
  galleryItems: [],
  isGettingGalleryItems: false,
  project: null,
  isGettinghProjectForView: false,
  fetchGalleryItems: async () => {
    set({ isGettingGalleryItems: true });
    try {
      const response = await axiosInstance.get("/gallery/all-projects");
      set({ galleryItems: response.data });
      console.log("Gallery Items:", get().galleryItems);
    } catch (error) {
      console.error(error);
    } finally {
      set({ isGettingGalleryItems: false });
    }
  },
  fetchProjectForView: async (id) => {
    set({ isGettinghProjectForView: true });
    try {
      const response = await axiosInstance.get(
        `/gallery/project-for-view/${id}`
      );
      set({ project: response.data });
      console.log("Gallery Items:", get().project);
    } catch (error) {
      console.error(error);
    } finally {
      set({ isGettinghProjectForView: false });
    }
  },
}));
