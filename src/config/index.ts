/* eslint-disable no-var */

// アンビエント宣言をして、tsファイルで宣言していないファイルにアクセスできるようにする。
declare var API_URL_CONFIG: string;

let apiUrl: string;

if (import.meta.env.PROD && !import.meta.env.VITE_MODE_DEV) {
  // リリースビルド時は、こちらが実行される。
  // API_URL_CONFIGやHOST_HQ_MODEはconfig.jsで定義される。
  apiUrl = API_URL_CONFIG;
} else {
  // デバッグ時は、こちらが実行される。
  // いつも通り環境変数からの読み込み。
  apiUrl = import.meta.env.VITE_API_URL;
}

export const API_URL = apiUrl;
