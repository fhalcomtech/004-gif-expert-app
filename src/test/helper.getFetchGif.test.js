import { getGifHelper } from "../helpers/fetchGitHelper";

describe("Testing fetchGifHelper file",()=>{

    test("Test get data by Goku category", async ()=>{
        const dataList = await getGifHelper("goku");
        expect(dataList.length).toBe(10);
    })

    test("Test get data by empty category", async ()=>{
        const dataList = await getGifHelper("");
        expect(dataList.length).toBe(0);
    })
})