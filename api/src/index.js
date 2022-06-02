const { createServer } = require("./server");

const app = createServer();
const port = 3001 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}, http://localhost:${port}`);
});
