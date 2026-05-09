const lib = require("blib");
const vanillaResourceHelperVisibility = Core.settings.getBool("eu-show-vanilla-resource-helpers", false) ? BuildVisibility.shown : BuildVisibility.hidden;

const pu = extend(GenericCrafter, "pu", {});
var puBottomRegion, puRotor1Region, puRotor2Region, puTopRegion;
pu.buildType = prov(() => {
    var x = 0, y = 0;
    var totalProgress = 0;
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw(){
            x = this.x;
            y = this.y;
            totalProgress = this.totalProgress;
            if(puBottomRegion == null){
                puBottomRegion = Core.atlas.find(lib.aModName + "-pu-b");
                puRotor1Region = Core.atlas.find(lib.aModName + "-pu-1");
                puRotor2Region = Core.atlas.find(lib.aModName + "-pu-2");
                puTopRegion = Core.atlas.find(lib.aModName + "-pu-top");
            }
            Draw.rect(puBottomRegion, x, y);
            Draw.rect(puRotor1Region, x, y, 90 + totalProgress * 1.5)
            Draw.rect(puRotor2Region, x, y, 90 - totalProgress * 3);
            Draw.rect(puTopRegion,x, y);
        },
    }, pu);
});
pu.size = 2;
pu.requirements = ItemStack.with(
    Items.copper, 25,
    Items.graphite, 15,
    Items.silicon, 15,
    Items.titanium, 20,
);
pu.buildVisibility = vanillaResourceHelperVisibility;
pu.category = Category.crafting;
pu.outputItem = new ItemStack(Items.sand, 3);
pu.craftEffect = Fx.pulverize;
pu.craftTime = 36;
pu.updateEffect = Fx.pulverizeSmall;
pu.hasItems = true;
pu.hasPower = true;
pu.ambientSound = Sounds.loopGrind;
pu.ambientSoundVolume = 0.025;
pu.consumeItem(Items.scrap, 2);
pu.consumePower(1);

exports.pu = pu;
