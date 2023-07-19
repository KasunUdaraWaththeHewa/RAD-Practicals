class Book {
    constructor(name, price, author, publisher) {
        this.name = name;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
    }
    calculateDiscount() {
        throw new Error("Abstract method calculateDiscount() not implemented.");
    }
    displayDetails() {
        const discount = this.calculateDiscount();
        const discountedPrice = this.price - (this.price * discount);

        console.log("Book Details:");
        console.log("Name:", this.name);
        console.log("Author:", this.author);
        console.log("Publisher:", this.publisher);
        console.log("Price:", this.price);
        console.log("Discount:", (discount * 100) + "%");
        console.log("Discounted Price:", discountedPrice);
        console.log("---------------------------");
    }
}
class Novel extends Book {
    calculateDiscount() {
        return 0.15;
    }
}
class ShortStory extends Book {
    calculateDiscount() {
        return 0.15;
    }
}
class Biography extends Book {
    calculateDiscount() {
        return 0.1;
    }
}
class EducationalBook extends Book {
    calculateDiscount() {
        return 0.2;
    }
}