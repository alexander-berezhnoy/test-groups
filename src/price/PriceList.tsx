import React, { useEffect, useMemo, useRef, useState } from "react";
import { UiPagination, UiSubPanel } from "../ui";
import { PRICE_ITEM_ROOT_STYLE } from "./constants";
import { PriceRow } from "./PriceRow";
import { v4 } from "uuid";
import { PriceItemDto } from "../dto/price.dto";

interface IProps {
  items: Array<PriceItemDto>;
  disablePagination?: boolean;
  id?: string;
  panel?: boolean;
}

export const ROWS_PER_PAGE = 5;

export const PriceList: React.FC<React.PropsWithChildren<IProps>> = ({
  items,
}) => {
  const [page, setPage] = useState<number>(1);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPage(1);
  }, [items]);

  const pagedItems = useMemo(
    () => items.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE),
    [items, page]
  );

  return (
    <>
      <>
        <div style={PRICE_ITEM_ROOT_STYLE}>
          <div ref={listRef}>
            {pagedItems?.map((item) => (
              <PriceRow key={v4()} item={item} />
            ))}
          </div>
        </div>
      </>

      {items?.length > ROWS_PER_PAGE && (
        <UiSubPanel
          pagination={
            <UiPagination
              total={items.length}
              page={page}
              rowsPerPage={ROWS_PER_PAGE}
              onChange={setPage}
            />
          }
          divider
          loading={false}
        />
      )}
    </>
  );
};
