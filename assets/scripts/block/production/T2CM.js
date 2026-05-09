//引用部分，类似import，对应的是exports导出
const items = require("game/items");
const lib = require("blib");
const progressionCrafterVisibility = Core.settings.getBool("eu-show-progression-crafters", true) ? BuildVisibility.shown : BuildVisibility.hidden;
//写一个有地板加成的液体工厂
const T2CM = extend(AttributeCrafter, "T2-CM", {});
var cmBottomRegion, cmWaterRegion, cmCryofluidRegion, cmSpinnerRegion, cmTopRegion;
T2CM.buildType = prov(() => {
    
    const block = T2CM;
    var x = 0, y =0;
    return new JavaAdapter(AttributeCrafter.AttributeCrafterBuild, {
        draw(){
            x = this.x;
            y = this.y;
            if(cmBottomRegion == null){
                cmBottomRegion = Core.atlas.find(lib.aModName + "-T2-CM-bottom");
                cmWaterRegion = Core.atlas.find(lib.aModName + "-T2-CM-liquid2");
                cmCryofluidRegion = Core.atlas.find(lib.aModName + "-T2-CM-liquid");
                cmSpinnerRegion = Core.atlas.find(lib.aModName + "-T2-CM-s");
                cmTopRegion = Core.atlas.find(lib.aModName + "-T2-CM-a");
            }
            Draw.rect(cmBottomRegion,x,y);
            Draw.color(Liquids.water.color);
            Draw.alpha(this.liquids.get(Liquids.water) / block.liquidCapacity);
            Draw.rect(cmWaterRegion, x, y);
            Draw.color(block.outputLiquid.liquid.color);
            Draw.alpha(this.liquids.get(block.outputLiquid.liquid) / block.liquidCapacity);
            Draw.rect(cmCryofluidRegion, x, y);
            Draw.color();
            Draw.rect(cmSpinnerRegion, x, y, 30 + 90 * Math.sin(this.totalProgress/10));
            Draw.rect(cmTopRegion,x,y);
        },
    }, T2CM);
});
T2CM.outputLiquid = new LiquidStack(Liquids.cryofluid, 0.6);
T2CM.craftTime = 120;
T2CM.size = 3;
T2CM.hasPower = true;
T2CM.hasItems = true;
T2CM.hasLiquids = true;
T2CM.rotate = false;
T2CM.solid = true;
T2CM.outputsLiquid = true;
T2CM.liquidCapacity = 54;
T2CM.attribute = Attribute.water;
T2CM.boostScale = 0.6;
T2CM.consumePower(3);
T2CM.consumeItem(Items.titanium);
T2CM.consumeLiquid(Liquids.water, 0.6);
T2CM.requirements = ItemStack.with(
    Items.lead, 90,
    Items.graphite, 110,
    Items.silicon, 70
);
T2CM.itemCapacity = 14;
T2CM.buildVisibility = progressionCrafterVisibility;
T2CM.category = Category.crafting;

exports.T2CM = T2CM;
