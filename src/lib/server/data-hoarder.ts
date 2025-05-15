import fs from "node:fs/promises";
import type Stream from "node:stream";
import { getAppSettings } from "./appsettings";
import { randomUUID } from "node:crypto";

export async function hoard(
  path: string,
  data:
    | string
    | NodeJS.ArrayBufferView
    | Iterable<string | NodeJS.ArrayBufferView>
    | AsyncIterable<string | NodeJS.ArrayBufferView>
    | Stream
) {
  const basePath = (await getAppSettings()).resultSavePath;
  if (basePath) {
    const { directory, filename } = toDirAndFname(`${basePath}/${path}`);

    try {
      await fs.access(directory);
    } catch {
      await fs.mkdir(directory, { recursive: true });
    }

    await fs.writeFile(`${directory}/${filename}`, data);
  }
}

export function toDirAndFname(path: string): { directory: string; filename: string } {
  const segments = path.split("/");
  if (segments.length < 1) {
    throw Error("Weird. Asked to make a directory of nothing.");
  }

  if (segments.length === 1) {
    return { directory: segments[0], filename: randomUUID().toString() };
  }

  const last = segments.pop();
  return { directory: segments.join("/"), filename: last ?? "" };
}
