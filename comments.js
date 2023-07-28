// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

// Create application
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create comments
const commentsByPostId = {};

// Get