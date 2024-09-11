import React, { useEffect, useMemo, useRef, useState } from "react";
import { UiPagination, UiSubPanel } from "../ui";
import { PRICE_ITEM_ROOT_STYLE } from "./constants";
import { PriceRow } from "./PriceRow";
import { v4 } from "uuid";
import {PriceGroupDto, PriceItemDto} from "../dto/price.dto";
import { Panel } from "./Panel";

interface PanelListProps {
    groups: Array<PriceGroupDto>;
    researches: Array<PriceItemDto>;
}

interface PanelWithInnerPanels extends PriceGroupDto {
    innerPanels: Array<PanelWithInnerPanels>;
}

export const ROWS_PER_PAGE = 5;

export const PanelList: React.FC<React.PropsWithChildren<PanelListProps>> = ({
                                                                         groups, researches
                                                                     }) => {
    const [page, setPage] = useState<number>(1);

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setPage(1);
    }, [groups]);

    const buildPanelHierarchy: (panels: PriceGroupDto[]) => Array<PanelWithInnerPanels> = (panels) => {
        const findChildren = (parentGroupNo: string): Array<PanelWithInnerPanels> => {
            return panels
                .filter(panel => panel.parentGroupNo === parentGroupNo && !!panel.active)
                .map(panel => ({
                    ...panel,
                    innerPanels: findChildren(panel.groupNo),
                }));
        };

        const topLevelPanels: Array<PanelWithInnerPanels> = panels
            .filter(panel => panel.parentGroupNo === "" && !!panel.active)
            .map(panel => ({
                ...panel,
                innerPanels: findChildren(panel.groupNo),
            }));

        return topLevelPanels;
    }
    const parentPanelsWithInnerPanels = buildPanelHierarchy(groups);
    const pagedGroups = useMemo(
        () => parentPanelsWithInnerPanels?.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE),
        [parentPanelsWithInnerPanels, page]
    );

    const renderPanel = (panel: PanelWithInnerPanels) => (
        <Panel panelNo={panel.groupNo} title={panel.groupName}>
            { panel.innerPanels?.map(innerPanel => renderPanel(innerPanel)) }
            { panel.items?.map((research => (
                <PriceRow key={v4()} item={researches?.find(r => research === +r.itemNo)}/>
            )))}
        </Panel>
    )


    return (
        <>
            <>
                <div style={PRICE_ITEM_ROOT_STYLE}>
                    <div ref={listRef}>
                        {pagedGroups?.map((group) => renderPanel(group))}
                    </div>
                </div>
            </>

            {parentPanelsWithInnerPanels?.length > ROWS_PER_PAGE && (
                <UiSubPanel
                    pagination={
                        <UiPagination
                            total={parentPanelsWithInnerPanels.length}
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
