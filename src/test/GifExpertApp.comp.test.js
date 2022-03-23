import {shallow} from "enzyme";
import GifExpertApp from "../components/GifExpertApp";

describe('Test for GifExpertApp component', () => {
    test('Test Initial Snapshot without default categories', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('Test Initial Snapshot with initial categories', (done) => {
        const defaultCategories = ['goku','gohan'];
        const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories}/>);
        expect(wrapper.find('ShowCategories').length).toBe(defaultCategories.length)
        expect(wrapper).toMatchSnapshot();
        done();
    })
});