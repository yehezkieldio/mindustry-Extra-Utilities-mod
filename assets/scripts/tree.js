//The single quotation mark is used because it looks comfortable.
//科技树部分
const lib = require('blib');
const showProgressionCrafters = Core.settings.getBool("eu-show-progression-crafters", true);
const showVanillaResourceHelpers = Core.settings.getBool("eu-show-vanilla-resource-helpers", false);
const showLegacyContent = Core.settings.getBool("eu-show-legacy-content", false);
const showSelectedContent = !Core.settings.getBool("eu-hide-selected-turrets", true);
const addProgressionCrafterResearch = (content, config) => {
    if(showProgressionCrafters) lib.addToResearch(content, config);
};
const addVanillaResourceHelperResearch = (content, config) => {
    if(showVanillaResourceHelpers) lib.addToResearch(content, config);
};
const addLegacyResearch = (content, config) => {
    if(showLegacyContent) lib.addToResearch(content, config);
};
const addSelectedTurretResearch = (content, config) => {
    if(showSelectedContent) lib.addToResearch(content, config);
};
const items = require('game/items');


const { T2duo } = require('block/turret/T2duo');
const { T3duo } = require('block/turret/T3duo');
const { T2scatter } = require('block/turret/T2scatter');
const { T2scorch } = require('block/turret/T2scorch');
const { IM } = require('block/turret/IceCookie');
const { shotgun } = require('block/turret/shotgun');
const { sakura } = require('block/turret/sakura');
const { rainbow } = require('block/turret/rainbow');
const { hurricane } = require('block/turret/hurricane');
const { ms } = require('block/turret/ms');
// const { sunburst } =require('block/turret/sunburst');
const { T2lan } = require('block/turret/T2lancer');
const { stinger } = require('block/turret/stinger');
const { swT2 } = require('block/turret/T2swarmer');
const { swMin } = require('block/turret/miniswarmer');
const { T2rip } = require('block/turret/T2ripple');
const { T3rip } = require('block/turret/T3ripple');
const { T2fuse } = require('block/turret/T2fuse');
const { T3fuse } = require('block/turret/T3fuse');
const { minisp } = require('block/turret/minisp');
// const { antiaircraft } = require('block/turret/antiaircraft');
// const { sam } = require('block/turret/sam');
const { RG } = require('block/turret/RG');
const { prism } = require('block/turret/prism');
// const { blackhole } = require('block/turret/blackhole');
// const { sucker } = require('block/turret/sucker');
// const { dissipation } = require('block/turret/dissipation');
// const { heal } = require('block/turret/heal');
// const { TRS } = require('block/turret/TurretResupplyPoint');
//
const { arNode, png } = require('block/power/png');
const { T2ST } = require('block/power/T2steam');
// const { T2ther } = require('block/power/T2ther');
const { th2 } = require('block/power/th2');
// const { LG } = require('block/power/LightninGenerator');
//
// const { LB } = require('block/distribution/LB');
const { driver } = require('block/distribution/driver');
const { alloyDuct, ppc, T2IB, invertedJunction, TJ, TIJ, TR, T2LB, conduit } = require('block/distribution/T2IB');
//const { stackBridge } = require('block/distribution/stackBridge');
//const { IN } = require('block/distribution/IN');
const { T2kiln } = require('block/production/T2kiln');
const { T2melter } = require('block/production/T2melter');
const { T2PC } = require('block/production/T2PC');
const { T2PF } = require('block/production/T2PF');
const { T2SA } = require('block/production/T2SA');
const { T2CM } = require('block/production/T2CM');
const { GC } = require("block/power/GeneratorCrafter");
const { pu } = require("block/production/T2pulverize");
//const { crusher } = require("block/production/crusher");
//const { LA } = require('block/production/LA');
const { ai } = require('block/production/AdjustableIncinerator');
//const { DCF } = require('block/effect/DCF');
const { tiDrill, /*drill, */shovel, slagE, T2WE, T2CU, blastOilExtractor, dustExtractor } = require('block/production/drill');
const { chest, cargo } = require('block/effect/core');
const { und } = require('block/effect/und');
const { lu } = require('block/effect/LiquidUnloader');
const { speeder } = require('block/effect/speeder');
/*const { cure } = require('block/effect/cure');
const { unitA } = require('block/effect/unitA');
const { lighthouse } = require('block/effect/lighthouse');*/
//const { clWall, clWallL, aws, awl, rws, rwl } = require('block/defence/wall');
const { clWall, clWallL, rws, rwl } = require('block/defence/wall');

