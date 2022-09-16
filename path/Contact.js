import header from "../parts/header.js";
import footer from "../parts/footer.js";
import top_btn from "../parts/top_btn.js";

var contact = `
<div class="wrapper">
    ${header}
    <main class="contact main">
       <div class="contact-container">    
            <div>
                <h2>Contact</h2>
            </div>
            <div class="contact-mail-box">
                <form class="gform" method="POST"
                action="https://script.google.com/macros/s/AKfycbzkocfWK3Urm1h-7VkRP_7mfolY-ctEtT3VRep--A/exec">
                    <div class="form-elements">
                        <input type="text" name="name" placeholder=" Full Name"><br><br>
                        <textarea name="message" rows="10" placeholder="Your Message"></textarea><br><br>
                        <input type="text" name="email" placeholder=" Email Address"><br><br>
                        <button class="contact-button">
                            <i class="fa fa-paper-plane"></i>&nbsp;Send
                        </button>
                    </div>
                    <div class="thankyou_message" style="display:none;">
                        <h3>Thanks</h3>
                        <p>I will get back to you soon!</p><br>
                    </div>
                </form>       
            </div>
       </div>
    </main>
    ${top_btn}
    ${footer}
</div>
`
export default contact;