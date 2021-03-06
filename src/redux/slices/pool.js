import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  poolList: []
};

const slice = createSlice({
  name: 'pool',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET POOLS
    getPoolListSuccess(state, action) {
      state.isLoading = false;
      state.poolList = action.payload;
    },

    // OPEN MODAL
    openModal(state, action) {
      const row = action.payload;
      state.isOpenModal = true;
      state.selectedPool = row;
    },

    // CLOSE MODAL
    closeModal(state) {
      state.isOpenModal = false;
      state.selectedPool = null;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { openModal, closeModal } = slice.actions;

export function getPoolList() {
  // mock.restore();
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('http://133.186.222.82:3001/pools');
      response.data.map((resp) => {
        resp.ratio = 0.03 + resp.id;
        resp.access = 'Private';
        resp.progress = (resp.id + 1) * 10;
        return resp;
      });
      dispatch(slice.actions.getPoolListSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