const sectorPreset = function(){
    for(var i = 0; i < arguments.length; i++){
        var preset = Vars.content.sector(arguments[i]);
        if(preset != null) return preset;
    }
    Log.warn("Extra Utilities: missing sector preset '@'.", arguments[0]);
    return null;
};

const sectorComplete = function(){
    var preset = sectorPreset.apply(null, arguments);
    return preset == null ? new Seq() : Seq.with(new Objectives.SectorComplete(preset));
};

/*-----------------------------------------------------------------------*/
addSelectedTurretResearch(T2duo, { parent: 'duo', });
addSelectedTurretResearch(T3duo, { parent: T2duo.name, });
addSelectedTurretResearch(T2scatter, { parent: 'scatter', });
addSelectedTurretResearch(T2scorch, { parent: 'scorch', });
addSelectedTurretResearch(IM, { parent: 'hail', });
addLegacyResearch(shotgun, { parent: 'duo',
    objectives: sectorComplete("crateredBattleground", "cratered-battleground", "craters")
});
addLegacyResearch(sakura, { parent: shotgun.name, });
addLegacyResearch(rainbow, { parent: shotgun.name, });
addSelectedTurretResearch(hurricane, { parent: 'arc', });
addSelectedTurretResearch(ms, { parent: hurricane.name, });
// lib.addToResearch(sunburst, { parent: hurricane.name, });
addSelectedTurretResearch(T2lan, { parent: 'lancer', });
addSelectedTurretResearch(stinger, { parent: T2lan.name, });
lib.addToResearch(swT2, { parent: 'swarmer', });
addLegacyResearch(swMin, { parent: 'duo', });
lib.addToResearch(T2rip, { parent: 'ripple', });
lib.addToResearch(T3rip, { parent: T2rip.name, });
addSelectedTurretResearch(T2fuse, { parent: 'fuse', });
addSelectedTurretResearch(T3fuse, { parent: T2fuse.name, });
addSelectedTurretResearch(minisp, { parent: 'swarmer', });
/*lib.addToResearch(antiaircraft, { parent: 'scatter',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.overgrowth),
    )
});
lib.addToResearch(sam, { parent: 'scatter',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.crateredBattleground),
    )
});*/
lib.addToResearch(RG, { parent: 'foreshadow',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.nuclearComplex),
    )
});
addLegacyResearch(prism, { parent: rainbow.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.nuclearComplex),
    )
});
/*lib.addToResearch(blackhole, { parent: sam.name, });
lib.addToResearch(sucker, { parent: 'parallax', });
lib.addToResearch(dissipation, { parent: 'segment', });
lib.addToResearch(heal, { parent: 'mend-projector', objectives: Seq.with(new Objectives.Research(Blocks.repairTurret)) });
lib.addToResearch(TRS, { parent: 'duo',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.stainedMountains),
    )
});*/
addSelectedTurretResearch(arNode, { parent: 'power-node', });
lib.addToResearch(png, { parent: 'power-node-large', });
lib.addToResearch(T2ST, { parent: 'steam-generator', });
// lib.addToResearch(T2ther, { parent: 'thermal-generator', });
addSelectedTurretResearch(th2, { parent: 'thorium-reactor', });
// lib.addToResearch(LG, { parent: 'impact-reactor', });
//
// lib.addToResearch(conduit, { parent: 'plated-conduit', });
// lib.addToResearch(LB, { parent: 'phase-conduit', });
lib.addToResearch(driver, { parent: 'phase-conduit', });
addSelectedTurretResearch(T2IB, { parent: 'bridge-conveyor',
    objectives: sectorComplete("crateredBattleground", "cratered-battleground", "craters")
});
lib.addToResearch(alloyDuct, { parent: 'armored-conveyor', });
//lib.addToResearch(stackBridge, { parent: 'plastanium-conveyor', });
lib.addToResearch(ppc, { parent: 'plastanium-conveyor', });
addSelectedTurretResearch(invertedJunction, { parent: 'junction', });
lib.addToResearch(TJ, { parent: 'junction',
    objectives: sectorComplete("crateredBattleground", "cratered-battleground", "craters")
});
addSelectedTurretResearch(TIJ, { parent: TJ.name, });
lib.addToResearch(TR, { parent: 'router',
    objectives: sectorComplete("crateredBattleground", "cratered-battleground", "craters")
});
lib.addToResearch(T2LB, { parent: 'bridge-conduit',
    objectives: sectorComplete("crateredBattleground", "cratered-battleground", "craters")
});
lib.addToResearch(conduit, { parent: 'pulse-conduit', });
/*lib.addToResearch(TLR, { parent: 'liquid-router',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.crateredBattleground),
    )
});
lib.addToResearch(IN, { parent: T2IB.name, });*/
addLegacyResearch(T2kiln, { parent: 'kiln', });
addProgressionCrafterResearch(T2melter, { parent: 'melter', });
addLegacyResearch(T2PC, { parent: 'plastanium-compressor', });
addProgressionCrafterResearch(T2PF, { parent: 'phase-weaver', });
addProgressionCrafterResearch(T2SA, { parent: 'surge-smelter', });
addProgressionCrafterResearch(T2CM, { parent: 'cryofluid-mixer', });
addLegacyResearch(GC, { parent: 'pyratite-mixer', });
addVanillaResourceHelperResearch(pu, { parent: 'pulverizer', });
//lib.addToResearch(crusher, { parent: 'pulverizer', });
//lib.addToResearch(LA, { parent: T2SA.name, });
addSelectedTurretResearch(ai, { parent: 'incinerator', });
/*lib.addToResearch(DCF, { parent: 'force-projector',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.nuclearComplex),
    )
});*/
addLegacyResearch(tiDrill, { parent: 'pneumatic-drill', });
//lib.addToResearch(drill, { parent: 'blast-drill', });
addLegacyResearch(shovel, { parent: 'pneumatic-drill', });
//lib.addToResearch(testDrill, { parent: 'laser-drill', });
addVanillaResourceHelperResearch(slagE, { parent: 'water-extractor', });
addVanillaResourceHelperResearch(T2WE, { parent: 'water-extractor', });
addVanillaResourceHelperResearch(T2CU, { parent: 'cultivator', });
addVanillaResourceHelperResearch(blastOilExtractor, { parent: 'oil-extractor', });
addVanillaResourceHelperResearch(dustExtractor, { parent: 'pneumatic-drill', });

