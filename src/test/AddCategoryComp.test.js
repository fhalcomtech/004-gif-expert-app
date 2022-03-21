import {shallow} from 'enzyme'
import '@testing-library/jest-dom';
import { AddCategoryComp } from '../components/AddCategoryComp';

describe("Create describe <AddCategoryComp/>", () => {
    const categs = ['goku','vegeta','itachi','naruto'];
    const getRandomArbitrary = (min, max) => (Math.random() * (max - min) + min)
    const fnGetCateg = () => categs.at(getRandomArbitrary(0,4));

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategoryComp setCategories={setCategories}/>);
    const inputText = wrapper.find(`input`);
    const formSim = wrapper.find("form");
    let varTests = "";

    beforeEach(()=>{
        jest.clearAllTimers();
        wrapper = shallow(<AddCategoryComp setCategories={setCategories}/>);
    });

    test("Creating Snapshop", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test("Simulate Changes in input type text", ()=>{
        inputText.simulate("change",{target:{value:'Huguito'}});
    });

    test("Simulate form submit", ()=>{
        const submitMsg = 'Submit by form';
        formSim.simulate("submit",{preventDefault:()=>{varTests = 'Submit by form'}});
        expect(varTests).toBe(submitMsg);
    });

    test("Test call not call setCategories when category is empty" , (done)=>{
        const submitMsg = 'Submit by form';
        formSim.simulate("submit",{preventDefault:()=>{varTests = 'Submit by form'}});
        expect(varTests).toBe(submitMsg);
        expect(setCategories).not.toHaveBeenCalled();
        done();
    });


    test('Test call setCategories when category is filling out',(done)=>{
        const ctg = fnGetCateg();
        const inputCtg = wrapper.find('input');
        inputCtg.simulate('change',{target:{value:ctg}});
        wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(inputCtg.props().value).toBe('');
        done();
    });
});