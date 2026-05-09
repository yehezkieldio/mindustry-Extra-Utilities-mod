//
const lib = require("blib");
const legacyContentVisibility = Core.settings.getBool("eu-show-legacy-content", false) ? BuildVisibility.shown : BuildVisibility.hidden;

const swMin = extend(ItemTurret, "mini-swarmer", {});

swMin.reload = 35;
swMin.shoot = new ShootBarrel();
swMin.shoot.barrels = [
    -4.5, -1.2, 0,
    0, 0, 0,
    4.5, -1.2, 0
];
swMin.shoot.shots = 3;
swMin.shoot.shotDelay = 6;
swMin.inaccuracy = 10;
swMin.range = 26 * 8;
swMin.size = 2;
swMin.health = 250 * 2 * 2;
swMin.shootSound = Sounds.shootMissile;
swMin.consumeAmmoOnce = false;

lib.Coolant(swMin, 0.2, false);
swMin.requirements = ItemStack.with(
    Items.graphite, 60,
    Items.titanium, 55,
    Items.silicon, 60
);
swMin.buildVisibility = legacyContentVisibility;
swMin.category = Category.turret;
swMin.researchCostMultiplier = 0.5;

exports.swMin = swMin;
