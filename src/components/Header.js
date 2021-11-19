import React from "react";
import { Link, NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Box, Drawer, Button, List, ListItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <nav>
          <ListItem>
            <NavLink
              activeStyle={{ fontWeight: "500", color: "rgb(0, 195, 137)" }}
              to="/order"
            >
              주문 배송 절차
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              activeStyle={{ fontWeight: "500", color: "rgb(0, 195, 137)" }}
              to="/products"
            >
              상품 보기
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              activeStyle={{ fontWeight: "500", color: "rgb(0, 195, 137)" }}
              to="/about"
            >
              남송 이야기
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              activeStyle={{ fontWeight: "500", color: "rgb(0, 195, 137)" }}
              to="/cs"
            >
              고객센터
            </NavLink>
          </ListItem>
        </nav>
      </List>
    </Box>
  );

  return (
    <header className="header">
      <MediaQuery minWidth={768}>
        <div className="header__wrap inner">
          <Link to="/" className="logo">
            남송FS
          </Link>
          <nav>
            <ul className="gnb">
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                  to="/order"
                >
                  주문 배송 절차
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                  to="/products"
                >
                  상품 보기
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                  to="/about"
                >
                  남송 이야기
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeStyle={{ fontWeight: "600", color: "rgb(0, 195, 137)" }}
                  to="/cs"
                >
                  고객센터
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </MediaQuery>
      {/* mobile header */}
      <MediaQuery maxWidth={768}>
        <div className="header__wrap">
          <Link to="/" className="logo">
            남송FS
          </Link>
          <>
            <Button onClick={toggleDrawer("right", true)}>
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                style={{ color: "rgb(0, 195, 137)" }}
              />
            </Button>
            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </>
        </div>
      </MediaQuery>
    </header>
  );
}
