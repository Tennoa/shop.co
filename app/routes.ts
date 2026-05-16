import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("src/App.jsx"),
  route('about', "src/pages/about.jsx")
] satisfies RouteConfig;
