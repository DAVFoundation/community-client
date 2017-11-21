import store from '../store';
import {getUser} from '../actions';

export default function(){
  store.dispatch(getUser());
}
