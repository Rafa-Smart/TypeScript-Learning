//  disini kita akn coba testing
import { sayHello } from "../src/1.say-hello";
// disini di pemanggilan import kita panggil fungsi sayHello dari file 1.say-hello.ts
// taoi tidak perlu menggunkan extensi .ts, karena kita akn mengcobpile lagi ini menjadi js, jadi
// nanit tidak akna jalan
describe('testing sayHello', () => {
    it('test 1...', () => {
        expect(sayHello('Rafa')).toBe('Hello, Rafa!');
    });
});
