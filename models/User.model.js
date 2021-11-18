const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      trim: true
    },
    gender: {
      type: String,
      trim: true
    },
    hobbies: {
      type: String,
      trim: true
    },
    imageUrl: String
  },
  {
    calls : [{ type: Schema.Types.ObjectId, ref: 'Call' }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
