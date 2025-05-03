const STORAGE_KEY = 'reviews';

export default class Reviews {
  static save(reviews) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }

  static load() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
}
