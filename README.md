# 📂 Clearing the Clutter

A simple Node.js script that organizes image files in a directory by grouping them into folders based on their file extensions. This helps keep your workspace clean by automatically moving `.jpg`, `.jpeg`, `.png`, and `.gif` files into neatly organized folders.

---

## 🔧 How It Works

This script:
- Scans a given base directory (`basepath`)
- Checks each file's extension
- If the file is an image (`jpg`, `png`, `jpeg`, `gif`):
  - It moves the file into a corresponding folder based on its extension (e.g., all `.jpg` files into a `jpg/` folder)
  - If the folder does not exist, it creates it before moving

---

## 📁 Example

### Before running:
basepath/
├── image1.jpg
├── image2.png
├── image3.gif

### After running:
basepath/
├── jpg/
│ └── image1.jpg
├── png/
│ └── image2.png
├── gif/
│ └── image3.gif

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bhumiprasad14/Clearing-the-clutter.git
cd Clearing-the-clutter
```
2. Install Node.js (if not already)
Download from: https://nodejs.org/

3. Run the script
Update the basepath in index.js to your folder path (use double backslashes on Windows), then:
```bash
node index.js
```
🧠 Notes
This script uses ES Modules (import) and fs/promises, so ensure you're using Node.js v14+.

It does not process files in subdirectories — only those in the specified basepath.

