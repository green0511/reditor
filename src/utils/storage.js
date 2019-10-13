export default {
  setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getItem(key) {
    let savedData = localStorage.getItem(key);
    if (savedData !== null && savedData !== undefined) {
      try {
        savedData = JSON.parse(savedData);
      } catch (error) {}
    }
    return savedData;
  }
}