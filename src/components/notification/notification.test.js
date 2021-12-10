import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import Notification from './notification';

Enzyme.configure({ adapter: new Adapter() });

describe('<Notification /> component', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders an empty message when not set', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').first().text()).toEqual('');
  });

  it('renders a single message when set', () => {
    const wrapper = shallow(<Notification msg="Hello" />);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').first().text()).toEqual('Hello');
  });

  it('has correct css classes when displayed', () => {
    const wrapper = shallow(<Notification msg="Hello" hasMsg={true} />);
    expect(wrapper.hasClass('notification notification--info notification--visible slide-down')).toBeTruthy();
  });

});