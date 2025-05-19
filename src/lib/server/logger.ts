
function info(message: string, ...optionalParams: unknown[]) {
  console.log(message, ...optionalParams);
}

function error(message: string, ...optionalParams: unknown[]) {
  console.error(message, ...optionalParams);
}

export const log = {
  info,
  error
};
