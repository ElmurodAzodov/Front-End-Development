/**
 * storage.js
 * ---------------------------------------------------------------------------
 * localStorage va sessionStorage bilan ishlashni soddalashtiruvchi universal
 * wrapper. JSON.stringify/parse xatolarini o'zi ushlaydi, shuning uchun
 * qolgan kodda try/catch yozishga hojat qolmaydi.
 * ---------------------------------------------------------------------------
 */

const Storage = {
  /**
   * Ma'lumotni saqlash (obyekt, massiv yoki oddiy qiymat bo'lishi mumkin)
   * @param {string} key
   * @param {*} value
   * @param {boolean} session - true bo'lsa sessionStorage, aks holda localStorage
   */
  set(key, value, session = false) {
    const target = session ? sessionStorage : localStorage;
    try {
      target.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.error(`Storage.set xatolik ("${key}"):`, err);
      return false;
    }
  },

  /**
   * Ma'lumotni o'qish
   * @param {string} key
   * @param {*} fallback - topilmasa qaytariladigan qiymat
   * @param {boolean} session
   */
  get(key, fallback = null, session = false) {
    const target = session ? sessionStorage : localStorage;
    const raw = target.getItem(key);
    if (raw === null) return fallback;
    try {
      return JSON.parse(raw);
    } catch (err) {
      console.error(`Storage.get xatolik ("${key}"):`, err);
      return fallback;
    }
  },

  /**
   * Bitta kalitni o'chirish
   */
  remove(key, session = false) {
    (session ? sessionStorage : localStorage).removeItem(key);
  },

  /**
   * Berilgan prefiks bilan boshlanadigan barcha kalitlarni o'chirish
   * (masalan, "session_" bilan boshlanadiganlarni tozalash)
   */
  clearByPrefix(prefix, session = false) {
    const target = session ? sessionStorage : localStorage;
    const keysToRemove = [];
    for (let i = 0; i < target.length; i++) {
      const key = target.key(i);
      if (key && key.startsWith(prefix)) keysToRemove.push(key);
    }
    keysToRemove.forEach((key) => target.removeItem(key));
  },
};
