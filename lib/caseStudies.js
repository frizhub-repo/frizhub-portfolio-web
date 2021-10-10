import fs from "fs";
import path from "path";

const studiesDirectory = path.join(process.cwd(), "studies");

export function getAllStudies() {
  const fileNames = fs.readdirSync(studiesDirectory);

  return fileNames.map((fileName) => ({
    params: {
      name: fileName.replace(/\.json$/, ""),
    },
  }));
}

export function getStudyData(name) {
  const fullPath = path.join(studiesDirectory, `${name}.json`);
  const res = fs.readFileSync(fullPath, "utf8");
  const data = JSON.parse(res);
  return {
    name,
    ...data,
  };
}
