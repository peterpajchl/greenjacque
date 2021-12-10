import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import Main from './main';

Enzyme.configure({ adapter: new Adapter() });

describe('<Main />', () => {

  const container = shallow(<Main />);

  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

});