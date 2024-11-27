const url = "https://anapioficeandfire.com/api/books/";
const $app = $("#books");
const $loading = $("#loading");

$app.css("padding-left", 0);

const addBookToDOM = (item) => {
  console.log(item);
  let $element = $("<div>").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  let $title = $("<h4>").text(item.name);
  let $author = $("<p>").text(`by ${item.authors[0]}`);
  let $published = $("<p>").text(item.released.substr(0, 4));
  let $pages = $("<p>").text(`${item.numberOfPages} pages`);

  $element.append($title, $author, $published, $pages);
  $app.append($element);
};

const fetchData = (url) => {
  $.getJSON(url)
    .done((data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .fail(() => {
      console.error("An error occurred. Please try again.");
      let $error = $("<p>").text("An error occurred. Please try again.");
      $app.append($error);
    })
    .always(() => {
      $loading.remove();
    });
};

fetchData(url);
