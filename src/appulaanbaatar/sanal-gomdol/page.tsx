import React from "react";
import Erxesform from "./component/erxesForm";

export default function page() {
  return (
    <div
      id="content"
      style={{
        display: "block",
      }}
    >
      <section className="container">
        <div className="col-md-4">
          <div id="form_container_3">
            <Erxesform /> 
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "        $(document).ready(function(){            nm.ajaxForm('#form_id_3', {                success: function(res){                    if (res.is_valid == 'true'){                        res.redirect_url ? location.href = res.redirect_url: $('#form_container_3').html(res.content);                    }else{                        $('#form_id_3 .errors').html(res.errors);                    };                },            });        });    ",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 col-md-offset-2 sanal">
          <img
            className="full_img"
            src="/static/images/-2468521239344344000_1800_x_1012.jpg"
          />
        </div>
      </section>
    </div>
  );
}
