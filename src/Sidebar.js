import Icons from "./Icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="logo">
        <div className="circle">C</div>
        aped
      </div>
      <h1>Explore</h1>
      <div className="side-bar-icons">
        <div className="top-icons">
          <Icons path="new.png" text="New In" />
          <Icons path="clothing.png" text="Clothing" />
          <Icons path="shoes.png" text="Shoes" />
          <Icons path="accesories.png" text="Accesories" />
          <Icons path="activewear.png" text="Activewear" />
          <Icons path="gifts.png" text="Gifts & Living" />
          <Icons path="inspiration.png" text="Inspiration" />
        </div>
        <div className="bottom-icons">
          <Icons path="vector.png" text="Help Center" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
