import { TfiLayoutListThumb, TfiLayoutGrid2 } from "react-icons/tfi";
import { nanoid } from "@reduxjs/toolkit";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeView, selectView } from "./viewSlice";
import { useTranslation } from 'react-i18next';

export const Icons = () => {
  const dispatch = useDispatch();
  const activeView = useSelector(selectView);
  const { t } = useTranslation();

  return (
    <Wrapper>
      {[
        {
          logo: <TfiLayoutGrid2 />,
          title: {
            en: "Grid layout",
            pl: "Widok siatki"
          },
          view: "grid"
        },
        {
          logo: <TfiLayoutListThumb />,
          title: {
            en: "List layout",
            pl: "Widok listy"
          },
          view: "list"
        },
      ].map(({ logo, title, view }) => (
        <OverlayTrigger
          key={nanoid()}
          overlay={
            <Tooltip>
              {t("key") === "pl" ? title.pl : title.en}
            </Tooltip>
          }
          placement="left"
        >
          <Icon
            onClick={() => dispatch(changeView(view))}
            className={activeView === view && "active"}
          >
            {logo}
          </Icon>
        </OverlayTrigger>
      ))}
    </Wrapper>
  );
}