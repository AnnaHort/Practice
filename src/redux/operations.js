import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://650c93b347af3fd22f67d0a8.mockapi.io';

export const fetchTasks = createAsyncThunk("contacts/fetchAll",
async () => {
  const response = await axios.get("/contacts/contacts");
  return response.data;
})

// import { fetchingError, fetchingInProgress, fetchingSuccess } from './contactSlice';

// // операція "асинхронний генератор екшену" це функція яка повертає іншу функцію яка аргументом приймає діспачь
// //  і в її тілі виконується асинхронний код HTTP-запиту на сервер
// export const fetchTasks = () => async dispatch => {
//   try {
//     // ідентифікатор завантаження
//     dispatch(fetchingInProgress());
//     const response = await axios.get('/contacts/contacts');
//     // обробка даних
//     dispatch(fetchingSuccess(response.data))
//   } catch (error) {
//     dispatch(fetchingError(error));
//   }
// };

// // отримання даних
// export const fetchContactsData = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, thunkAPI) => {
//       try {
//         const response = await axios.get('/contacts/contacts');
//         return  response.data;
//       } catch (error) {
//         throw error;
//       }
//     }
//   );
