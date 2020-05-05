import css from '../css/style.css';
// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newService = (function () {
  const apikey = '582d3ca14bbd4a3d877a5b4bdf891712';
  const apiUrl = 'http://newsapi.org/v2';
  return {
    topHeadLines(country = 'ua', cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apikey}`,
        cb
      );
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apikey}`, cb);
    },
  };
})();
//  init selects
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
  loadNews();
});
// Elements
const forms = document.forms['newsControls'];
const countrySelect = forms.elements['country'];
const searchInput = forms.elements['search'];

forms.addEventListener('submit', (e) => {
  e.preventDefault();
  loadNews();
});

// Load news function
function loadNews() {
  showLoader();
  const country = countrySelect.value;
  const searchText = searchInput.value;
  if (!searchText) {
    newService.topHeadLines(country, onGetResponse);
  } else {
    newService.everything(searchText, onGetResponse);
  }
}
// function on get response from service
function onGetResponse(err, res) {
  removePreLoader();
  if (err) {
    showAlert(err, 'error-msg');
    return;
  }
  if (!res.articles.length) {
    showAlert('Таких новостей нет');
    return;
  }
  renderNews(res.articles);
}
// Function render News
function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row');
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = '';
  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML('afterbegin', fragment);
}
// News Item Template function
function newsTemplate({ urlToImage, title, url, description }) {
  return `
  <div class="col s12"> 
  <div class="card">
  <div class="card-image">
  <img src="${urlToImage}">
  <span class="card-title">${title || ''}</span>
   </div>
   <div class="card-content"> 
   <p>${description || ''}</p>
   <div class="card-action">
   <a href="${url}">Read more</a>
   </div>
   </div>
  </div>
  </div>
  `;
}

function showAlert(msg, type = 'success') {
  M.toast({ html: msg, classes: type });
}

function clearContainer(container) {
  let chaild = container.lastElementChild;
  while (chaild) {
    container.removeChild(chaild);
    chaild = container.lastElementChild;
  }
}
function showLoader() {
  document.body.insertAdjacentHTML(
    'afterbegin',
    ` <div class="progress">
  <div class="indeterminate"></div>
</div>`
  );
}
function removePreLoader() {
  const loader = document.querySelector('.progress');
  if (loader) {
    loader.remove();
  }
}
