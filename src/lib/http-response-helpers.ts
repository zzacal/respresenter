
export const isSuccessStatus = (s: number) => 200 <= s && s < 300;

type FailedEvaluation = {
  success: false,
  status: number
};

type SuccessfulEvaluation<T> = {
  success: true,
  body: T
}

export async function evaluate<T>(response: Response): Promise<SuccessfulEvaluation<T> | FailedEvaluation> {
  if(isSuccessStatus(response.status)) {
    return {success: true, body: await response.json()};
  } else {
    return {success: false, status: response.status};
  }
}
