import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // Fetch data from the external API
    const response = await fetch("http://restapi.kadastrcard.ru/api/products");
    const data = await response.json();

    // Define the file path
    const filePath = path.join(process.cwd(), 'data', 'products.json');

    // Ensure the "data" directory exists
    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Write the data to the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // Respond to the client
    res.status(200).json({ message: 'Data written to file successfully', data });
  } catch (error) {
    console.error('Error writing to file:', error);
    res.status(500).json({ error: 'Failed to write data to file' });
  }
}
