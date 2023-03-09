import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactsInitialState';
import { fetchContacts, addContact, deleteContact } from './contactsThunks';

const extraActions = [fetchContacts, addContact, deleteContact];
const createExtraActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,

  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...createExtraActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...createExtraActions('rejected')),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(...createExtraActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
