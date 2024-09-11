import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useCallback, useMemo } from "react";
import styled from "styled-components";

const StyledPagination = styled(Pagination)`
  & .MuiPagination-ul {
    flex-wrap: nowrap;
  }
  margin: 0px 8px;
  .MuiPaginationItem-outlined {
    border: none;
  }
  .MuiPaginationItem-outlinedPrimary.Mui-selected {
    background-color: #fff;
    border: 1px solid #00b8e4;
  }

  .MuiPaginationItem-outlinedPrimary.Mui-selected:hover,
  .MuiPaginationItem-outlinedPrimary.Mui-selected.Mui-focusVisible {
    background-color: #fff;
  }
`;

interface IProps {
  total: number | null;
  page: number;
  rowsPerPage: number;
  onChange: (value: number) => void;
  color?: "primary" | "secondary";
  listRef?: React.MutableRefObject<HTMLElement>;
}

export const UiPagination: React.FC<React.PropsWithChildren<IProps>> = ({
  total,
  page,
  rowsPerPage,
  onChange,
  color = "primary",
  listRef,
}) => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  const siblingCountValue = useMemo(() => {
    if (isXS) {
      return 0;
    }
    if (isSM) {
      return 1;
    }
    return 2;
  }, [isSM, isXS]);

  const handleChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      onChange(value);
    },
    [onChange]
  );

  if (!total || (total as number) < rowsPerPage) {
    return null;
  }

  const pagesTotal = Math.ceil((total as number) / rowsPerPage);
  return pagesTotal > 1 ? (
    <Box display="flex" alignItems="center" width={1} justifyContent="center">
      <StyledPagination
        variant="text"
        size="small"
        color={color}
        count={pagesTotal}
        page={page}
        onChange={handleChange}
        siblingCount={siblingCountValue}
      />
    </Box>
  ) : null;
};
