// Sometimes we remove words, but it doesn't
// feel right to modify old history. So this
// list includes words I removed after they
// were already used.
export const EXCLUDE_FROM_RANDOM = ['ਲਗਦਾ', 'ਲਗਭਗ', 'ਦਸਖਤ', 'ਗਰਦਨ', 'ਸ਼ਾਨਦਾਰ']

export const WORDS = [
  'ਗਰਮ',
  'ਰਚਨਾ',
  'ਚਮਕ',
  'ਅਸਲ',
  'ਜਨਮ',
  'ਅਰਥ',
  'ਸਮਝ',
  'ਲਗਦਾ',
  'ਦਰਦ',
  'ਸਫਰ',
  'ਰਬਾਬ',
  'ਸਬਕ',
  'ਗੁਬਾਰਾ',
  'ਜਬਾਨੀ',
  'ਕਾਬਲ',
  'ਖਿੜਕੀ',
  'ਗਲੀਚਾ',
  'ਕੁਰਸੀ',
  'ਫਰਸ਼',
  'ਸਰਦੀ',
  'ਬਸੰਤ',
  'ਟੋਕਰੀ',
  'ਗੁਲਾਬੀ',
  'ਸੰਤਰਾ',
  'ਕਰਮ',
  //'ਬਰਫ',
  'ਚਮਚਾ',
  'ਪਹਾੜ',
  'ਜਹਾਜ',
  'ਅਰਾਮ',
  'ਨਹਿਰ',
  'ਗਰੀਬ',
  'ਹਮਲਾ',
  'ਸਿਪਾਹੀ',
  'ਕਿਸਾਨ',
  'ਅੰਦਰ',
  'ਕੇਵਲ',
  'ਸਮਾਜ',
  'ਵਿਆਹ',
  'ਅਮੀਰ',
  'ਸਬਰ',
  'ਬਾਹਰ',
  //'ਮਹੀਨੇ',
  'ਹਾਲਤ',
  'ਪਿਆਰ',
  //'ਗਿਆਨ',
  //'ਲਿਖਿਆ',
  // 'ਸ਼ਾਮਿਲ',
  //'ਅਜਿਹਾ', in dictionary but hard
  // 'ਆਵਾਜ਼',
  // 'ਸ਼ਾਇਦ',
  // 'ਕਹਿੰਦੇ',
  //'ਪਹਿਲੇ',
  //'ਜਿਹੜੇ',
  //'ਜ਼ਰੂਰ',
  //'ਪਿਛਲੇ',
  //'ਦੁਨੀਆਂ',
  'ਸਰੀਰ',
  'ਵਿਚਾਰ',
  'ਗਿਣਤੀ',
  'ਨਜ਼ਰ',
  //'ਸਿੱਖਿਆ',
  //'ਇਲਾਵਾ',
  'ਸ਼ਹਿਰ',
  'ਕਹਾਣੀ',
  'ਸ਼ਕਤੀ',
  //'ਸੰਸਾਰ',
  'ਧਿਆਨ',
  //'ਕੋਸ਼ਿਸ਼',
  //'ਵਿਸ਼ੇਸ਼',
  //'ਦੌਰਾਨ',
  'ਉਮਰ',
  'ਤਿਆਰ',
  'ਜੀਵਨ',
  'ਧਰਮ',
  'ਬਿਮਾਰ',
  'ਅੱਖਰ',
  'ਕਮਰ',
  'ਪਾਲਕ',
  'ਅਨਾਰ',
  'ਸਵਾਲ',
  'ਕਲਮ',
  'ਕਣਕ',
  'ਟੱਕਰ',
  'ਮਟਰ',
  'ਕਿਤਾਬ',
  'ਢੱਕਣ',
  'ਸਾਬਣ',
  'ਗਾਜਰ',
  'ਸੜਕ',
  'ਸਿਤਾਰ',
  'ਮਕਾਨ',
  'ਸਸਤਾ',
  'ਹਲਕਾ',
  'ਰੁਮਾਲ',
  'ਕਮਰਾ',
  'ਤਬਲਾ',
  'ਪਰਦਾ',
  'ਗਰਦਨ',
  'ਦਸਖਤ',
  'ਮਤਲਬ',
  'ਨਾਸ਼ਤਾ',
  'ਬਰਤਨ',
  'ਰਸਤਾ',
  'ਅਦਰਕ',
  'ਅਰਦਾਸ',
  'ਖੁਰਾਕ',
  'ਟਮਾਟਰ',
  'ਥਕਾਵਟ',
  'ਦਸਤਾਰ',
  'ਹਾਦਸਾ',
  'ਦਰਬਾਰ',
  'ਕਵਿਤਾ',
  'ਡਰਪੋਕ',
  'ਨਿਮਰਤਾ',
  'ਬਿਜਲੀ',
  'ਅਸਮਾਨ',
  'ਕੀਮਤ',
  'ਅਲਮਾਰੀ',
  'ਹੌਸਲਾ',
  'ਸੋਮਵਾਰ',
  'ਬਿਮਾਰੀ',
  'ਸਰਕਾਰ',
  'ਲਗਭਗ',
  'ਵਕੀਲ',
  'ਤਲਵਾਰ',
  'ਫਰਕ',
  'ਅਨੁਸਾਰ',
  'ਖਿਆਲ',
  'ਹੜਤਾਲ',
  'ਜਾਣਕਾਰੀ',
  'ਤਸਵੀਰ',
  'ਪਰਿਵਾਰ',
  'ਕਿਰਪਾ',
  'ਵੀਰਵਾਰ',
  'ਤਲਾਕ',
  'ਇਤਿਹਾਸ',
  'ਬਿਲਕੁਲ',
  'ਬੇਚੈਨ',
  'ਨਫਰਤ',
  'ਅਸਥਾਨ',
  'ਸਾਵਧਾਨ',
  'ਅਸੰਭਵ',
  'ਵਧੀਆ',
  'ਸਲਵਾਰ',
  'ਪਸੰਦ',
  'ਸਧਾਰਨ',
  'ਸਾਹਮਣੇ',
  'ਤਨਖਾਹ',
  'ਸ਼ਨੀਵਾਰ',
  'ਸਮੁੰਦਰ',
  'ਸੂਰਜ',
  //'ਉਪਰ',
  'ਮਨੁੱਖ',
  'ਹਮਦਰਦੀ',
  'ਦਿਮਾਗ',
  'ਅੰਦੋਲਨ',
  'ਮਦਦ',
  'ਦਿਖਾਵਾ',
  'ਕਿਸਮ',
  'ਪਸੀਨਾ',
  'ਦੁਬਿਧਾ',
  'ਹੈਰਾਨੀ',
  'ਮਾਲਕ',
  'ਪਰਕਾਰ',
  'ਬਜਰੀ',
  'ਸਵੇਰ',
  'ਪਨੀਰ',
  'ਅੰਗੂਰ',
  'ਸਬੂਤ',
  'ਸਹਾਰਾ',
  'ਅਮਰੂਦ',
  'ਲਾਲਚ',
  'ਰਾਜਨੀਤੀ',
  'ਆਲਸੀ',
  'ਨੁਕਸਾਨ',
  'ਅਦਾਲਤ',
  'ਅਚਾਨਕ',
  'ਬਹਾਦਰ',
  'ਢਲਾਣ', // was a typo originally, ਨ
  'ਬਕਵਾਸ',
  'ਸ਼ਾਨਦਾਰ',
  'ਮਸਾਲਾ',
  'ਤੰਦਰੁਸਤ',
  'ਜਾਦੂਗਰ',
  'ਜਵਾਨ',
  'ਕਾਬਲੀਅਤ',
  'ਦੁਬਾਰਾ',
  'ਕਲਾਕਾਰ',
  'ਲਸਣ',
  'ਮਨੋਹਰ',
  'ਨਸੀਬ',
  'ਨਾਰੀਅਲ',
  'ਮੁਕਾਬਲਾ',
  'ਕੋਮਲ',
  'ਕਾਰੀਗਰੀ',
  'ਦਰਵਾਜਾ',
  'ਅਜਗਰ',
  'ਚਿਹਰਾ',
  'ਤਕਦੀਰ',
  'ਅਣੋਖਾ',
  'ਖੜਾਕ',
  'ਅਪਰਾਧੀ',
  'ਸੋਹਣਾ',
  'ਮੁਲਾਕਾਤ',
  'ਯਾਤਰਾ',
  'ਬਗੀਚਾ',
  'ਗੁਲਦਸਤਾ',
  'ਖਿਲਾਰਾ',
  'ਸਰੋਵਰ',
  'ਲਾਜਵਾਬ',
  'ਜਲੇਬੀ',
  'ਜੁਰਾਬ',
  'ਖੁਸ਼ਹਾਲ',
  'ਲੱਕੜ',
  'ਬੁਝਾਰਤ',
  'ਸੰਗਤ',
  'ਪਰਦੇਸੀ',
  'ਦੋਸਤ',
  'ਦਸਤਾਨਾ',
  'ਤੁਰੰਤ',
  'ਕਸਰਤ',
  'ਹਿਸਾਬ',
  'ਮਿਲਾਵਟ',
  'ਵਾਤਾਵਰਨ',
  'ਅਧਿਕਾਰੀ',
  'ਜਥੇਬੰਦੀ',
  'ਪੱਤਰਕਾਰੀ',
  'ਗਣਰਾਜ',
  'ਕਿਰਪਾਨ',
  'ਵਸਨੀਕ',
  'ਨਤੀਜਾ',
  'ਤਬਾਹੀ',
  'ਪੱਥਰ',
  'ਸਫਲ',
  'ਛਤਰੀ',
  'ਕੀਮਤੀ',
  'ਜਾਗਣਾ',
  'ਫਿਕਰ',
  'ਦਰਜਨ',
  'ਕੇਸਰੀ',
  'ਗਰਜ',
  'ਨੌਜਵਾਨ',
  'ਪੁਰਾਣਾ',
  'ਕੁਦਰਤ',
  'ਸਹਿਮਤ',
  'ਦੁਪਹਿਰ',
  'ਅਗਲਾ',
  'ਭਰੋਸਾ',
  'ਪਟਕਾ',
  'ਅਖਾੜਾ',
  'ਨਿਤਨੇਮ',
  'ਜਵਾਹਰ',
  'ਗੁਰਬਾਣੀ',
  'ਝਗੜਾ',
  'ਦਿਲਾਸਾ',
  'ਹਰਕਤ',
  'ਪਦਾਰਥ',
  'ਨਿਰਮਲ',
  'ਚੌਕੀਦਾਰ',
  'ਜਾਨਵਰ',
  'ਅਧੂਰਾ',
  'ਗਰਮ',
  'ਲਲਕਾਰ',
  'ਚਾਦਰ',
  'ਸਤਕਾਰ',
  'ਚਾਵਲ',
  'ਮੁਸੀਬਤ',
  'ਬੈਠਕ',
  'ਕਿਰਲੀ',
  'ਕਿਸਮਤ',
  'ਦੌਰਾਨ',
  'ਚਮਤਕਾਰ',
  'ਤਰੀਕਾ',
  'ਨਰਮ',
  'ਸੰਗੀਤ',
  'ਕੀਰਤਨ',
  'ਪਰਮਾਤਮਾ',
  'ਮੁਹਾਵਰਾ',
  'ਕਾਰੋਬਾਰ',
  'ਅਕਾਲ',
  'ਨੌਜਵਾਨ',
  'ਬਰਾਬਰ',
  'ਵਸੀਅਤ',
  'ਅਜਨਬੀ',
  'ਗੁਲਾਮ',
  'ਟੁਕੜਾ',
  // words copied from earlier
  'ਸਾਹਮਣੇ',
  'ਨਫਰਤ',
  'ਵਧੀਆ',
  'ਇਤਿਹਾਸ',
  'ਖੁਰਾਕ',
  'ਅਨੁਸਾਰ',
  'ਹਾਦਸਾ',
  'ਲਗਭਗ',
  'ਹੌਸਲਾ',
  'ਅਰਦਾਸ',
  'ਸਲਵਾਰ',
  'ਤਲਾਕ',
  'ਤਨਖਾਹ',
  'ਅਲਮਾਰੀ',
  'ਵੀਰਵਾਰ',
  'ਤਲਵਾਰ',
  'ਅਸੰਭਵ',
  'ਕੀਮਤ',
  'ਵਕੀਲ',
  'ਹੜਤਾਲ',
  'ਸੂਰਜ',
  'ਬਿਲਕੁਲ',
  'ਤਸਵੀਰ',
  'ਸਾਵਧਾਨ',
  'ਸੋਮਵਾਰ',
  'ਸ਼ਨੀਵਾਰ',
  'ਦਸਤਾਰ',
  'ਬਿਮਾਰੀ',
  'ਪਸੰਦ',
  'ਦਰਬਾਰ',
  'ਸਰਕਾਰ',
  'ਥਕਾਵਟ',
  'ਜਾਣਕਾਰੀ',
  'ਟਮਾਟਰ',
  'ਸਮੁੰਦਰ',
  'ਕਵਿਤਾ',
  'ਬੇਚੈਨ',
  'ਬਿਜਲੀ',
  'ਖਿਆਲ',
  'ਡਰਪੋਕ',
  'ਅਸਮਾਨ',
  'ਫਰਕ',
  'ਗਰਮ',
  'ਰਚਨਾ',
  'ਚਮਕ',
  'ਲਾਜਵਾਬ',
  'ਸਰਕਾਰ',
  'ਸਿਪਾਹੀ',
  'ਨਸੀਬ',
  'ਪਨੀਰ',
  'ਸਾਹਮਣੇ',
  'ਅਜਗਰ',
  'ਅਨਾਰ',
  'ਗੁਰਬਾਣੀ',
  'ਪਦਾਰਥ',
  'ਸਿਤਾਰ',
  'ਨਤੀਜਾ',
  'ਢੱਕਣ',
  'ਪਰਦੇਸੀ',
  'ਨੌਜਵਾਨ',
  'ਅਸਥਾਨ',
  'ਅਲਮਾਰੀ',
  'ਬੁਝਾਰਤ',
  'ਤੁਰੰਤ',
  'ਬਰਾਬਰ',
  'ਮਕਾਨ',
  'ਵਸੀਅਤ',
  'ਗੁਲਾਮ',
  'ਮਾਲਕ',
  'ਚਾਦਰ',
  'ਸਫਰ',
  'ਬਿਮਾਰ',
  'ਪਸੰਦ',
  'ਦੁਬਾਰਾ',
  'ਚਾਵਲ',
  'ਧਰਮ',
  'ਰਚਨਾ',
  'ਕਹਾਣੀ',
  'ਤਲਾਕ',
  'ਜਾਗਣਾ',
  'ਪਰਦਾ',
  'ਕਲਮ',
  'ਤਬਲਾ',
  'ਜਾਦੂਗਰ',
  'ਪਟਕਾ',
  'ਜਵਾਹਰ',
  'ਮਨੋਹਰ',
  'ਵੀਰਵਾਰ',
  'ਅਪਰਾਧੀ',
  'ਸੋਮਵਾਰ',
  'ਬੈਠਕ',
  'ਅਧਿਕਾਰੀ',
  'ਵਕੀਲ',
  'ਮੁਹਾਵਰਾ',
  'ਜਹਾਜ',
  'ਤਕਦੀਰ',
  'ਫਿਕਰ',
  'ਦਸਖਤ',
  'ਪਰਮਾਤਮਾ',
  'ਕਣਕ',
  'ਫਰਸ਼',
  'ਮਨੁੱਖ',
  'ਖੜਾਕ',
  'ਮਟਰ',
  'ਬਸੰਤ',
  'ਲਗਦਾ',
  'ਦਸਤਾਰ',
  'ਜਬਾਨੀ',
  'ਬਹਾਦਰ',
  'ਬਿਜਲੀ',
  'ਹਿਸਾਬ',
  'ਨੌਜਵਾਨ',
  'ਸਾਵਧਾਨ',
  'ਜਥੇਬੰਦੀ',
  'ਕੁਰਸੀ',
  'ਕੀਮਤੀ',
  'ਸੰਤਰਾ',
  'ਕਾਰੋਬਾਰ',
  'ਬਗੀਚਾ',
  'ਵਿਆਹ',
  'ਵਾਤਾਵਰਨ',
  'ਹਮਲਾ',
  'ਸਰਦੀ',
  'ਨੁਕਸਾਨ',
  'ਕਿਸਮਤ',
  'ਦਿਮਾਗ',
  'ਗਲੀਚਾ',
  'ਬਿਮਾਰੀ',
  'ਸਬਕ',
  'ਦੌਰਾਨ',
  'ਪਹਾੜ',
  'ਚੌਕੀਦਾਰ',
  'ਪਿਆਰ',
  'ਟਮਾਟਰ',
  'ਲਸਣ',
  'ਗਰਮ',
  'ਜੀਵਨ',
  'ਨਰਮ',
  'ਅਸਲ',
  'ਸਮੁੰਦਰ',
  'ਸਬਰ',
  'ਅਦਾਲਤ',
  'ਭਰੋਸਾ',
  'ਸਲਵਾਰ',
  'ਬਾਹਰ',
  'ਗਰਮ',
  'ਦਰਜਨ',
  'ਕਿਰਲੀ',
  'ਕਮਰ',
  'ਹਾਦਸਾ',
  'ਕਾਬਲ',
  'ਵਿਚਾਰ',
  'ਦੁਪਹਿਰ',
  'ਹਲਕਾ',
  'ਕੋਮਲ',
  'ਰਸਤਾ',
  'ਕਿਤਾਬ',
  'ਤਿਆਰ',
  'ਚਮਚਾ',
  'ਨਿਰਮਲ',
  'ਲਾਲਚ',
  'ਸਧਾਰਨ',
  'ਅਕਾਲ',
  'ਦਰਵਾਜਾ',
  'ਅਸਮਾਨ',
  'ਅਰਥ',
  'ਗਾਜਰ',
  'ਕੇਸਰੀ',
  'ਤਲਵਾਰ',
  'ਹਾਲਤ',
  'ਕਿਰਪਾਨ',
  'ਅਣੋਖਾ',
  'ਦਸਤਾਨਾ',
  'ਆਲਸੀ',
  'ਟੁਕੜਾ',
  'ਅੰਦੋਲਨ',
  'ਮੁਲਾਕਾਤ',
  'ਸਵੇਰ',
  'ਮਦਦ',
  'ਅਰਾਮ',
  'ਜਨਮ',
  'ਦਿਲਾਸਾ',
  'ਗੁਬਾਰਾ',
  'ਪਸੀਨਾ',
  'ਲਲਕਾਰ',
  'ਚਮਕ',
  'ਮਤਲਬ',
  'ਛਤਰੀ',
  'ਢਲਾਣ',
  'ਬਿਲਕੁਲ',
  'ਮੁਕਾਬਲਾ',
  'ਪਾਲਕ',
  'ਦਰਬਾਰ',
  'ਸਹਿਮਤ',
  'ਅਖਾੜਾ',
  'ਕੁਦਰਤ',
  'ਦਿਖਾਵਾ',
  'ਖੁਰਾਕ',
  'ਗਰਦਨ',
  'ਕਿਸਮ',
  'ਨਫਰਤ',
  'ਤੰਦਰੁਸਤ',
  'ਬੇਚੈਨ',
  'ਅਦਰਕ',
  'ਸਮਝ',
  'ਪੱਤਰਕਾਰੀ',
  'ਸੜਕ',
  'ਕੀਰਤਨ',
  'ਸਾਬਣ',
  'ਅਜਨਬੀ',
  'ਝਗੜਾ',
  'ਕਿਸਾਨ',
  'ਧਿਆਨ',
  'ਕਵਿਤਾ',
  'ਹੜਤਾਲ',
  'ਸੰਗਤ',
  'ਅੱਖਰ',
  'ਦਰਦ',
  'ਕੇਵਲ',
  'ਪੁਰਾਣਾ',
  'ਕਸਰਤ',
  'ਨਹਿਰ',
  'ਸੰਗੀਤ',
  'ਮੁਸੀਬਤ',
  'ਟੱਕਰ',
  'ਟੋਕਰੀ',
  'ਲੱਕੜ',
  'ਬਜਰੀ',
  'ਵਸਨੀਕ',
  'ਅਮਰੂਦ',
  'ਚਿਹਰਾ',
  'ਬਕਵਾਸ',
  'ਸਮਾਜ',
  'ਹਰਕਤ',
  'ਮਸਾਲਾ',
  'ਤਸਵੀਰ',
  'ਹਮਦਰਦੀ',
  'ਜੁਰਾਬ',
  'ਗਰਜ',
  'ਜਲੇਬੀ',
  'ਸਵਾਲ',
  'ਸਸਤਾ',
  'ਗੁਲਾਬੀ',
  'ਅੰਗੂਰ',
  'ਕਮਰਾ',
  'ਪੱਥਰ',
  'ਅਚਾਨਕ',
  'ਕਲਾਕਾਰ',
  'ਦੋਸਤ',
  'ਖਿੜਕੀ',
  'ਹੈਰਾਨੀ',
  'ਜਵਾਨ',
  'ਮਿਲਾਵਟ',
  'ਤਨਖਾਹ',
  'ਥਕਾਵਟ',
  'ਲਗਭਗ',
  'ਕਾਰੀਗਰੀ',
  'ਬਰਤਨ',
  'ਖਿਆਲ',
  'ਨਾਰੀਅਲ',
  'ਚਮਤਕਾਰ',
  'ਅਗਲਾ',
  'ਸਰੀਰ',
  'ਅਮੀਰ',
  'ਸਬੂਤ',
  'ਹੌਸਲਾ',
  'ਰਬਾਬ',
  'ਜਾਨਵਰ',
  'ਤਬਾਹੀ',
  'ਜਾਣਕਾਰੀ',
  'ਗੁਲਦਸਤਾ',
  'ਡਰਪੋਕ',
  'ਸੋਹਣਾ',
  'ਤਰੀਕਾ',
  'ਗਿਣਤੀ',
  'ਸਹਾਰਾ',
  'ਗਰੀਬ',
  'ਵਧੀਆ',
  'ਅਧੂਰਾ',
  'ਰੁਮਾਲ',
  'ਕਾਬਲੀਅਤ',
  'ਸੂਰਜ',
  'ਅੰਦਰ',
  'ਕੀਮਤ',
  'ਤੁਹਾਨੂੰ',
  'ਕਿਉਂਕਿ',
  'ਦੱਸਿਆ',
  'ਆਪਣਾ',
]
