const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
  id: "community.witanime.abuumesho",
  version: "1.0.0",
  name: "WitAnime by AbuUmesho",
  description: "أفضل إضافة لمشاهدة الأنمي من ويت أنمي",
  types: ["movie", "series"],
  catalogs: [],
  resources: ["stream"]
};

const builder = new addonBuilder(manifest);

// هنا يجي كود السكراب اللي يربط بموقع WitAnime
builder.defineStreamHandler(async ({ type, id }) => {
  // هذا المكان اللي نربط فيه السيرفر
  return { streams: [] }; 
});

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 });
