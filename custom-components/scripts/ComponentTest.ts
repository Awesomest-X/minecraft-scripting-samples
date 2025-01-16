import { ItemComponentUseOnEvent, ItemCustomComponent } from "@minecraft/server";

export class CauseHungerOnConsumeComponent implements ItemCustomComponent {
  onUse(arg: ItemComponentUseOnEvent) {
    arg.source.playSound("record.pigstep"); 
  }
}
