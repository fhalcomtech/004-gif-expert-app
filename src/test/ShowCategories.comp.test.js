import {shallow} from "enzyme";
import {ShowCategories} from "../components/ShowCategories";
import {useFetchGif} from "../hooks/useFetchGif";
jest.mock("../hooks/useFetchGif");
describe('Tests ShowCategories Component', ()=>{
    const category = 'goku';

    test('Create ShowCategories component snapshot',()=>{
        useFetchGif.mockReturnValue({loading: true, data:[]})
        const wrapper = shallow(<ShowCategories category={category}/>)
        expect(wrapper).toMatchSnapshot();
    })


    test('Create ShowCategories component snapshot with fetch data',()=>{
        const nData = [{id:"xyz", url:"http://localhost/img/fhalcom.gif", title:"fhalcomX"},
            {id:"abc", url:"http://localhost/img/abc.jpg", title:"abc"}];
        useFetchGif.mockReturnValue({loading: false, data:nData})
        const wrapper = shallow(<ShowCategories category={category}/>)
        expect(wrapper).toMatchSnapshot();
    })
})