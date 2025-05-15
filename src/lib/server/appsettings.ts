import fs from "node:fs/promises";
const settingsPath = process.env.APPSETTINGS_PATH ?? "/data/appsettings/appsettings.json";

export type AppSettings = {
  envs: {
    [key: string]: {
      apim: {
        key: string,
        baseUrl: string,
        appid: string
      }
    }
  },
  resultSavePath: string | undefined
};

export type Env = {
  [key: string]: {
    apim: ApimSettings
  }
}

export type ApimSettings = {
  key: string,
  baseUrl: string,
  appid: string
}

let settings: AppSettings | undefined = undefined;

export async function getAppSettings(): Promise<AppSettings> {
  if(settings) {
    return settings;
  }

  const data = await fs.readFile(settingsPath, 'utf8');
  settings = JSON.parse(data) as AppSettings;
  return settings;
}

export const getApimSettings = async (env: string): Promise<ApimSettings> => (await getAppSettings()).envs[env].apim;
