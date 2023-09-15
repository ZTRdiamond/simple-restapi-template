# simple-restapi-template
This Rest API uses a handler to handle all routes placed in the routes folder.

You can create your own Rest API with this template
### Feature:
- can handle subfolders because it uses the glob module
- easy to import a module because it can be inserted into the route option
- you can add your own route options as needed
- handlers are functions and you can place them wherever you want.

## Explained 
### How to make route file 
```js
module.exports = {
   name: "route-name", // optional
   path: "/example", // route path
   type: "get", // basic: post or get
   isDisable: boolean, // to disable route
   hidden: boolean, // to hide route
   code: async(req, res, { ... }) => {
      // your code here...
   }
}
```

### Example route
**[/example: example.js](https://github.com/ZTRdiamond/simple-restapi-template/blob/main/routes/example.js)**

**[/waifu: waifu.js](https://github.com/ZTRdiamond/simple-restapi-template/blob/main/routes/get.js)**
