import { TfiLayoutListThumb, TfiLayoutGrid2 } from "react-icons/tfi";
import { nanoid } from "@reduxjs/toolkit";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon, Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { changeView } from "../../getData/newsSlice";

export const Icons = () => {
  const dispatch = useDispatch();
  
  return (
    <Wrapper>
      {[
        {
          logo: <TfiLayoutGrid2 />,
          title: "Grid layout",
          view: "grid"
        },
        {
          logo: <TfiLayoutListThumb />,
          title: "List layout",
          view: "list"
        },
      ].map(({ logo, title, view }) => (
        <OverlayTrigger
          key={nanoid()}
          overlay={
            <Tooltip>
              {title}
            </Tooltip>
          }
          placement="left"
        >
          <Icon 
          onClick={() => dispatch(changeView(view))}
          >
            {logo}
          </Icon>
        </OverlayTrigger>
      ))}
    </Wrapper>
  );
}