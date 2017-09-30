import store from '../store';
import {getUser} from '../actions';

export default function(){
  console.log("initialize App");
  store.dispatch(getUser());
}
