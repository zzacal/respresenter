import fs from "fs";

const settingsPath = "./appsettings.json";

export type AppSettings = {
  envs: {
    [key: string]: {
      apim: {
        key: string,
        baseUrl: string,
        appid: string
      }
    }
  }
};

export type Env = {
  [key: string]: {
    apim: {
      key: string,
      baseUrl: string,
      appid: string
    }
  }
}

let settings: AppSettings | undefined = undefined;

export async function getAppSettings(): Promise<AppSettings> {
  if(settings) {
    return settings;
  }

  const data = fs.readFileSync(settingsPath, 'utf8');
  settings = JSON.parse(data) as AppSettings;
  return settings;
}
