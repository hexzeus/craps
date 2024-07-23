const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes example
// app.use('/api', apiRouter); // Uncomment if you have API routes

// Serve index.html on specific routes
app.get(['/', '/schedule', '/tips', '/contact', '/interactive-tool1', '/interactive-tool2', '/interactive-tool3', '/interactive-tool4', '/interactive-tool5', '/interactive-tool6', '/interactive-tool7'], (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
