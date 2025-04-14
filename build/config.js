import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { dirname, resolve } from "path";
// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, "../.env") });
