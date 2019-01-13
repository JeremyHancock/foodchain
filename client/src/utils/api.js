import axios from "axios";

export default {

    // Gets the consumer with the given id
    getConsumer: function (id) {
        return axios.get("/api/consumers/" + id);
    },
    // Gets all consumers
    getConsumers: function (id) {
        return axios.get("/api/consumers/");
    },
    // Deletes the consumer with the given id
    deleteConsumer: function (id) {
        return axios.delete("/api/consumers/" + id);
    },
    // Saves a consumer to the database
    postConsumer: function (consumerData) {
        return axios.post("/api/consumers", consumerData);
    }
};
