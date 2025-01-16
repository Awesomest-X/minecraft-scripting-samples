import { ItemComponentUseOnEvent, ItemCustomComponent } from "@minecraft/server";

export class PigstepComponent implements ItemCustomComponent {
  onUse(arg: ItemComponentUseOnEvent) {
    arg.source.playSound("record.pigstep"); 
  }
}
