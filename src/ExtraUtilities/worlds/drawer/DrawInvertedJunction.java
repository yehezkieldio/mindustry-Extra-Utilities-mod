package ExtraUtilities.worlds.drawer;

import ExtraUtilities.worlds.blocks.distribution.InvertedJunction;
import arc.graphics.g2d.Draw;
import mindustry.gen.Building;
import mindustry.world.draw.*;

public class DrawInvertedJunction extends DrawBlock {
    @Override
    public void draw(Building build) {
        InvertedJunction block = (InvertedJunction) build.block;
        InvertedJunction.InvertedJunctionBuild b = (InvertedJunction.InvertedJunctionBuild) build;
        drawB(block, b);
    }
    public void drawB(InvertedJunction block, InvertedJunction.InvertedJunctionBuild build){
        Draw.rect(block.place, build.x, build.y);
        Draw.rect(block.junctionRegions[build.loc], build.x, build.y);
    }
}
