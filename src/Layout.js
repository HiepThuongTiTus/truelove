import React from "react";
const Layout = () => {
  return (
    <div>
      <div class="container">
        <div class="flex-start item1 item-1">
          <p> Cậu có người thích chưa?</p>
          <div>
            <a
              href="/chua"
              className="btn btn-outline-warning"
              role="button"
              aria-disabled="true"
            >
              Chưa có!
            </a>
          </div>
          <div class="item1 item-2">
            <a href="/co" className="btn" role="button" aria-disabled="true">
              Có rồi!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Layout);
