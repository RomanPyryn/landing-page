var gulp = require("gulp");
var ghPages = require("gulp-gh-pages");

export const deploy = () => {
	return gulp.src("./dist/**/*").pipe(ghPages());
}

