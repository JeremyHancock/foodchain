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
    getVendor: function (id) {
        return axios.get("/api/vendors/" + id);
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
    }
};
