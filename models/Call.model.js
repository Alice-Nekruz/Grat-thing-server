const { Schema, model } = require("mongoose");

const callSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        toWhom: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        time: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        amountOfTime: Number
    },
    {
        timestamps: true,
    }
);

const Call = model("Call", callSchema);

module.exports = Call;
