export async function initDB() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('VedantIQ_DB', 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('images')) {
        db.createObjectStore('images');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveImage(key: string, base64: string) {
  const db = await initDB();
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction('images', 'readwrite');
    const store = tx.objectStore('images');
    const req = store.put(base64, key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

export async function loadImage(key: string) {
  const db = await initDB();
  return new Promise<string | null>((resolve, reject) => {
    const tx = db.transaction('images', 'readonly');
    const store = tx.objectStore('images');
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}
