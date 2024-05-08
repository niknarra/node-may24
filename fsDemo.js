import fs from "fs";

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const data = fs.readFileSync("./test.txt", "utf-8");

// console.log(data);

// readFile() - Promise. then()
// fs.readFile("./test.txt", "utf-8")
//   .then((data) => console.log(data))
//   .then((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

readFile();
