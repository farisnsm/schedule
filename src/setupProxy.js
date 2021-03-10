const proxy = require("http-proxy-middleware");

<<<<<<< HEAD
module.exports = app => {
    app.use(proxy("/api/*", { target: "http://localhost:5000/" }));
};
=======
module.exports = function(app) {
  app.use(
    proxy(["/api", , "/otherApi"], { target: "http://localhost:5000" })
  );
};
>>>>>>> 431261eedc2f5873064ed66893e6146577cbdf2b
