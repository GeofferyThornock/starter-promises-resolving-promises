const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

const question = "Will the weather be nice today?";
const tellPromise = tell(question);

promise.then(console.log).then(goodbye).then(console.log).catch(console.error);

tellPromise
    .then((str) => {
        console.log("Fortune Teller,", question);
        console.log("Let me see", str);
    })
    .catch(console.error);
