(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 3780:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__HjAUt"
};


/***/ }),

/***/ 7539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MeetupDetails),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/meetups/MeetupDetail.module.css
var MeetupDetail_module = __webpack_require__(3780);
var MeetupDetail_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetail_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetail.tsx


function MeetupDetail({ address , description , image , title  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetail_module_default()).detail,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: image,
                alt: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: description
            })
        ]
    }));
}
/* harmony default export */ const meetups_MeetupDetail = (MeetupDetail);

// EXTERNAL MODULE: ./utils/mongoConnect.ts
var mongoConnect = __webpack_require__(988);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.tsx





function MeetupDetails({ meetupData  }) {
    return meetupData ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meetupData.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `Details for the ${meetupData.title} meetup`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupDetail, {
                ...meetupData
            })
        ]
    }) : null;
};
async function getStaticProps(context) {
    const { params  } = context;
    const meetupId = params === null || params === void 0 ? void 0 : params.meetupId;
    // get the relevant collection and mongodb client
    const { collection: meetupsCollection , client  } = await (0,mongoConnect/* default */.Z)();
    // query the relevant meetup directly from the db collection using findOne and passing the meetup id
    const { address , image , title , _id  } = await meetupsCollection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: _id.toString(),
                address,
                image,
                title
            }
        }
    };
}
// this function is used with conjunction to getStaticProps when utilized in a dynamic page, to get all the possible dynamic paths for the generation process by Next.js (otherwise, getStaticProps will not work)
// getStaticPaths will return an object that contains a property of 'path', which is an array of objects, each holding a params property, which will include a key as the dynamic identifier name and a its value
async function getStaticPaths() {
    // get the relevant collection and mongodb client
    const { collection: meetupsCollection , client  } = await (0,mongoConnect/* default */.Z)();
    const meetupIds = await meetupsCollection.find().toArray();
    client.close();
    return {
        paths: meetupIds.map(({ _id  })=>({
                params: {
                    meetupId: _id.toString()
                }
            })
        ),
        // tells next.js if our paths array contains all of the possible dynamic path options or just some of them. 'false' means that it contains ALL of the supported paths, and if the user enters any path value that is not present in the paths array, the user will get the 404 page. If 'true', next.js will try to generate the page for the dynamic id on the server for the dynamic request. We set the value to 'false' when we can and should have all the possible paths available, and 'true' when we don't want to generate all of the possible paths and just maybe have a partial array with the main pages (e.g. the most visited pages), and leave the rest to be dynamically handled by next.js.
        fallback: false
    };
}


/***/ }),

/***/ 988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ mongoConnect)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function mongoConnect() {
    // run the mongodb client
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://eliad91:nJsROxMSHPes0aEE@cluster1.p2aa1.mongodb.net/next-js-meetups?retryWrites=true&w=majority");
    // connect to the db
    const db = client.db();
    // get and return the relevant collection
    return {
        collection: db.collection("meetups"),
        client
    };
};


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7539));
module.exports = __webpack_exports__;

})();