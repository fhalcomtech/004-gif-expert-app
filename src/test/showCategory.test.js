import React from 'react';
import {shallow} from "enzyme";
import {ShowCategory} from "../components/ShowCategory";

describe("Testing ShowCategory component",()=>
{
   const url = 'img/data/img.jpg';
   const title = 'Img title'
   const wrapper = shallow(<ShowCategory url={url} title={title}/>);
   test("ShowCategory Snapshot", () =>
   {
         expect(wrapper).toMatchSnapshot();
   });


   test("Testing title", ()=>{
      const textTitle = wrapper.find('.card-name').text();
      expect(textTitle.trim()).toBe(title);
   });


   test("Testing img container", (done)=>{
      const props = wrapper.find('.card-img').props();
      expect(props['children']===null).toBeFalsy()
      const {type, props: propsimg} = props?.children
      expect(type===null || type === undefined).toBeFalsy();
      expect(type).toBe('img');
      done();
   });
   
   test("Testing Img", (done)=>{
      const props = wrapper.find('img').props();
      const {src,alt} = props;
      expect(src).toBe(url);
      expect(alt).toBe(title);
      done();

   });

});