/*lib.addToResearch(core, { parent: 'core-shard',
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.extractionOutpost),
    )
});*/
addLegacyResearch(chest, { parent: 'router', });
lib.addToResearch(cargo, { parent: 'vault', });
lib.addToResearch(und, { parent: 'unloader', });
lib.addToResearch(lu, { parent: 'liquid-tank', });
addSelectedTurretResearch(speeder, { parent: 'force-projector', });
/*lib.addToResearch(cure, { parent: 'mend-projector', });
lib.addToResearch(unitA, { parent: 'overdrive-projector', });
lib.addToResearch(lighthouse, { parent: 'illuminator', });*/
addLegacyResearch(clWall, { parent: 'copper-wall-large', });
addLegacyResearch(clWallL, { parent: clWall.name, });
// lib.addToResearch(aws, { parent: 'surge-wall-large', });
// lib.addToResearch(awl, { parent: aws.name, });
// lib.addToResearch(rws, { parent: aws.name, });
//lib.addToResearch(rws, { parent: 'surge-wall-large', });
//lib.addToResearch(rwl, { parent: rws.name, });

lib.addToResearch(items.lightninAlloy, { parent: 'surge-alloy', });

/*lib.addToResearch(start, {
    parent: SectorPresets.planetaryTerminal.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.planetaryTerminal)
    )
});
lib.addToResearch(sporeArea, {
    parent: start.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(start)
    )
});
lib.addToResearch(rail, {
    parent: start.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(start)
    )
});
lib.addToResearch(RadiationIslands, {
    parent: start.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(start)
    )
});
lib.addToResearch(Darkness, {
    parent: start.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(start)
    )
});
lib.addToResearch(Colosseum, {
    parent: Darkness.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Darkness)
    )
});
lib.addToResearch(GlacialValley, {
    parent: sporeArea.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(sporeArea)
    )
});*/
