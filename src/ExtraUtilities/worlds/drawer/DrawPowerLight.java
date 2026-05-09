package ExtraUtilities.worlds.drawer;

import arc.Core;
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.TextureRegion;
import mindustry.gen.Building;
import mindustry.world.Block;
import mindustry.world.draw.DrawBlock;

public class DrawPowerLight extends DrawBlock {
    public Color lightColor;
    public TextureRegion lightRegion;

    public DrawPowerLight(Color lightColor){
        this.lightColor = lightColor;
    }

    @Override
    public void load(Block block) {
        lightRegion = Core.atlas.find(block.name + "-light");
    }

    @Override
    public void draw(Building build) {
        Draw.color(lightColor);
        Draw.alpha(build.power.status);
        Draw.rect(lightRegion, build.x, build.y);
        Draw.alpha(1);
        Draw.color();
    }
}
