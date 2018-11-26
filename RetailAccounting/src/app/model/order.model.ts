export class Order {
  public itemname: string;
  public buyer: string;
  public cost: number;
  public sell: number;
  public profit: number;
  public action: boolean;

  constructor(itemname: string, buyer: string, cost: number, sell: number, profit: number, action: boolean) {
    this.itemname = itemname;
    this.buyer = buyer;
    this.cost = cost;
    this.sell = sell;
    this.profit = profit;
    this.action = action;
  }
}
