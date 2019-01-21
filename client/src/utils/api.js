import axios from "axios";

export default {
  // Gets the consumer with the given id
  getConsumer: function (id) {
    return axios.get("/api/consumers/" + id);
  },
  // Gets all consumers
  getConsumers: function () {
    return axios.get("/api/consumers/");
  },
  // Deletes the consumer with the given id
  deleteConsumer: function (id) {
    return axios.delete("/api/consumers/" + id);
  },
  // Saves a consumer to the database
  postConsumer: function (consumerData) {
    return axios.post("/api/consumers", consumerData);
  },

  // Gets the vendor with the given id
  getVendor: function (user_name) {
    return axios.get("/api/vendors/user/" + user_name);
  },
  // Gets the vendor with the given id
  getVendorById: function (id) {
    return axios.get("/api/vendors/id/" + id);
  },
  // Gets all vendors
  getVendors: function () {
    return axios.get("/api/vendors/");
  },
  // Deletes the vendor with the given id
  deleteVendor: function (id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a vendor to the database
  postVendor: function (vendorData) {
    return axios.post("/api/vendors", vendorData);
  },

  // Gets the product with the given id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Gets all products
  getProducts: function () {
    return axios.get("/api/products/");
  },
  // Deletes the product with the given id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  postProduct: function (productData) {
    return axios.post("/api/products", productData);
  },

  // Gets the Link with the given id
  getLink: function (id) {
    return axios.get("/api/links/" + id);
  },
  // Gets all Links
  getLinks: function () {
    return axios.get("/api/links/");
  },
  // Deletes the Link with the given id
  deleteLink: function (id) {
    return axios.delete("/api/links/" + id);
  },
  // Saves a Link to the database
  postLink: function (LinkData) {
    return axios.post("/api/links", LinkData);
  },

  // Gets the Code with the given id
  getCode: function (code_data) {
    return axios.get("/api/codes/" + code_data);
  },
  // Gets all Codes
  getCodes: function () {
    return axios.get("/api/codes/");
  },
  // Deletes the Code with the given id
  deleteCode: function (id) {
    return axios.delete("/api/codes/" + id);
  },
  // Saves a Code to the database
  postCode: function (CodeData) {
    return axios.post("/api/codes", CodeData);
  }
};
