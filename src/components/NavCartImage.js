import styles from "../css/header.module.css";
import { Popover } from "react-tiny-popover";
import { useState } from "react";
import Cart from "./Cart";
export default function NavCartImage({ productCount }) {
  const [isCartShowing, setIsCartShowing] = useState(false);

  return (
    <div className={styles.navCartList}>
      {/* Cart  */}
      <Popover
        isOpen={isCartShowing}
        positions={["bottom"]} // preferred positions by priority
        content={<Cart productCount={productCount} />}
      >
        <div onClick={() => setIsCartShowing(!isCartShowing)}>
          {" "}
          <img alt="" className={styles.navCart} src="./images/icon-cart.svg" />
        </div>
      </Popover>

      {/* profile */}

      <img
        className={styles.navAvatar}
        alt=""
        src="./images/image-avatar.png"
      />
    </div>
  );
}
