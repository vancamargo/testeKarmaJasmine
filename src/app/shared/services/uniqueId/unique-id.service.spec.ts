
import { UniqueIdService } from "./unique-id.services"



describe(UniqueIdService.name, () =>{
    let service: UniqueIdService = null;
    beforeEach(() =>{
        service = new UniqueIdService();
    })

    it(`#${UniqueIdService.prototype.genarateUniqueWithPrefix.name}
        should generate id when called with prefix`, ()=>{
        const id = service.genarateUniqueWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    })

    it(`#${UniqueIdService.prototype.genarateUniqueWithPrefix.name}
        should not genarate duplicate IDs when multiple times`, ()=>{
      const ids = new Set() ;

      for(let i = 0; i < 5; i++){
          ids.add(service.genarateUniqueWithPrefix('app'));
        //  ids.add('app');
          console.log(ids);
      }

      expect(ids.size).toBe(1);


    });

    it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds}
        sould return the number of genarate when called`, ()=>{
        service.genarateUniqueWithPrefix('app');
        service.genarateUniqueWithPrefix('app');
        expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.genarateUniqueWithPrefix.name}
        sould throw when with empty`, ()=>{
        const emptyValues = [null, undefined, ''];
       //expect(() => service.genarateUniqueWithPrefix(null)).toThrow();
        //expect(() => service.genarateUniqueWithPrefix(undefined)).toThrow();
        //expect(() => service.genarateUniqueWithPrefix('')).toThrow();
        emptyValues.forEach(emptyValues =>{
            expect(() => service.genarateUniqueWithPrefix(emptyValues)).toThrow();
        });
    });


})
