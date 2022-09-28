
import "./Header.css";
import Header_phone from "./Images/Header_phone.png"
import Header_envelope from "./Images/Header_envelope.png"
import Header_user from "./Images/Header_user.png"
import Header_heart from "./Images/Header_heart.png"
import Header_cart from "./Images/Header_cart.png"
import Header_searchlens from "./Images/Header_searchlens.png"
function Header() {

    return <>


        <div className="Header_r1">
            <div className="Header_r1_left ">
                <div className="Header_r1_left_mailid">
                    <div className="Header_r1_left_mailid_img">
                        <img src={Header_envelope} />
                    </div>

                    <div className="Header_r1_left_mailid_mail">
                        <label>mhhasanul@gmail.com</label>
                    </div>

                </div>
                <div className="Header_r1_left_contact">
                    <div className="Header_r1_left_contact_img">
                        <img src={Header_phone} />
                    </div>
                    <div className="Header_r1_left_contact_number">
                        <label> (12345)67890</label>
                    </div>

                </div>

            </div>

            <div className="Header_r1_right">

                <div className="Header_r1_right_1">
                    <select>
                        <option> english</option>
                        <option> hindi</option>
                        <option> tamil</option>
                    </select>
                </div>

                <div className="Header_r1_right_2">
                    <select>
                        <option> INR</option>
                        <option> AUD</option>
                        <option> USD</option>
                    </select>
                </div>
                <div className="Header_r1_right_3">
                    <div className="Header_r1_right_login">
                        <button> Log In</button>
                    </div>

                    <div className="Header_r1_right_3_img">
                        <img src={Header_user} />
                    </div>

                </div>
                <div className="Header_r1_right_4">
                    <div className="Header_r1_right_4_wishlist">
                        <label> Wishlist</label>
                    </div>
                    <div className="Header_r1_right_4_img">
                        <img src={Header_heart} />
                    </div>

                </div>
                <div className="Header_r1_right_5">
                    <img src={Header_cart} />
                </div>
            </div>

        </div>
        <div className="Header_r2">
            <div className="Header_r2_col1">
                <label> Hekto</label>
            </div>
            <div className="Header_r2_col2">
                <select>
                    <option> Home</option>
                    <option> A</option>
                    <option> B</option>
                </select>
                <button> Pages </button>
                <button>Products </button>
                <button> Blog </button>
                <button>Shop </button>
                <button>Contact </button>
            </div>
            <div className="Header_r2_col3">
                <input type="text" />
                <button> <img src={Header_searchlens} /></button>
            </div>
        </div>

    </>
}
export default Header;