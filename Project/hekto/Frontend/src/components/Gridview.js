import cha from "./Images/Gridview-cha.png";
import clr from "./Images/Gridview-clr.png";

import "./Gridview.css";

function Gridview() {
  return (
    <div className="gv-outer-row-2-main">
      <div className="gv-outer-cover">
        <div className="gv-outer-cover-r1">
          <Singlegridview />
          <Singlegridview />
          <Singlegridview />
          <Singlegridview />
        </div>
        <div className="gv-outer-cover-r2">
          <Singlegridview />
          <Singlegridview />
          <Singlegridview />
          <Singlegridview />
        </div>
        <div className="gv-outer-cover-r3">
          <Singlegridview />
          <Singlegridview />
          <Singlegridview />
          <Singlegridview />
        </div>
      </div>

      <div className="gv-row-2"></div>
    </div>
  );
}

export default Gridview;

function Singlegridview() {
  return (
    <div className="Singlegridview">
      <div className="gv-r1-cover">
        <div className="gv-r1-chair-1">
          <div className="gv-r1-chr-1-pic">
            <img src={cha} />
          </div>

          <label className="gv-r1-vel-ethit-eusmod">Vel elit euismod</label>
          <div className="gv-r1-mooncolor">
            <img src={clr} />
          </div>

          <div className="gv-chr1-dollor-lbl">
            <label className="gv-r1-blue-dlor"> < span className="gv-span">$26.00</span></label>
            <label className="gv-r1-pink-dollr"> <s>$42.00  </s></label>
          </div>
        </div>
      </div>
    </div>
  );
}