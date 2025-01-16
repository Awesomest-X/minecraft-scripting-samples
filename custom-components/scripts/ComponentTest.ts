import { ItemComponentConsumeEvent, ItemCustomComponent } from "@minecraft/server";

export class CauseHungerOnConsumeComponent implements ItemCustomComponent {
  onConsume(arg: ItemComponentConsumeEvent) {
    arg.source.playSound("record.pigstep"); 
  }
}
