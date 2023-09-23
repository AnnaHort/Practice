import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchTasks.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },

  // reducers: {
  //   // Виконається в момент старту HTTP-запиту
  //   fetchingInProgress(state) {
  //     state.contacts.isLoading = true;
  //   },
  //   // Виконається якщо HTTP-запит завершився успішно
  //   fetchingSuccess(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   // Виконається якщо HTTP-запит завершився з помилкою
  //   fetchingError(state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  // },
});
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

