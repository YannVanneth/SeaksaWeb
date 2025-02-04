const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { addUser, getUsers } = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password, confirmpassword } = req.body;

    if (!firstname || !lastname || !email || !password || !confirmpassword) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const newUser = await addUser(
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    );

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
    console.log("Users fetched successfully", users);
  } catch (error) {
    console.error("Fetch users error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
