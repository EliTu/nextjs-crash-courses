"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ newMeetupApiHandler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./utils/mongoConnect.ts

async function mongoConnect() {
    // run the mongodb client
    const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://eliad91:nJsROxMSHPes0aEE@cluster1.p2aa1.mongodb.net/next-js-meetups?retryWrites=true&w=majority");
    // connect to the db
    const db = client.db();
    // get and return the relevant collection
    return {
        collection: db.collection("meetups"),
        client
    };
};

;// CONCATENATED MODULE: ./pages/api/new-meetup.ts

async function newMeetupApiHandler(req, res) {
    const { method , body  } = req;
    if (method === "POST") {
        try {
            // get the relevant collection and mongodb client
            const { collection: meetupsCollection , client  } = await mongoConnect();
            // insert a bew entry to the collection based on the form data
            await meetupsCollection.insertOne(body);
            // on finish, close the client
            client.close();
            // send a response on success
            res.status(201).json({
                message: "Meetup created!"
            });
        } catch (error) {
            // handle any errors
            console.log(error);
            res.status(500).json({
                message: "Meetup creation failed!"
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(652));
module.exports = __webpack_exports__;

})();