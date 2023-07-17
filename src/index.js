import CButton from "./components/c-button/index.js";
import CInput from './components/c-input/index.js';

const install = function (vue) {
    CButton.install(vue);
    CInput.install(vue);
}

export default install;