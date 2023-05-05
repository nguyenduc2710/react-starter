

// import React from "react";

// const Film = ({ film }) => (
//     <div className="col-4 card m-3">
//         <img className="film-img img-fluid card-img-top" src={film.image} alt={film.title} />
//         <div className="card-body">
//             <b className="film-title card-title">Title:</b> {film.title} <br />
//             <b className="film-year card-text">Year:</b> {film.year} <br />
//             <b className="film-nation card-text">Nation:</b> {film.nation} <br />
//         </div>
//     </div>
// );

// const FilmList = ({ films }) => (
//     <div className="">
//         {films.map(film => (
//             <Film film={film} key={film.id} />
//         ))}
//     </div>
// );

// const FilmData = () => {
//     const films = [
//         {
//             id: 1,
//             image: "http://genk.mediacdn.vn/2016/the-shawshank-redemption1-1474530780078.jpg",
//             title: "The Shawshank Redemption",
//             year: 1994,
//             nation: "USA"
//         },
//         {
//             id: 2,
//             image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//             title: "The Godfather",
//             year: 1972,
//             nation: "USA"
//         },
//         {
//             id: 3,
//             image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//             title: "The Godfather: Part II",
//             year: 1974,
//             nation: "USA"
//         },
//         {
//             id: 4,
//             image: "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
//             title: "The Dark Knight",
//             year: 2008,
//             nation: "USA"
//         },
//         {
//             id: 5,
//             image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
//             title: "12 Angry Men",
//             year: 1957,
//             nation: "USA"
//         },
//         {
//             id: 6,
//             image: "https://resizing.flixster.com/wlHXWmRl8UWODYweE_PtSfYaq_Y=/300x300/v2/https://flxt.tmsimg.com/assets/p15227_v_h9_bf.jpg",
//             title: "Schindler's List",
//             year: 1993,
//             nation: "USA"
//         },
//         {
//             id: 7,
//             image: "https://gepig.com/game_cover_460w/1595.jpg",
//             title: "The Lord of the Rings: The Return of the King",
//             year: 2003,
//             nation: "New Zealand"
//         },
//         {
//             id: 8,
//             image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
//             title: "Pulp Fiction",
//             year: 1994,
//             nation: "USA"
//         },
//         {
//             id: 9,
//             image: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
//             title: "Breaking Bad",
//             year: 2013,
//             nation: "USA"
//         }
//     ];

//     return (
//         <div>
//             <h1>List of Films</h1>
//             <div className="film-container row">
//                 <FilmList films={films} />
//             </div>
//         </div>
//     );
// };

// export default FilmData;

import React from "react";
import "../index.css";

const Film = ({ film }) => (
  <div className="film card m-3">
    <img src={film.image} alt={film.title} />
    <b>Title:</b> {film.title} <br />
    <b>Year:</b> {film.year} <br />
    <b>Nation:</b> {film.nation} <br />
  </div>
);

const FilmList = ({ films }) => (
  <div className="film-list">
    {films.map(film => (
      <Film film={film} key={film.id} />
    ))}
  </div>
);

const FilmData = () => {
      const films = [
        {
            id: 1,
            image: "http://genk.mediacdn.vn/2016/the-shawshank-redemption1-1474530780078.jpg",
            title: "The Shawshank Redemption",
            year: 1994,
            nation: "USA"
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            title: "The Godfather",
            year: 1972,
            nation: "USA"
        },
        {
            id: 3,
            image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            title: "The Godfather: Part II",
            year: 1974,
            nation: "USA"
        },
        {
            id: 4,
            image: "https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg",
            title: "The Dark Knight",
            year: 2008,
            nation: "USA"
        },
        {
            id: 5,
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            title: "12 Angry Men",
            year: 1957,
            nation: "USA"
        },
        {
            id: 6,
            image: "https://resizing.flixster.com/wlHXWmRl8UWODYweE_PtSfYaq_Y=/300x300/v2/https://flxt.tmsimg.com/assets/p15227_v_h9_bf.jpg",
            title: "Schindler's List",
            year: 1993,
            nation: "USA"
        },
        {
            id: 7,
            image: "https://gepig.com/game_cover_460w/1595.jpg",
            title: "The Lord of the Rings: The Return of the King",
            year: 2003,
            nation: "New Zealand"
        },
        {
            id: 8,
            image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
            title: "Pulp Fiction",
            year: 1994,
            nation: "USA"
        },
        {
            id: 9,
            image: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
            title: "Breaking Bad",
            year: 2013,
            nation: "USA"
        }
    ];

  return (
    <div>
      <h1 className="film-data-title">List of Films</h1>
      <FilmList films={films} />
    </div>
  );
};

export default FilmData;
