import React from "react";

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
            <form
              action="/admin/forms/submission/3/"
              encType="multipart/form-data"
              id="form_id_3"
              method="post"
            >
              <input
                defaultValue="JnglRsjm7SSlukZgoX658BYHHosjurNX"
                name="csrfmiddlewaretoken"
                type="hidden"
              />
              <input
                defaultValue=""
                name="gerege"
                style={{
                  display: "none",
                }}
                type="text"
              />
              <h3>Санал Гомдол</h3>
              <div className="errors"></div>
              <p>
                <label>Нэр</label>
                <input name="form_field_8" type="text" />
              </p>
              <p></p>
              <p>
                <label>Утасны дугаар</label>
                <input name="form_field_9" type="text" />
              </p>
              <p></p>
              <p>
                <label>Текст</label>
                <textarea name="form_field_10" />
              </p>
              <p>
                <button type="submit">Илгээх</button>
              </p>
            </form>
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
            src="/media/ulaanbaatarbuyannew/content/-2468521239344344000_1800_x_1012.jpg"
          />
        </div>
      </section>
    </div>
  );
}
