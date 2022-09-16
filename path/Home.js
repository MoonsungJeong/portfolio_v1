import header from "../parts/header.js";
import link from "../parts/link.js";
import footer from "../parts/footer.js";
import top_btn from "../parts/top_btn.js";

var home = `
<div class="wrapper">
    ${header}
    <main class="home main">
        <div class="home-container">
            <div class="home-name">Moonsung Jeong</div>
            <div class="home-explanation">Web Developer in Australia (from Korea)</div>
            ${link}
        </div>
    </main>
    ${top_btn}
    ${footer}
</div>
`
export default home;