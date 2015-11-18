module.exports = {
  movie: [
    "<div class='movieCont'>",
      "<h1><%= title %></h1>",
      "<h1><%= year %></h1><br/>",
      "<img src='<%= cover %>'/>",
      "<p><%= plot%></p>",
      "<h3><%= rating%></h3>",
      "<button class='delete'>delete</button>",
      "<button class='edit'>edit</button>",
      "<form class='movieEdit hidden' action='index.html' method='post'>",
        "<input type='text' class='form-control' name='etitle' value='<%=title %>'>",
        "<input type='text' class='form-control' name='eyear' value='<%=year %>'>",
        "<input type='text' class='form-control' name='ecover' value='<%=cover %>'>",
        "<textarea type='text' class='form-control' name='eplot'> <%=plot %></textarea>",
        "<input type='text' class='form-control' name='erating' value='<%=rating %>'>",
        "<button type='submit' name='esubmit' class='esubmit'>Submit</button>",
      "</form>",
    "</div>"
  ].join(''),

  header: [
    "<h1>IMBAd</h1>"
  ].join(''),
  footer: [
    "<h1>IMBAd</h1>"
  ].join(''),
  form: [
    "<form class='moviePost hidden' action='index.html' method='post'>",
      "<input type='text' class='form-control' name='title' value='' placeholder='Enter the movie's title here'>",
      "<input type='text' class='form-control' name='year' value='' placeholder='Eneter the movie's release year here'>",
      "<input type='text' class='form-control' name='cover' value='' placeholder='Enter the cover image URL here'>",
      "<textarea type='text' class='form-control' name='plot' value='' placeholder='Enter a short plot synopsis here'></textarea>",
      "<input type='text' class='form-control' name='rating' value='' placeholder='Enter the movie's rating here'>",
      "<button type='submit' name='submit' class='submit'>Submit</button>",
    "</form>",
    "<button class='showForm'>Add New Movie</button>"
  ].join('')
}
