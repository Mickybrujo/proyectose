import Actions from "actions/Result";
import Reducer from "reducers/utils/Reducer";

class Result extends Reducer
{
  constructor()
  {
    super(new Actions());
  }

  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  };
}

export default Result;