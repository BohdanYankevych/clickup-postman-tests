const fs = require('fs');

fs.readFile('list.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    if (Array.isArray(jsonData.lists)) {
      console.log("ID and Name of objects lists:");
      jsonData.lists.forEach(list => {
        console.log(`ID: ${list.id}, Name: ${list.name}`);
      });
    } else {
      console.log("Field 'lists' not found or not an array.");
    }
  } catch (parseError) {
    console.error("JSON parsing error:", parseError);
  }
});