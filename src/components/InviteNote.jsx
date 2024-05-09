import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
      <section id="invite-note">
          <div className="invite-note-wrapper">
              <h5>An Invitation from:</h5>
              <h2>Mrs. & Mr. S.P. Nisar Ahmed Sahab</h2>

              {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
              <h5 className="address mb-3">
                  H.NO.: 1/541, NGO's Colony,
                  <br /> Adoni, Kurnool Dist.,
                  <br /> Andhra Pradesh - 518 301.
              </h5>
              <p className="address">
                  Contact: <br />
                  {/* +91 83284 22208,
                  <br /> */}
                  +91 80084 56560.
              </p>
          </div>
      </section>
  );
}

export default InviteNote;
