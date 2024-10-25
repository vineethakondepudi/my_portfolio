import { createStore } from "redux";
import counterReduce from "./Reducer";

const count = createStore(counterReduce);

export default count;