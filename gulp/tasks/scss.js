import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import postcss from "gulp-postcss";
import tailwindcss from "tailwindcss";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
		.pipe(
      sass({
        outputStyle: "expanded",
      })
	)
		.pipe(groupCssMediaQueries())
		.pipe(webpcss({
			webpClass: ".webp",
			noWebpClass: ".no-webp"
		}))
		.pipe(postcss([tailwindcss('./tailwind.config.js'), autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 versions"],
			cascade: true,
		})]))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(rename({
			extname: ".min.css"
		}))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
