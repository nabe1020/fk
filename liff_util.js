// liff関連のlocalStorageのキーのリストを取得
const getLiffLocalStorageKeys = (prefix) => {
    const keys = []
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key.indexOf(prefix) === 0) {
        keys.push(key)
      }
    }
    return keys
}

// 期限切れのIDTokenをクリアする
const clearExpiredIdToken = (liffId) => {
  const keyPrefix = `LIFF_STORE:${liffId}:`
  const key = keyPrefix + 'decodedIDToken'
  const decodedIDTokenString = localStorage.getItem(key)
  if (!decodedIDTokenString) {
    return
  }
  const decodedIDToken = JSON.parse(decodedIDTokenString)
  // 有効期限をチェック
  if (new Date().getTime() > decodedIDToken.exp * 1000) {
      const keys = getLiffLocalStorageKeys(keyPrefix)
      keys.forEach(function(key) {
        localStorage.removeItem(key)
      })
  }
}

const setToday = (target) => {
  var date = new Date();
  var yyyy = date.getFullYear();
  var mm   = ("0" + (date.getMonth()+1)).slice(-2);
  var dd   = ("0" +  date.getDate())    .slice(-2);
  document.getElementById(target).value = yyyy + '-' + mm + '-' + dd;
}