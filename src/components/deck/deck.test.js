import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Deck from './deck';
import {
  assembleDeck
} from '../../common/common';
import Card from '../../common/card';

Enzyme.configure({ adapter: new Adapter() });

describe('<Deck /> component', () => {
  const deck = assembleDeck();

  it('should match the snapshot', () => {
    const handleDraw = sinon.spy();
    const handleShuffle = sinon.spy();
    const wrapper = shallow(<Deck cards={deck} handleDraw={handleDraw} handleShuffle={handleShuffle} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render 52 cards when given full deck', () => {
    const handleDraw = sinon.spy();
    const handleShuffle = sinon.spy();
    const wrapper = shallow(<Deck cards={deck} handleDraw={handleDraw} handleShuffle={handleShuffle} />);
    expect(wrapper.find('.deck-card').length).toEqual(52);
  });

  it('should render shuffle button', () => {
    const handleDraw = sinon.spy();
    const handleShuffle = sinon.spy();
    const wrapper = shallow(<Deck cards={deck} handleDraw={handleDraw} handleShuffle={handleShuffle} />);
    const button = wrapper.find('button[type="button"].control');
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Shuffle');
  });

  it('should render draw button', () => {
    const handleDraw = sinon.spy();
    const handleShuffle = sinon.spy();
    const wrapper = shallow(<Deck cards={deck} handleDraw={handleDraw} handleShuffle={handleShuffle} />);
    const button = wrapper.find('button[type="button"].draw-card__submit');
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Draw');
  });

  it('should allow to call shuffle', () => {
    const handleDraw = sinon.spy();
    const handleShuffle = sinon.spy();
    const wrapper = shallow(<Deck cards={deck} handleDraw={handleDraw} handleShuffle={handleShuffle} />);
    const button = wrapper.find('button[type="button"].control');
    button.simulate('click');
    expect(handleShuffle).toHaveProperty('callCount', 1);
  });

  it('should allow to call draw', () => {
    const handleDraw = sinon.spy();
    const handleShuffle = sinon.spy();
    const wrapper = shallow(<Deck cards={deck} handleDraw={handleDraw} handleShuffle={handleShuffle} />);
    const button = wrapper.find('button[type="button"].draw-card__submit');
    button.simulate('click');
    expect(handleDraw).toHaveProperty('callCount', 1);
  });

});