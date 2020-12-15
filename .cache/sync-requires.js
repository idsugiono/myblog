const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/sugiono/blog/.cache/dev-404-page.js"))),
  "component---node-modules-willjw-3-gatsby-theme-techblog-src-templates-paginated-list-js": hot(preferDefault(require("/home/sugiono/blog/node_modules/@willjw3/gatsby-theme-techblog/src/templates/paginated-list.js"))),
  "component---node-modules-willjw-3-gatsby-theme-techblog-src-templates-post-js": hot(preferDefault(require("/home/sugiono/blog/node_modules/@willjw3/gatsby-theme-techblog/src/templates/post.js"))),
  "component---node-modules-willjw-3-gatsby-theme-techblog-src-templates-tags-js": hot(preferDefault(require("/home/sugiono/blog/node_modules/@willjw3/gatsby-theme-techblog/src/templates/tags.js")))
}

