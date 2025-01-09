import { HttpResponse } from "msw";

// テスト環境かどうかを判定
const isTesting = import.meta.env.DEV;

export const delayedResponse = async (
  responseBody:
    | string
    | number
    | boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Record<string, any>
    | null
    | undefined,
  options = {},
) => {
  // テスト環境での遅延時間を設定
  const delayTime = isTesting ? 0 : 500;

  // 指定された時間だけ待機
  await new Promise((resolve) => setTimeout(resolve, delayTime));

  // レスポンスを返す
  return HttpResponse.json(responseBody, options);
};
