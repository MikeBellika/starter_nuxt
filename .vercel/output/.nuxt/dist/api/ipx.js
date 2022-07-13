import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Users/mike/code/starter_nuxt/static","domains":["avatars.githubusercontent.com"],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
