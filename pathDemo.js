import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// basename() - returns last portion of path
console.log(path.basename(filePath));

// dirname() - returns jus the dir path
console.log(path.dirname(filePath));

// extname() - returns the type of the file
console.log(path.extname(filePath));

// parse() - gives an object with all of the above details
console.log(path.parse(filePath));

// Getting current file name
const __filename = url.fileURLToPath(import.meta.url);

// Getting current dir name
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// Join() - Joins and constructs a path with the right delimiters
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

// resolve() - similar to join and can be used inter changeably but resolve uses absolute path
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);
