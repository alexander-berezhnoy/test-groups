export class PriceGroupDto {
  groupNo: string;
  groupName: string;
  parentGroupNo: string;
  items: number[];
  active: boolean;
}

export class PriceItemDto {
  itemNo: string;
  itemName: string;
}
