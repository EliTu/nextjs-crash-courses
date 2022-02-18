(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2430:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b"
};


/***/ }),

/***/ 9673:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 5869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9673);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 8567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.tsx
var Card = __webpack_require__(5869);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(2430);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.tsx




function MeetupItem({ address , id , image , title  }) {
    const router = (0,router_.useRouter)();
    const showDetailsHandler = ()=>{
        router.push("/" + id);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: image,
                        alt: title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showDetailsHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    }));
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(6672);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.tsx



function MeetupList({ meetups  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (MeetupList_module_default()).list,
        children: meetups.map(({ address , id , image , title  })=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                id: id,
                image: image,
                title: title,
                address: address
            }, id)
        )
    }));
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

// EXTERNAL MODULE: ./utils/mongoConnect.ts
var mongoConnect = __webpack_require__(988);
;// CONCATENATED MODULE: ./pages/index.tsx




function HomePage({ meetups  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Next.js Meetups"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "This is a small Next.js app to learn Next.js concepts"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                meetups: meetups
            })
        ]
    }));
};
// this function runs for each incoming request
// export function getServerSideProps(context: GetServerSidePropsContext): GetServerSidePropsResult<HomePageProps> {
//   // can access the req and res objects for incoming requests, like in node.js and express
//   const request = context.req;
//  const response = context.res;
//   // fetch data from an API or run server-side logic here
//   return {
//     props: {
//       meetups: MOCK_MEETUPS,
//     },
//   };
// }
// this function runs by Next at build time or after a timeout when configuring a revalidate (when there are incoming requests)
async function getStaticProps() {
    // fetch data from an API or run server-side logic here
    // get the relevant collection and mongodb client
    const { collection: meetupsCollection , client  } = await (0,mongoConnect/* default */.Z)();
    // get the entire meetups collection list from the db
    const meetups = await meetupsCollection.find().toArray();
    // close db connection after ending the operation
    client.close();
    return {
        props: {
            // the collection returns an _id property which is a special mongodb object, it needs to be converted to string and assigned to id property first
            meetups: meetups.map(({ _id , address , image , title  })=>({
                    address,
                    image,
                    title,
                    id: _id.toString()
                })
            )
        },
        revalidate: 10
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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(8567));
module.exports = __webpack_exports__;

})();