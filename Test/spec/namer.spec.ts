import {Namer} from "../namer";

describe("Name getName function return value",()=>{
    it("Should be defined.",()=>{
        const namer = new Namer();
        expect(namer.getName()).toBeDefined("The function getName() should be defined");
    });

    it("Should return 'MyName'",()=>{
        const namer = new Namer();
        expect(namer.getName()).toMatch("MyName");
    });

})