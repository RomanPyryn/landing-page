import { watch } from 'fs';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buldFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buldFolder}/js/`,
		css: `${buldFolder}/css/`,
		html: `${buldFolder}/`,
		images: `${buldFolder}/img/`,
		files: `${buldFolder}/files/`,
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buldFolder,
	buldFolder: buldFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
}