const Post = require("./Post");

class PaidPost extends Post{
    constructor(price) {
        this.price = price;
    }
}

module.exports = PaidPost;