import React from "react";
import { useArrayTranslation } from "../hooks";
import { UiTabs } from "../ui";
import translates from "./translates.json";
import { ORDER_PRODUCT_TABS } from "./constants";
import { PriceList } from "./PriceList";
import { PanelList } from "./PanelList";
import { ITEMS, PANELS } from "./mock";

export const Price = () => {
  const orderProductTabs = useArrayTranslation(
    ORDER_PRODUCT_TABS,
    translates,
    "label"
  );

  return (
    <>
      <UiTabs
        tabs={orderProductTabs}
        mobileView={["xs"]}
        variant="fullWidth"
        indicatorColor="primary"
        notEqual
      >
        <PriceList items={ITEMS} />
        <PanelList groups={PANELS} researches={ITEMS} />
      </UiTabs>
    </>
  );
};
