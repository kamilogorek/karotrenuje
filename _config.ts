import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";

const site = lume();

site.use(date());
site.copy("assets");

export default site;
