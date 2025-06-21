
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const suggestionRoutes = require('./routes/suggestions');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/suggestions', suggestionRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
