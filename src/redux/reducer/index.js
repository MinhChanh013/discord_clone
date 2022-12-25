import handelBag from "./handelBag";
import handlModal from "./handlModal";
import hiddenBag from "./hiddenBag";
import handelHiddent from "./handelHiddent";
import handelModalSuccess from './handelModalSuccess'
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handlModal,
    handelBag,
    hiddenBag,
    handelHiddent,
    handelModalSuccess
})

export default rootReducers
