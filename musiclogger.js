function Album(artist, title, year) {
  this.artist = artist;
  this.title = title;
  this.year = year;
}

Album.prototype.toString = function() {
  return this.title + ' by ' + this.artist + ' from ' + this.year
};

var myalbum = new Album("Foals", "Antidotes", 2009);
var myotheralbum = new Album("Radiohead", "In Rainbows", 2008);

console.log(myalbum.toString());
console.log(myotheralbum.toString());
