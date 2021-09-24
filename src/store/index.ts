import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
const modulesFiles = require.context("./modules", false, /\.ts$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  (modules as any)[moduleName] = value.default;
  return modules;
}, {});

const store = createStore({
  modules,
  plugins: [
    createPersistedState({
      paths: ["persistedState"]
    })
  ]
});

export default store;
