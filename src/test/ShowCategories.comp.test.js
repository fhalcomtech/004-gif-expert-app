import {shallow} from "enzyme";
import {ShowCategories} from "../components/ShowCategories";
import {useFetchGif} from "../hooks/useFetchGif";
jest.mock("../hooks/useFetchGif");
describe('Tests ShowCategories Component', (done)=>{
    const category = 'goku';

    test('Create ShowCategories component snapshot',(done)=>{
        useFetchGif.mockReturnValue({loading: true, data:[]})
        const wrapper = shallow(<ShowCategories category={category}/>)
        expect(wrapper.find('h4').text().trim()).toBe('Loading...');
        expect(wrapper).toMatchSnapshot();
        done();
    })


    test('Create ShowCategories component snapshot with fetch data',(done)=>{
        const nData = [{id:"xyz", url:"http://localhost/img/fhalcom.gif", title:"fhalcomX"},
            {id:"abc", url:"http://localhost/img/abc.jpg", title:"abc"}];
        useFetchGif.mockReturnValue({loading: false, data:nData});
        const wrapper = shallow(<ShowCategories category={category}/>);
        expect(wrapper.find('ShowCategory').length).toBe(nData.length);
        expect(wrapper).toMatchSnapshot();
        done();
    })
})