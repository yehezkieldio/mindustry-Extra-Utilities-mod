const lib = require("blib");
const items = require("game/items");
const progressionCrafterVisibility = Core.settings.getBool("eu-show-progression-crafters", true) ? BuildVisibility.shown : BuildVisibility.hidden;

const T2melter = extend(AttributeCrafter, "T2melter", {});
var t2MelterLiquidRegion;
lib.setBuildingSimple(T2melter, AttributeCrafter.AttributeCrafterBuild, {
    draw(){
        if(t2MelterLiquidRegion == null) t2MelterLiquidRegion = Core.atlas.find(lib.aModName + "-T2melter-liquid");
        this.super$draw();
        Draw.color(this.liquids.current().color);
        Draw.alpha(this.liquids.get(this.liquids.current()) / T2melter.liquidCapacity);
        Draw.rect(t2MelterLiquidRegion, this.x, this.y);
        Draw.color();
    },
});
T2melter.outputLiquid = new LiquidStack(Liquids.slag, 0.55);
T2melter.craftTime = 10;
T2melter.size = 2;
T2melter.health = 200*2*2;
T2melter.hasPower = true;
T2melter.hasLiquids = true;
T2melter.consumePower(1.5);
T2melter.consumeItem(Items.scrap, 2);
T2melter.requirements = ItemStack.with(
    Items.lead, 60,
    Items.silicon, 30,
    Items.graphite, 80
);
T2melter.itemCapacity = 10;
T2melter.boostScale = 0.55;
T2melter.buildVisibility = progressionCrafterVisibility;
T2melter.category = Category.crafting;

exports.T2melter = T2melter;
