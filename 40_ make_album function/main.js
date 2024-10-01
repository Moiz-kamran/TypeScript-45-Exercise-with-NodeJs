function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling Three Functions and creating 3 variables with different values
var album1 = make_album("Moiz", "Album title No:1");
var album2 = make_album("Osama", "Album title No:2");
// Calling a make_album function with third parameter
var album3 = make_album("Hassan", "Album title No:3", 10);
// Print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);