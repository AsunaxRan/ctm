import {
  src,
  dest
} from "gulp";
import babel from "gulp-babel";

export default () =>
  src("js/*.js")
    .pipe(babel({
      presets: [
        ['@babel/env', {
          modules: false
        }]
      ]
    }))
    .pipe(dest("build/"));