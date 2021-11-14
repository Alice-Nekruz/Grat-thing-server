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
    }
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
