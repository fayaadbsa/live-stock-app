export const useAppStore = defineStore({
  id: "app-store",
  state: (): { data: any[] } => ({ data: [] }),
  actions: {
    updateData(newData: []) {
      this.data = [...newData];
    },
  },
});
