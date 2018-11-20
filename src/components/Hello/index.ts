import {
  helloFetch,
  helloGet,
  helloGetError,
  helloGetRequested,
} from 'DUCKS/hello';
import { connect } from 'react-redux';
import AppState from 'STORE/AppState';
import HelloView from './HelloView';

export interface StateProps {
  errored: boolean;
  hello: string;
  requested: boolean;
}

export interface DispatchProps {
  helloFetch(): void;
}

const mapStateToProps = (state: AppState) => ({
  errored: helloGetError(state),
  hello: helloGet(state),
  requested: helloGetRequested(state),
});

const mapDispatchToProps = {
  helloFetch,
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(HelloView);
