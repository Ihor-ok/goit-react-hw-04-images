import axios from "axios";

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// axios.defaults.baseURL = "<https://pixabay.com/api>";
const KEY = '35579810-55fc44ce50f1d75978380d9a0'

export const fetchImgWithQuery = async (searchQuery, page) => {
  const response = axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then((response) => {
    // Обробка успішної відповіді від сервера
    // console.log(response.data);
    return response
  })
  .catch((error) => {
    // Обробка помилки
    if (error.response) {
      // Помилка з бекенду, отримайте статус коду та повідомлення про помилку
      console.log('Status:', error.response.status);
      console.log('Error:', error.response.data);
    } else if (error.request) {
      // Помилка без відповіді від сервера (наприклад, немає з'єднання)
      console.log('No response received from server:', error.request);
    } else {
      // Інші помилки
      console.log('Error:', error.message);
    }
  });;
  return response
};

export default fetchImgWithQuery
