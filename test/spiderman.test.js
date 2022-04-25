const spiderman = require('./../app/spiderman')

describe("Unit test for Spiderman class", () => {
      test('1) Create an spiderman object', () => {
            //instanciamos objeto
            const andrewGarfield = new spiderman('The amazing spiderman', 31, 'Andrew Garfield', 2, 'Sony')

            //Validacion
            expect(andrewGarfield.name).toBe('The amazing spiderman')
            expect(andrewGarfield.age).toBe(31)
            expect(andrewGarfield.actor).toBe('Andrew Garfield')
            expect(andrewGarfield.movies).toBe(2)
            expect(andrewGarfield.studio).toBe("Sony")
      });
})

describe("Unit test for Spiderman class", () => {
      test('2) Use method getInfo()', () => {
            //instanciamos objeto
            const tomHolland = new spiderman('SpiderHome', 25, 'Tom Holland', 3, 'Marvel')

            //Validacion
            expect(tomHolland.name).toBe('SpiderHome')
            expect(tomHolland.age).toBe(25)
            expect(tomHolland.actor).toBe('Tom Holland')
            expect(tomHolland.movies).toBe(3)
            expect(tomHolland.studio).toBe('Marvel')
            expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studios (SpiderHome)")
      });
})
