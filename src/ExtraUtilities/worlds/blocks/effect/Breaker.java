package ExtraUtilities.worlds.blocks.effect;

import arc.Core;
import arc.graphics.Color;
import arc.math.Mathf;
import arc.math.geom.Geometry;
import arc.math.geom.Rect;
import arc.util.Align;
import arc.util.Time;
import arc.util.Tmp;
import mindustry.Vars;
import mindustry.gen.Building;
import mindustry.gen.Call;
import mindustry.graphics.Drawf;
import mindustry.graphics.Pal;
import mindustry.ui.Fonts;
import mindustry.world.Block;
import mindustry.world.Tile;

/** @author guiY */

public class Breaker extends Block {
    public float timerBreak;
    public int maxsize;
    public String baseRegionName;

    public Breaker(String name) {
        super(name);
        size = 1;
        rotate = true; //旋转找目标
        drawArrow = false;
        update = //设置了自爆，update是必要的，基本update设置true就行了
                solid = //设置固态，其实没必要
                        destructible = true;
        maxsize = 1;
        timerBreak = 180;

        rebuildable = false;
    }

    @Override
    public void drawPlace(int x, int y, int rotation, boolean valid) {
        super.drawPlace(x, y, rotation, valid);
        x = x * Vars.tilesize + (int)offset;
        y = y * Vars.tilesize + (int)offset;
        Rect rect = Tmp.r1;
        rect.setCentered(x, y, maxsize * Vars.tilesize);
        float len = Vars.tilesize * (size + maxsize) / 2f;

        rect.x += Geometry.d4x(rotation) * len;
        rect.y += Geometry.d4y(rotation) * len;

        Drawf.dashRect(valid ? Pal.accent : Pal.remove, rect);
    }

    @Override
    public void load(){
        super.load();
        if(baseRegionName != null){
            region = Core.atlas.find(baseRegionName);
            fullIcon = uiIcon = region;
        }
    }

    protected boolean canBreakWall(Tile tile){
        return tile != null && tile.block() != null && tile.build == null && tile.block().solid && !tile.block().breakable && tile.block().size <= maxsize;
    }

    public class BreakerBuild extends Building{
        public float Timer = 0;

        @Override
        public void updateTile() {
            int centerX = tileX() + Geometry.d4x(rotation) * ((block.size + maxsize) / 2);
            int centerY = tileY() + Geometry.d4y(rotation) * ((block.size + maxsize) / 2);
            int radius = maxsize / 2;
            boolean hasTarget = false;

            for(int dx = -radius; dx <= radius && !hasTarget; dx++){
                for(int dy = -radius; dy <= radius && !hasTarget; dy++){
                    hasTarget = canBreakWall(Vars.world.tile(centerX + dx, centerY + dy));
                }
            }

            if(hasTarget){
                Timer += Time.delta;
                if(Timer >= timerBreak){
                    for(int dx = -radius; dx <= radius; dx++){
                        for(int dy = -radius; dy <= radius; dy++){
                            Tile tile = Vars.world.tile(centerX + dx, centerY + dy);
                            if(canBreakWall(tile)) Call.removeTile(tile);
                        }
                    }
                    kill();
                }
            }else{
                Timer = 0;
            }
        }

        @Override
        public void draw() {
            super.draw();
            int s = Mathf.ceil((timerBreak - Timer)/60);
            String  text = "|" + s + "|";

            Fonts.def.draw(text, this.x, this.y, Color.red, 0.35f, true, Align.center);
        }
    }
}
