import Loadable from 'react-loadable';
import Loading from "../../components/_General/Loading";

export const loadmang = load => Loadable({
  loader: () => load(),
  loading: Loading
});
