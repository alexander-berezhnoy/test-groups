import {
  Box,
  CardActions,
  CardHeader,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import { InfoOutlined, Add } from "@material-ui/icons";
import React, { useMemo } from "react";
import { useScreenWidth } from "../hooks";
import { UiTableButton } from "../ui";
import { CartHeaderValue, CartItem } from "./CartStyled";
import { PriceItemDto } from "../dto/price.dto";

interface IProps {
  item?: PriceItemDto;
}

const DEFAULT_UNKNOWN_RESEARCH = { itemName: "Невідоме дослідження", itemNo: "0"};

export const PriceRow: React.FC<React.PropsWithChildren<IProps>> = ({
  item,
}) => {
  const { itemNo, itemName } = item ?? DEFAULT_UNKNOWN_RESEARCH;

  const breakPoint = useScreenWidth();
  const mobile = useMemo(
    () => !!breakPoint && ["xs"].includes(breakPoint),
    [breakPoint]
  );

  return (
    <>
      <CartItem variant="outlined">
        <CardHeader
          disableTypography
          title={
            <>
              {!mobile ? (
                <>
                  <CartHeaderValue>{itemName}</CartHeaderValue>

                  <Box width={1}></Box>
                </>
              ) : (
                <Typography
                  variant="caption"
                  color="textSecondary"
                >{`Код: ${itemNo}`}</Typography>
              )}
            </>
          }
          subheader={
            mobile && (
              <>
                <CartHeaderValue>{itemName}</CartHeaderValue>

                <Box width={1}></Box>
              </>
            )
          }
          action={
            <>
              <IconButton
                size="small"
                component={Link}
                rel="noreferrer"
                target="_blank"
                color="primary"
              >
                <InfoOutlined fontSize="small" color="inherit" />
              </IconButton>
              {!mobile && (
                <UiTableButton
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  size="small"
                  variant="contained"
                  color="primary"
                  $isIcon
                >
                  <Add />
                </UiTableButton>
              )}
            </>
          }
        />

        {mobile && (
          <CardActions>
            <Box display="flex" width={1} justifyContent="space-between">
              <UiTableButton
                disableElevation
                disableFocusRipple
                disableRipple
                size="small"
                variant="contained"
                color="primary"
                $isIcon
              >
                <Add />
              </UiTableButton>
            </Box>
          </CardActions>
        )}
      </CartItem>
    </>
  );
};
