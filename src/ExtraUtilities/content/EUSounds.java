package ExtraUtilities.content;

import ExtraUtilities.ExtraUtilitiesMod;
import arc.audio.Sound;
import arc.files.Fi;
import arc.util.Log;
import mindustry.Vars;
import mindustry.gen.Sounds;
import mindustry.mod.Mods;

public class EUSounds {
    public static Mods.LoadedMod EU = Vars.mods.getMod(ExtraUtilitiesMod.class);
    public static Sound
            prismLoop = new Sound(),
            ciallo = new Sound();

    public static void load(){
        prismLoop = loadSound("prism-beam.ogg");
        ciallo = loadSound("ciallo.mp3");
    }
    //public static Sound prismLoop = new Sound(getInternalFile("sounds").child("prism-beam.ogg"));

    public static Sound loadSound(String name){
        if(EU == null || EU.root == null){
            Log.warn("Extra Utilities: cannot load sound '@'; mod root is unavailable.", name);
            return Sounds.none;
        }

        Fi file = EU.root.child("sounds").child(name);
        if(!file.exists()){
            Log.warn("Extra Utilities: missing sound '@'.", file.path());
            return Sounds.none;
        }

        try{
            return new Sound(file);
        }catch(Throwable t){
            Log.warn("Extra Utilities: failed to load sound '@': @", file.path(), t.toString());
            return Sounds.none;
        }
    }
}
