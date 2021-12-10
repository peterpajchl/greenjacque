import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Hand from './hand';
import {
  assembleDeck
} from '../../common/common';
import Card from '../../common/card';

Enzyme.configure({ adapter: new Adapter() });

describe('<Hand /> component', () => {
  const deck = assembleDeck();
  const cards = deck.slice(0, 5);

  it('should match the snapshot', () => {
    const handleSort = sinon.spy();
    const wrapper = shallow(<Hand cards={cards} sort={handleSort} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render 5 cards when 5 cards drawn', () => {
    // should also check order
    const handleSort = sinon.spy();
    const wrapper = shallow(<Hand cards={cards} sort={handleSort} />);
    expect(wrapper.find('.drawn-card').length).toEqual(5);
  });

  it('should render enabled sort button', () => {
    const handleSort = sinon.spy();
    const wrapper = shallow(<Hand cards={cards} sort={handleSort} />);
    const button = wrapper.find('button[type="button"]');
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Sort');
    expect(button.hasClass('btn control')).toBeTruthy();
    expect(button.props().disabled).toBe(false);
  });

  it('should render sort button with disabled state for less than 2 cards', () => {
    const handleSort = sinon.spy();
    const wrapper = shallow(<Hand cards={[new Card('H', '2')]} sort={handleSort} />);
    const button = wrapper.find('button[type="button"]');
    expect(button.props().disabled).toBe(true);
  });

  it('should allow to call sort', () => {
    const handleSort = sinon.spy();
    const wrapper = shallow(<Hand cards={[new Card('H', '2')]} sort={handleSort} />);
    const button = wrapper.find('button[type="button"]');
    button.simulate('click');
    expect(handleSort).toHaveProperty('callCount', 1);
  });

});