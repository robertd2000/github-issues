import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/actions";
import { AppDispatch } from "../redux/store";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return bindActionCreators(actions, dispatch);
};
