import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
  } from "react-redux";
  
  import type {} from "redux-thunk/extend-redux";
  import { AppDispatch, RootState } from './types';
  
//   export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
// export const useAppDispatch = () => useDispatch<AppDispatch | AppThunk>();
export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;