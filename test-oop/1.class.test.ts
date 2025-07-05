describe('Class', () => {

    class Customer {
        constructor() {
            console.info("Create new customer");
        }
    }

    class Order {

    }

    it('should can create class', () => {
        const customer: Customer = new Customer();
        const order = new Order();
    });

    it('should can create constructors', () => {
        new Customer();
        new Customer();
    });
});


// jadi constructor itu adalah fungsi yang akan dipanggil ketika class itu di instansiasi