// Backend controller code (controller.js)
const fs = require('fs');

const getDummyText = (req, res) => {
  const { textLength } = req.body;

  fs.readFile('./local-server-files/DummyText.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the dummyText.txt file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Split the data into words
    const wordsArray = data.split(' ');

    // Extract the user-defined number of words from the array
    const dummyText = wordsArray.slice(0, textLength).join(' ');

    res.json(dummyText);
  });
};

module.exports = {
  getDummyText,
};
