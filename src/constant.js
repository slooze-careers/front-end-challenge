const PROD_URL = "https://slooze-test.onrender.com";
const DEV_URL = "http://localhost:5000";

if (process.env.NODE_ENV === "development") {
  module.exports.PRODUCT_URL = DEV_URL + "/products";
  module.exports.PRODUCTGET_URL = DEV_URL + "/products?id=paramId";
  module.exports.EDIT_URL = DEV_URL + "/products/paramId";
  module.exports.ADD_URL = DEV_URL + "/products";
  module.exports.LOGIN_URL =
    DEV_URL + "/users?email=paramEmail&password=paramPassword";
  module.exports.DASHBOARD_URL = DEV_URL + "/products";
} else {
  module.exports.PRODUCT_URL = PROD_URL + "/products";
  module.exports.PRODUCTGET_URL = PROD_URL + "/products?id=paramId";
  module.exports.EDIT_URL = PROD_URL + "/products/paramId";
  module.exports.ADD_URL = PROD_URL + "/products";
  module.exports.LOGIN_URL =
    PROD_URL + "/users?email=paramEmail&password=paramPassword";
  module.exports.DASHBOARD_URL = PROD_URL + "/products";
}
